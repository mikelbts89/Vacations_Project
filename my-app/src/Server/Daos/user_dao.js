const connection = require("./connection-wrapper");

async function register(userRegistrationDetails) {
  let sql = `INSERT INTO users (user_name, password) VALUES (?,?);`;

  let parameters = [
    userRegistrationDetails.userName,
    userRegistrationDetails.password,
  ];

  let usersRegistrationsResult;
  // try {
  usersRegistrationsResult = await connection.executeWithParameters(
    sql,
    parameters
  );

  // }
  // catch (e) {

  // This is an example, for a situation where a TECHNICAL ERROR HAD OCCURED
  // that error threw an exception - WHICH WE WANT TO WRAP with a ServerError
  // throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(user), e);
  // }
}

async function login(user) {
  // UNCOMMENT IN ORDER TO SEE A GENERAL ERROR EXAMPLE
  // let sql = "SELECTd * FROM users where username =? and password =?";
  let sql = "SELECT * FROM users where user_name =? and password =?";

  let parameters = [user.userName, user.password];

  let usersLoginResult;
  try {
    usersLoginResult = await connection.executeWithParameters(sql, parameters);
  } catch (e) {
    // This is an example, for a situation where a TECHNICAL ERROR HAD OCCURED
    // that error threw an exception - WHICH WE WANT TO WRAP with a ServerError
    throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(user), e);
  }

  // A functional (!) issue which means - the userName + password do not match
  if (usersLoginResult == null || usersLoginResult.length == 0) {
    throw new ServerError(ErrorType.UNAUTHORIZED);
  }

  console.log("All good ! ");
  return usersLoginResult[0];
}

async function getAll() {
  let sql = `SELECT * FROM users`;
  let allUsers = await connection.execute(sql);
  return allUsers;
}

async function getUserByID(userId) {
  let sql = `SELECT * FROM users WHERE id=?`;

  let parameters = [userId];
  const currentUser = await connection.executeWithParameters(sql, parameters);
  console.log(currentUser);
  if (!currentUser[0].id) {
    throw new Error();
  }
  return currentUser;
}

async function updateUser(userId, userDetails) {
  let sql = "UPDATE users SET user_name=?, password=?, is_admin=? where id=? ";
  let parameters = [
    userDetails.userName,
    userDetails.password,
    userDetails.isAdmin,
    userId,
  ];
  console.log(parameters);
  await connection.executeWithParameters(sql, parameters);
}

async function userToDelete(userId) {
  let sql = "delete from users where id=?";
  let parameters = [userId];
  await connection.executeWithParameters(sql, parameters);
}

module.exports = {
  register,
  getAll,
  getUserByID,
  userToDelete,
  updateUser,
  login,
};

/////// example //////////

// "userName":"ASD",
// "password":"1234",
// "isAdmin":false

/////////////////////////