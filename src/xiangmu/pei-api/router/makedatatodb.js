const db = require('../utils/pei_db.js')

let todaySpec = [
    {
        "Id": 1084,
        "SubjectName": "CHBABY推车 安全出行  欢乐无忧",
        "SujectDesc": "CHBABY推车 安全出行  欢乐无忧",
        "ApplyPlace": "[9]",
        "ApplyLabel": "",
        "PictureUrl": "http://img.boodoll.cn/img/201602/20160214130826_31_chbaby.jpg",
        "SetDiscountTypeId": 1,
        "SetDiscount": "399.00",
        "OriDiscount": "￥399.00起",
        "ReOriDiscount": "",
        "StartTime": "\/Date(1525075693000-0000)\/",
        "EndTime": "\/Date(1528704494000-0000)\/",
        "IsEnable": true,
        "IsDeleted": false,
        "CreateBy": 888,
        "CreateDate": "\/Date(1525075700913-0000)\/",
        "UpdateBy": 888,
        "UpdateDate": "\/Date(1525075701323-0000)\/",
        "Sort": 3136,
        "AppClickUrl": "http://m.muyingzhijia.com/Activity/ActivePage?id=1797"
    },
    {
        "Id": 2846,
        "SubjectName": "雅培菁智6罐送保温杯12罐送豪礼",
        "SujectDesc": "雅培菁智6罐送保温杯12罐送豪礼",
        "ApplyPlace": "[9]",
        "PictureUrl": "http://img.muyingzhijia.com/img/201802/20180208113122_10_yp.jpg",
        "SetDiscountTypeId": 1,
        "SetDiscount": "179",
        "OriDiscount": "￥179起",
        "ReOriDiscount": "",
        "StartTime": "\/Date(1524189801000-0000)\/",
        "EndTime": "\/Date(1525399403000-0000)\/",
        "IsEnable": true,
        "IsDeleted": false,
        "CreateBy": 888,
        "CreateDate": "\/Date(1525067759740-0000)\/",
        "UpdateBy": 888,
        "UpdateDate": "\/Date(1525075682463-0000)\/",
        "Sort": 3135,
        "AppClickUrl": "http://m.muyingzhijia.com/Activity/ActivePage?id=381"
    },
    {
        "Id": 1041,
        "SubjectName": "口罩专场 和细菌拜拜",
        "SujectDesc": "口罩专场 和细菌拜拜 雾霾天也可以放心出门",
        "ApplyPlace": "[9][14]",
        "ApplyLabel": "",
        "PictureUrl": "http://img.boodoll.cn/img/201601/20160121135917_31_kozhao.jpg",
        "SetDiscountTypeId": 1,
        "SetDiscount": "19.9",
        "OriDiscount": "￥19.9起",
        "ReOriDiscount": "",
        "StartTime": "\/Date(1523353705000-0000)\/",
        "EndTime": "\/Date(1526377706000-0000)\/",
        "IsEnable": true,
        "IsDeleted": false,
        "CreateBy": 888,
        "CreateDate": "\/Date(1525067798427-0000)\/",
        "UpdateBy": 888,
        "UpdateDate": "\/Date(1525075682463-0000)\/",
        "Sort": 3134,
        "AppClickUrl": "http://m.muyingzhijia.com/Activity/ActivePage?id=1958"
    },
    {
        "Id": 3218,
        "SubjectName": "爱羽乐新客买一送一",
        "SujectDesc": "爱羽乐新客买一送一",
        "ApplyPlace": "[1][9][12]",
        "PictureUrl": "http://img.muyingzhijia.com/img/201804/20180426095545_10_alula1242.jpg",
        "SetDiscountTypeId": 1,
        "SetDiscount": "88.00",
        "OriDiscount": "￥88.00",
        "ReOriDiscount": "",
        "StartTime": "\/Date(1524672000000-0000)\/",
        "EndTime": "\/Date(1527782399000-0000)\/",
        "IsEnable": true,
        "IsDeleted": false,
        "CreateBy": 888,
        "CreateDate": "\/Date(1524709410037-0000)\/",
        "UpdateBy": 888,
        "UpdateDate": "\/Date(1525075682463-0000)\/",
        "Sort": 3133,
        "AppClickUrl": "http://m.muyingzhijia.com/Activity/ActivePage?id=2086"
    },
    {
        "Id": 1930,
        "SubjectName": "Minimoto小米米宝宝棉品",
        "SujectDesc": "触感轻柔 舒适透气",
        "ApplyPlace": "[9]",
        "ApplyLabel": "",
        "PictureUrl": "http://img.boodoll.cn/img/201608/20160805112829_31_mimi.jpg",
        "SetDiscountTypeId": 1,
        "SetDiscount": "19.00",
        "OriDiscount": "￥19.00起",
        "ReOriDiscount": "",
        "StartTime": "\/Date(1522684800000-0000)\/",
        "EndTime": "\/Date(1527782400000-0000)\/",
        "IsEnable": true,
        "IsDeleted": false,
        "CreateBy": 888,
        "CreateDate": "\/Date(1525017526853-0000)\/",
        "UpdateBy": 888,
        "UpdateDate": "\/Date(1525075682463-0000)\/",
        "Sort": 3132,
        "AppClickUrl": "http://m.muyingzhijia.com/Activity/ActivePage?id=2082"
    }
];
let todaySell = [{
    "Id": 2998,
    "SubjectName": "捷客每日饼干专场 买就送送饼干",
    "SujectDesc": "捷客每日饼干专场",
    "ApplyPlace": "[9]",
    "PictureUrl": "http://img.muyingzhijia.com/img/201708/20170808105332_10_jk1000.jpg",
    "SetDiscountTypeId": 1,
    "SetDiscount": "13.9",
    "OriDiscount": "￥13.9起",
    "ReOriDiscount": "",
    "StartTime": "\/Date(1524213146000-0000)\/",
    "EndTime": "\/Date(1525509147000-0000)\/",
    "IsEnable": true,
    "IsDeleted": false,
    "CreateBy": 888,
    "CreateDate": "\/Date(1525186329070-0000)\/",
    "UpdateBy": 888,
    "UpdateDate": "\/Date(1525239789717-0000)\/",
    "Sort": 3127,
    "AppClickUrl": "http://m.muyingzhijia.com/Activity/ActivePage?id=1789"
  },
  {
    "Id": 3063,
    "SubjectName": "好奇纸尿裤NB66低至55元",
    "SujectDesc": "好奇纸尿裤NB66低至55元",
    "ApplyPlace": "[1][9][10]",
    "PictureUrl": "http://img.muyingzhijia.com/img/201803/20180315163659_10_1182.jpg",
    "SetDiscountTypeId": 1,
    "SetDiscount": "55",
    "OriDiscount": "￥55起",
    "ReOriDiscount": "",
    "StartTime": "\/Date(1523110862000-0000)\/",
    "EndTime": "\/Date(1525616464000-0000)\/",
    "IsEnable": true,
    "IsDeleted": false,
    "CreateBy": 888,
    "CreateDate": "\/Date(1525186250740-0000)\/",
    "UpdateBy": 888,
    "UpdateDate": "\/Date(1525239789717-0000)\/",
    "Sort": 3126,
    "AppClickUrl": "http://m.muyingzhijia.com/Search?k=好奇"
  }
];

let boomSell = [{
    "Id": 2998,
    "SubjectName": "Lollacup 洛力卡宝宝吸管杯 小鸡杯  红色",
    "SujectDesc": "如此简单、可爱、实用的小鸡杯，亮丽的颜色和独特的排气孔设计，可以帮助宝宝独立饮水！",
    "ApplyPlace": "[9]",
    "PictureUrl": "http://img.muyingzhijia.com/product/web/toutu/151299111.jpg",
    "SetDiscountTypeId": 1,
    "SetDiscount": "23.9",
    "OriDiscount": "￥23.9起",
    "ReOriDiscount": "",
    "StartTime": "\/Date(1524213146000-0000)\/",
    "EndTime": "\/Date(1525509147000-0000)\/",
    "IsEnable": true,
    "IsDeleted": false,
    "CreateBy": 888,
    "CreateDate": "\/Date(1525186329070-0000)\/",
    "UpdateBy": 888,
    "UpdateDate": "\/Date(1525239789717-0000)\/",
    "Sort": 3127,
    "AppClickUrl": "http://m.muyingzhijia.com/Activity/ActivePage?id=1789"
  },
  {
    "Id": 3063,
    "SubjectName": "玛仑菌舍畅敏活性乳酸菌粉固体饮料1.5g*12袋（婴幼儿型）",
    "SujectDesc": "玛仑菌舍畅敏活性乳酸菌粉固体饮料1.5g*12袋（婴幼儿型）新老包装交替",
    "ApplyPlace": "[1][9][10]",
    "PictureUrl": "http://img.boodoll.cn/img/201607/20160708094352_44_35511.jpg",
    "SetDiscountTypeId": 1,
    "SetDiscount": "55",
    "OriDiscount": "￥55起",
    "ReOriDiscount": "",
    "StartTime": "\/Date(1523110862000-0000)\/",
    "EndTime": "\/Date(1525616464000-0000)\/",
    "IsEnable": true,
    "IsDeleted": false,
    "CreateBy": 888,
    "CreateDate": "\/Date(1525186250740-0000)\/",
    "UpdateBy": 888,
    "UpdateDate": "\/Date(1525239789717-0000)\/",
    "Sort": 3126,
    "AppClickUrl": "http://m.muyingzhijia.com/Search?k=好奇"
  }
];

module.exports={
  reg(app){
    app.get('/makedatatodb',function(res,req){
      console.log('makesuccess');
      todaySpec.forEach(function(item){
        db.insert('todaySpecial', [item]);
      })
    });
  }
}
