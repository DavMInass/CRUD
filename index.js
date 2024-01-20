var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'))

app.get("/", function(req, res){
   res.sendFile(path.join(__dirname, './public/index.html'))
});

app.post("/addInfo", function(req, res){
    const data = req.body.login
    const data1 = req.body.parol
    console.log(data, data1);
});

app.listen(3000, function(){
   console.log("googleum gri localhost:3000");
});
