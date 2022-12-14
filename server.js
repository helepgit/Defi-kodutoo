var path = require("path");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


app.post('/add', function(req, res){
 res.setHeader('Content-Type', 'application/json');
	var response = JSON.stringify({
        message: "Tere, " + req.body.fullname || null
    })
     res.send(response);
});

app.listen(process.env.PORT || 5000,() => {
console.log("Runs at");
})