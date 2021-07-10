const usersDao = require("../Daos/user_dao");
const jwt = require("jsonwebtoken");
const secret = require("../secret.json");
const cashModule = require("../cashModule");
const crypto = require("crypto");

const left_salt = "161784718420041127515102024676";
const right_salt = "yniPgKVdUTkGsaQJxvSNyzniavPLwBrfETVIchUpYegDxOWljA";

async function getUserByID(userId) {
  const currentUser = await usersDao.getUserByID(userId);
  return currentUser;
}

async function getAll() {
  const allUsers = await usersDao.getAll();
  return allUsers;
}

async function updateUser(userId, userDetails) {
  await usersDao.updateUser(userId, userDetails);
}

async function userToDelete(userId) {
  await usersDao.userToDelete(userId);
}

async function register(userRegistrationDetails) {
  await validateUserDetail(userRegistrationDetails);
  userRegistrationDetails.password = crypto
    .createHash("md5")
    .update(left_salt + userRegistrationDetails.password + right_salt)
    .digest("hex");
  await usersDao.register(userRegistrationDetails);
  console.log("userDetails", userRegistrationDetails);
  return userRegistrationDetails;
}

async function validateUserDetail(userRegistrationDetails) {
  if (!userRegistrationDetails.userName) {
    throw new Error("no user name !");
  }
  const allUsers = await usersDao.getAll();
  const isUserNameExist = allUsers.filter(
    (user) => user.user_name === userRegistrationDetails.userName
  );
  console.log("isUserNameExist", isUserNameExist);
  if (isUserNameExist.user_name != null) {
    throw new Error("user name allready exist !");
  }
  if (userRegistrationDetails.password.length < 4) {
    throw new Error("to short password");
  }
  if (userRegistrationDetails.password.length > 12) {
    throw new Error("to long password");
  }
}

async function login(userLoginData) {
  userLoginData.password = crypto
    .createHash("md5")
    .update(left_salt + userLoginData.password + right_salt)
    .digest("hex");

  const userData = await usersDao.login(userLoginData);

  const saltUserName = left_salt + userLoginData.userName + right_salt;

  const jwtToken = jwt.sign({ sub: saltUserName }, secret.secret);

  cashModule.set(jwtToken, userData);
  console.log(userData);
  const successfullLogined = {
    token: jwtToken,
    userRole: userData.user_role,
    userName: userData.user_name,
  };
  return successfullLogined;
}

module.exports = {
  login,
  register,
  getAll,
  getUserByID,
  userToDelete,
  updateUser,
};
