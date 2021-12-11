const HutechAPI = require("./src/modules/Hutech");

/**
 * 
 * @param {String} user The String is the student code
 * @param {String} password The String is password
 * @returns {Object} cookie The Object is cookie on Browser 
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
 * @param {String} user The String is the student code
 * @param {String} password The String is password
 * @returns {Object} schedule The Object is data schedule personal of student
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
 * @param {String} user The String is the student code
 * @param {String} password The String is password
 * @returns {Object} schedule The Object is data schedule week of student
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
 * @param {String} user The String is the student code
 * @param {String} password The String is password
 * @returns {Object} point The object is data point student
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
 * @param {String} user The String is the student code.
 * @param {String} password  The String is password.
 * @returns {Object} info The object is data info student.
 */

 const getInfoStudent = async (user, password) => {
  try {
    const Hutech = new HutechAPI();
    await Hutech.login(user, password);
    let info = await Hutech.getInfoStudent();
    return info;
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
