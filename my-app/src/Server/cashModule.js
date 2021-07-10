const dataMap = new Map();

const get = (key) => {
  return dataMap.get(key);
};

const set = (key, value) => {
  dataMap.set(key, value);
};

const extractUserDataFromCache = (request) => {
  let authorizationString = request.headers["authorization"];
  let token = authorizationString.substring("Bearer ".length);
  console.log(token);
  let userData = get(token);
  return userData;
};

module.exports = {
  set,
  get,
  dataMap,
  extractUserDataFromCache,
};
