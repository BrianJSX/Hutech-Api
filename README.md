# Hutech Api
## API WEB DAOTAO.HUTECH.EDU.VN

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Hutech api was written to make it easier to get the data of the Hutech website.

## Features
- getCookie✨
- getSchedulePersonal ✨
- getPoint ✨
- gettScheduleWeek ✨

## Tech

Package uses a number of open source projects to work properly:
- [node.js] - you can use with nodejs 
- [Express] - fast node.js network app framework

And of course hutech-api is open source with a [public repository][dill]
 on GitHub.

## Installation

hutech-api requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd your-project
npm install --save hutech-api
```
## Usage
- import 
    ```
    const Hutech = require("hutech-api")
    ```
- getCookie::
    ```
    Hutech.getCookie("username", password);
    ```
- getSchedulePersonal (http://daotao.hutech.edu.vn/default.aspx?page=thoikhoabieu&sta=1):
    ```
    Hutech.getSchedulePersonal("username", "password");
    ```
- Reponse getSchedulePersonal: 
    ```
    {
        "account": "Hồ Văn Minh (1811060485)",
        "data": [
            {
                "codeSubject": "CAP126",
                "subject": " Ngôn ngữ phát triển ứng dụng mới",
                "start": "2",
                "room": "E1-09.07E1-09.10",
                "date": "07/03/2022--13/03/202214/02/2022--10/04/2022"
            },
            ...
        ]
    }
    ```
- getScheduleWeek (http://daotao.hutech.edu.vn/default.aspx?page=thoikhoabieu&sta=0)
    ```
    Hutech.getScheduleWeek("username", "password");
    ```
- Reponse getScheduleWeek: 
    ```
    {
        "account": "Hồ Văn Minh (1811060485)",
        "data": [
            {
                "subject": "Chuyên đề công nghệ phần mềm",
                "codeSubject": "CMP188 nhóm B02 ",
                "weekday": "Thứ Ba",
                "room": "E1-10.01",
                "start": "2",
                "date": "15/02/2022"
            },
            ...
        ]
    }
    ```
- getPoint (http://daotao.hutech.edu.vn/Default.aspx?page=xemdiemthi)
    ```
    Hutech.getPoint("username", "password");
    ```
- Reponse getPoint: 
    ```
    {
        "account": "Hồ Văn Minh (1811060485)",
        "data": [
           {
            "title": "\n\t\t\tHọc kỳ 1 - Năm học 2018-2019\n\t\t",
            "pointSubject": [
                {
                    "codeSubject": "CMP365",
                    "subject": "Thực hành kỹ thuật lập trình",
                    "tc": "1",
                    "kind": "A",
                    "total": "4.0"
                },
                ...
            ],
            "pointAll": [
                {
                    "pointTb": "3.27",
                    "point4": "3.27",
                    "tcd": "14",
                    "tctl": "14"
                }
            ]
           }
        ]
    }
    ```
- getInfoStudent (http://daotao.hutech.edu.vn/Default.aspx?page=xemlichthi)
    ```
    Hutech.getInfoStudent("username", "password");
    ```
- Reponse getInfoStudent: 
    ```
    {
        "studentCode": "1811060485",
        "studentName": "Hồ Văn Minh",
        "gender": "Nam",
        "country": "Bình Dương",
        "class": "18DTHA6",
        "majors": "Công nghệ thông tin",
        "department": "Công nghệ thông tin",
        "education": "Đại học chính quy",
        "year": "2018-2022"
    }
    ```
## Response Key (Vietnamese)
```
    "codeSubject": Mã MH
    "subject": Tên MH
    "start": Tiết BD
    "room": Phòng,
    "date": Thời gian học
    "tc": Tín chỉ môn
    "kind": xếp loại
    "total": Tổng điểm hệ số 4
    "pointTb": Điểm trung bình học kỳ hệ 4,
    "point4": Điểm trung bình tích lũy (hệ 4),
    "tcd": Số tín chỉ đạt,
    "tctl": Số tín chỉ tích lũy
    "studentCode": Mã sinh viên,
    "studentName": Tên sinh viên,    
    "gender": Phái,
    "country": Nơi sinh,
    "class": Lớp,
    "majors": Ngành,
    "department": Khoa,
    "education": Hệ đào tạo,
    "year": Khóa học
```
## License
ISC

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/BrianJSX/Hutech-Api>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
