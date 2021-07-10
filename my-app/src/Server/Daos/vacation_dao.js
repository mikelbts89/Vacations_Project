const connection = require("./connection-wrapper");

async function addVacation(newVacationData) {
  let sql = `INSERT INTO vacations (description, destination, image, start_date, end_date, price) VALUES (?,?,?,?,?,?);`;
  let parameters = [
    newVacationData.description,
    newVacationData.destination,
    newVacationData.image,
    newVacationData.startDate,
    newVacationData.endDate,
    newVacationData.price,
  ];
  console.log(parameters);

  let addVacationResult = await connection.executeWithParameters(
    sql,
    parameters
  );
  console.log(addVacationResult);
}

async function getAll() {
  let sql = `SELECT * FROM vacations`;
  let allVacations = await connection.execute(sql);
  return allVacations;
}

async function getVacationById(vacationId) {
  let sql = `SELECT * FROM vacations WHERE id=?`;
  let parameters = [vacationId];
  const currentVacation = await connection.executeWithParameters(
    sql,
    parameters
  );
  return currentVacation;
}

async function updateVacationById(vacationId,vacationDataToUpdate) {
  let sql =
    "UPDATE vacations SET description=?, destination=?, image=?, start_date=?, end_date=?, price=? where id=? ";
  let parameters = [
    vacationDataToUpdate.description,
    vacationDataToUpdate.destination,
    vacationDataToUpdate.image,
    vacationDataToUpdate.startDate,
    vacationDataToUpdate.endDate,
    vacationDataToUpdate.price,
    vacationId,
  ];
  console.log(parameters);
  await connection.executeWithParameters(sql, parameters);
}

async function deleteVacationById(vacationId) {
  let sql = "delete from vacations where id=?";
  let parameters = [vacationId];
  await connection.executeWithParameters(sql, parameters);
}

module.exports = {
  addVacation,
  getAll,
  getVacationById,
  updateVacationById,
  deleteVacationById,
};

// "description":"happy Hanukah",
// "destination":"Moscow",
// "image":"asd",
// "startDate":"14/12/2021",
// "endDate":"16/12/2021",
// "price":"200",
