const path = require('path')
const express = require('express')
const router = express.Router()
const config = require('../config').getConfig()
let axios = require('axios')

router
    .get('/api/user', function (req, res) {
      res.json({
        "data" : {
          "content": "from_server"
        },
        "message": {
          "message": "",
          "code": 0
        }
      })
    })
    .get('/api/list', function (req, res) {
      res.json({
        "data" : {
          "content": "from_debug",
          "tableData": [{
            "xuhao": "1",
            "oldnum": "XH10765",
            "keshi": "消化科",
            "jb": "肠胃炎",
            "age": "28",
            "zkxm": "膝关节",
            "state": "0",
            "pfState": "0",
            "scsj": "2018-9-10",
            "pfsj": "2018-9-15"
          }, {
            "xuhao": "2",
            "oldnum": "XH10765",
            "keshi": "消化科",
            "jb": "肠胃炎",
            "age": "24",
            "zkxm": "胸部",
            "state": "1",
            "pfState": "1",
            "scsj": "2018-8-27",
            "pfsj": "2018-9-11"
          }]
        },
        "message": {
          "message": "",
          "code": 0
        }
      })
    })
    // serve静态文件
    .use(express.static('../dist'))
    .use('/', express.static(path.resolve(__dirname, '../dist')))

module.exports = router
