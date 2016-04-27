var express = require('express');
var router = express.Router();


var formidable = require('formidable')
var form = new formidable.IncomingForm()

var googleAPI = require('../module/googleAPI.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/upload', function(req, res, next) {
    console.log('/upload')

    var json = {}

    var formParse = new Promise(function(resolve, reject) {
        form.parse(req, function(err, fields, files) {

            json = JSON.parse(fields.fields)
            console.log(json)
            resolve()
        })
    })


    form.on('file', function(fields, files) {

        formParse.then(function() {

            var fileName = "01/" + files.name
            var fileLocalPath = files.path

            console.log("fileName: " + fileName)
            console.log("fileLocalPath: " + fileLocalPath)

            googleAPI.gstorageSave("peterbucket", fileName, fileLocalPath).then(function(link) {
                console.log("upload success: " + link)
                res.json(json)
            }, function(err) {
                console.log(err)
            })

        }, function(err) {
            console.log(err)
        })
    })


});


module.exports = router;
