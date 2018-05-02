const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const path = require('path');

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname+'../../')))

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,auth,Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

const getclassdata = require('./class')
const makedatatodb = require('./makedatatodb.js')
const todaySpec = require('./todaySpecial.js')
const deletedata = require('./deletedata.js');

module.exports = {
  start(_port){
    deletedata.reg(app);
    todaySpec.reg(app);
    getclassdata.reg(app);
    makedatatodb.reg(app);
    app.listen(_port);
  }
}