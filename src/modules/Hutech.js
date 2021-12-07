let request = require("request-promise");
const cheerio = require("cheerio");
const { resolve } = require("path/posix");
const { data } = require("cheerio/lib/api/attributes");
const { setFlagsFromString } = require("v8");

const PATH = "http://daotao.hutech.edu.vn";

class APIHutech {
  /**
   * contructor
   * cookie
   * request Header
   */

  constructor() {
    this.cookie = request.jar();
    request = request.defaults({
      headers: {
        "Cache-Control": "max-age=0",
        "Upgrade-Insecure-Requests": 1,
        DNT: 1,
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Language": "en-US,en;q=0.9",
        "Content-Type": "multipart/form-data",
        Connection: "keep-alive",
      },
    });
  }

  /**
   *
   * @param {*} data enpoint: String, formData: object or null, isTransform: boolean
   * @returns Promise reponse data when you post and get to PATH
   */

  requestApi(data = { enpoint, formData: "", isTransform: false }) {
    let form = {
      uri: PATH + data.enpoint,
      jar: this.cookie,
      method: typeof data.formData === "object" ? "post" : "get",
      formData: data.formData,
    };

    if (data.isTransform) form.transform = (body) => cheerio.load(body);
    return request(form);
  }

  /**
   *
   * @param {*} sta == 1
   * @returns schedule { account: name , data[{data}]}
   * get schedule personal with enpoint page=thoikhoabieu&sta=1
   * sta = 1 is personal
   */

  getSchedulPersonal(sta) {
    return new Promise(async (resolve, reject) => {
      try {
        let schedule = {
          account: null,
          data: [],
        };

        //request GET to server daotao.hutech.edu.vn
        const $ = await this.requestApi({
          enpoint: "/default.aspx?page=thoikhoabieu&sta=1",
          isTransform: true,
        });
        //get html of class .grid-roll2
        let table = $(".grid-roll2").children();
        //get username in id #ctl00_Header1_Logout1_lblNguoiDung
        let name = $("#ctl00_Header1_Logout1_lblNguoiDung").text();
        schedule.account = name.slice(9);

        //push dataObj in schedule
        table.each(function (i) {
          let data = {
            codeSubject: null,
            subject: null,
          };
          let element = $(this).children("tbody").children("tr").children("td");

          element.each(function (i) {
            if (i == 0) data.codeSubject = $(this).text();
            if (i == 1) data.subject = $(this).text();
            if (i == 7) data.start = $(this).text();
            if (i == 9) data.room = $(this).text();
            if (i == 11) data.date = $(this).text();
          });
          schedule.data.push(data);
        });
        //return schedule;
        resolve(schedule);
      } catch (error) {
        //error
        console.log(error);
        reject(error);
      }
    });
  }

  /**
   *
   * @param {*} sta == 0
   * @returns schedule { account: name , data[{data}]}
   * get schedule in week with enpoint page=thoikhoabieu&sta=0
   * sta = 0 is week
   */

  getScheduleWeek(sta) {
    return new Promise(async (resolve, reject) => {
      try {
        let schedule = {
          account: null,
          data: [],
        };
        //request GET to server daotao.hutech.edu.vn
        const $ = await this.requestApi({
          enpoint: "/default.aspx?page=thoikhoabieu&sta=0",
          isTransform: true,
        });
        //get name and student code in id #ctl00_Header1_Logout1_lblNguoiDung
        let name = $("#ctl00_Header1_Logout1_lblNguoiDung").text();
        schedule.account = name.slice(9);
        //selector table and get data in attribute onmounseover
        $("#ctl00_ContentPlaceHolder1_ctl00_Table1 tbody tr")
          .children()
          .each(function (i) {
            let e = $(this).attr("onmouseover");
            if (e) {
              //replace space and split convert item to array
              let item = e.slice(10).replaceAll("'", "").split(",");
              let data = {
                subject: item[1],
                codeSubject: item[2],
                weekday: item[3],
                room: item[5],
                start: item[6],
                date: item[9],
              };
              //push data to schedule.data
              schedule.data.push(data);
            }
          });
        //retrun the schedule
        resolve(schedule);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   *
   * @param {*} params
   * @returns point
   */

  getPoint() {
    return new Promise(async (resolve, reject) => {
      try {
        let point = {
          account: null,
          data: [],
        };

         //dataObj is once object in schedule
         let dataObj = {
          title: null,
          pointSubject: [],
          pointAll: [],
        };

        //Object in dataObj.pointALL
        let typePointAll = {
          pointTb: null,
          point4: null,
          tcd: null,
          tctl: null,
        };

        //Object in dataObj.pointSubject
        let typePointSubject = {
          codeSubject: null,
          subject: null,
          tc: null,
          kind: null,
          total: null,
        };

        //request GET to server daotao.hutech.edu.vn
        const $ = await this.requestApi({
          enpoint: "/default.aspx?page=xemdiemthi",
          isTransform: true,
        });

        //selector element in id ##ctl00_ContentPlaceHolder1_ctl00_div1 tbody
        let tr = $("#ctl00_ContentPlaceHolder1_ctl00_div1 tbody").children();
        tr.splice(0, 1);

        //get name and student code in id #ctl00_Header1_Logout1_lblNguoiDung
        let name = $("#ctl00_Header1_Logout1_lblNguoiDung").text();
        point.account = name.slice(9);

        //if flag == 4 push dataObj and all key in dataObj == null
        let flag = 0;

        //put all value to dataObj and push to the schedule
        tr.each(function (i) {
          if ($(this).attr("class") == "title-hk-diem") { //if DOM class == "title-hk-diem"
            let title = $(this).text();
            dataObj.title = title;
          } else if ($(this).attr("class") == "row-diemTK") { //if DOM class == "row-diemTK"
            flag += 1; //flag i check dom index == 4

            //selector all td in DOM class "row-diemTK"
            let element = $(this).children().children();

            //if flag == 4 push dataObj to point: array, and set null all key in dataObj
            if (flag >= 4) {
              element.each(function (i) {
                if (i == 1) {
                  typePointAll.tctl = $(this).text();
                }
              });
              //push typePointAll to dataObj then push dataObj to point : array
              dataObj.pointAll.push(typePointAll);
              point.data.push(dataObj);

              //set all null and flat == 0
              flag = 0;
              dataObj = {
                title: null,
                pointSubject: [],
                pointAll: [],
              };
              typePointAll = {
                pointTb: null,
                point4: null,
                tcd: null,
                tctl: null,
              };
            } else {
              element.each(function (i) {
                if (i == 1) {
                  if (flag == 1) typePointAll.pointTb = $(this).text();
                  if (flag == 2) typePointAll.point4 = $(this).text();
                  if (flag == 3) typePointAll.tcd = $(this).text();
                }
              });
            }
          } else { //if DOM class == "row-diem"
            let element = $(this).children();
            element.each(function (i) {
              if (i == 1) typePointSubject.codeSubject = $(this).text();
              if (i == 2) typePointSubject.subject = $(this).text();
              if (i == 3) typePointSubject.tc = $(this).text();
              if (i == 12) typePointSubject.kind = $(this).text();
              if (i == 13) typePointSubject.total = $(this).text();
            });
            dataObj.pointSubject.push(typePointSubject);
          }
        });
        resolve(point);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  /**
   *
   * @param {*} param0
   * user: String and user: String
   * @returns this cookie in class
   * User login in with user(student code) and password
   */

  login(user, pass) {
    return new Promise(async (resolve, reject) => {
      try {
        //request post to server
        const $ = await this.requestApi({
          enpoint: "/default.aspx",
          formData: {
            __EVENTTARGET: "",
            __EVENTARGUMENT: "",
            ctl00$ContentPlaceHolder1$ctl00$ucDangNhap$txtTaiKhoa: user,
            ctl00$ContentPlaceHolder1$ctl00$ucDangNhap$txtMatKhau: pass,
            ctl00$ContentPlaceHolder1$ctl00$ucDangNhap$btnDangNhap: "Đăng Nhập",
          },
          isTransform: true,
        });
        //take value name student
        let name = $("#ctl00_Header1_Logout1_lblNguoiDung").text();
        //if login success and take code student and name student
        if (name.length > 9) {
          //return cookie browser
          resolve(this.cookie);
        } else {
          reject("Password is wrong");
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = APIHutech;
