const HutechAPI = require("./src/modules/Hutech");

/**
 * 
 * @param {*} user 
 * @param {*} password 
 * @returns cookie
 */

const getCookie = async (user, password) => {
  try {
    const Hutech = new HutechAPI();
    const cookie = await Hutech.login(user, password);
    return cookie;
  } catch (error) {
    console.log(error);
  }
};

/**
 * 
 * @param {*} user 
 * @param {*} password 
 * @returns schedule
 */

const getSchedulePersonal = async (user, password) => {
  try {
    const Hutech = new HutechAPI();
    await Hutech.login(user, password);
    let schedule = await Hutech.getSchedulPersonal();
    return schedule;
  } catch (error) {
    console.log(error);
  }
};

/**
 * 
 * @param {*} user 
 * @param {*} password 
 * @returns schedule
 */

const getScheduleWeek = async (user, password) => {
  try {
    const Hutech = new HutechAPI();
    await Hutech.login(user, password);
    let schedule = await Hutech.getScheduleWeek();
    console.log(schedule);
    return schedule;
  } catch (error) {
    console.log(error);
  }
};

/**
 * 
 * @param {*} user 
 * @param {*} password 
 * @returns point
 */

const getPoint = async (user, password) => {
  try {
    const Hutech = new HutechAPI();
    await Hutech.login(user, password);
    let point = await Hutech.getPoint();
    return point;
  } catch (error) {
    console.log(error);
  }
};

/**
 * 
 * @param {*} user 
 * @param {*} password 
 * @returns point
 */

 const getInfoStudent = async (user, password) => {
  try {
    const Hutech = new HutechAPI();
    await Hutech.login(user, password);
    let point = await Hutech.getInfoStudent();
    return point;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  getCookie,
  getScheduleWeek,
  getSchedulePersonal,
  getPoint,
  getInfoStudent
};
