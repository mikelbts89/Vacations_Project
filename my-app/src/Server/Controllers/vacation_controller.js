const express = require("express");
const router = express.Router();
const vacationLogic = require('../Logics/vacation_logic')

router.post("/", async (req, res) => {
  try {
      const newVacationData = req.body
      console.log(newVacationData)
      await vacationLogic.addVacation(newVacationData)
      res.send(200)
  } catch (err) {
    throw new Error();
  }
});

router.get("/", async (req, res) => {
  try {
      const allVacations = await vacationLogic.getAll()
      res.send(allVacations)
  } catch (err) {
    throw new Error();
  }
});

router.get("/:id", async (req, res) => {
    const vacationId = req.params.id
    const currentVacation = await vacationLogic.getVacationById(vacationId)
    res.send(currentVacation)
  try {
  } catch (err) {
    throw new Error();
  }
});

router.put("/:id", async (req, res) => {
    const vacationDataToUpdate = req.body
    const vacationId = req.params.id
    await vacationLogic.updateVacationById(vacationId,vacationDataToUpdate)
    res.send(202)
  try {
  } catch (err) {
    throw new Error();
  }
});

router.delete("/:id", async (req, res) => {
    const vacationId = req.params.id
    await vacationLogic.deleteVacationById(vacationId)
    res.send(204)

  try {
  } catch (err) {
    throw new Error();
  }
});

module.exports = router;
