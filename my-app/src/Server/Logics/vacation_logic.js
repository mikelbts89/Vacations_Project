const { all } = require("../Controllers/vacation_controller");
const vacationDao = require("../Daos/vacation_dao");

async function addVacation(newVacationData) {
    await vacationDao.addVacation(newVacationData)
}

async function getAll() {
    const allVacations = await vacationDao.getAll()
    return allVacations
}

async function getVacationById(vacationId) {
    const currentVacation = await vacationDao.getVacationById(vacationId)
    return currentVacation
}

async function updateVacationById(vacationId,vacationDataToUpdate) {
    await vacationDao.updateVacationById(vacationId,vacationDataToUpdate)
}

async function deleteVacationById(vacationId) {
    await vacationDao.deleteVacationById(vacationId)
}

module.exports = {
  addVacation,
  getAll,
  getVacationById,
  updateVacationById,
  deleteVacationById,
};
