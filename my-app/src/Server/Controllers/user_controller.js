const express = require("express");
const usersLogic = require("../Logics/user_logic");
const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const userRegistrationDetails = req.body;
    console.log(userRegistrationDetails);
    const userId = await usersLogic.register(userRegistrationDetails);
    res.json(userId);
    console.log("success");
  } catch (err) {
    res.send(err.message);
    throw new Error("controller");
  }
});

router.get("/", async (req, res) => {
  try {
    const allUsers = await usersLogic.getAll();
    res.send(allUsers);
  } catch (err) {
    res.send(400);
    throw new Error();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const currentUser = await usersLogic.getUserByID(userId);
    res.send(currentUser);
  } catch (err) {
    res.send(err.message);
    throw new Error("no user with this id");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const userDetails = req.body;
    await usersLogic.updateUser(userId, userDetails);
    res.send(202);
  } catch (err) {
    res.send(err.message);
    throw new Error("no user with this id");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    await usersLogic.userToDelete(userId);
    res.send(204);
  } catch (err) {
    res.send(err.message);
    throw new Error("no user with this id");
  }
});

router.post("/login", async (req, res) => {
  try {
    const userLoginData = req.body;
    const userData = await usersLogic.login(userLoginData);
    res.send(userData);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
