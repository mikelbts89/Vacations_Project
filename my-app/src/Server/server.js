const express = require("express");
const cors = require("cors");
const userController = require("./Controllers/user_controller");
const vacationController = require("./Controllers/vacation_controller");
const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/users", userController);
app.use("/vacations", vacationController);
app.listen(3001, () => {
  console.log("on Port 3001");
});
