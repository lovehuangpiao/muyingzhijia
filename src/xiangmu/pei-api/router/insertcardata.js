const apiResult = require('../utils/apiResult');
const db = require('../utils/pei_db');


module.exports = {
  reg(app){
    app.post('/insertcardata',async function(req,res){
      
      let data = await db.select('cardata') || [];
      let backdata = [];
      if (Object.keys(req.body).length > 0) {
        console.log(data)
        for (let i=0;i<data.length;i++) {

          if (req.body.Id == data[i].Id) {
            if (req.qty && data[i].qty) {
              req.body.qty = parseInt(req.body.qty) + parseInt(data[i].qty);
              
              break;
            }
          }
        }
        backdata = await db.insert('cardata', [req.body]);
        console.log('插入');
        res.send(apiResult(true, backdata));
      } else {
        res.send(apiResult(false));
      }
    });
  }
}
