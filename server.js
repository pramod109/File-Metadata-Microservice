// init project
var express = require('express');
var app = module.exports = express();
var multer = require('multer');
var cors = require('cors')
var bodyParser = require('body-parser')
var upload = multer({dest: 'uploads/'})

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

app.post('/upload', upload.single('file'), function(req,res,next){
    return res.json(req.file)
})


// listen 
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
