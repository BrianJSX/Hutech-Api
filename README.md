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
- getcookie::
    ```
    Hutech.getCookie("username", password);
    ```
- getSchedulePersonal (http://daotao.hutech.edu.vn/default.aspx?page=thoikhoabieu&sta=1):
    ```
    Hutech.getSchedulePersonal("username", "password");
    ```
- getScheduleWeek (http://daotao.hutech.edu.vn/default.aspx?page=thoikhoabieu&sta=0)
    ```
    Hutech.getScheduleWeek("username", "password");
    ```
- getPoint (http://daotao.hutech.edu.vn/Default.aspx?page=xemdiemthi)
    ```
    Hutech.getPoint("username", "password");
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
