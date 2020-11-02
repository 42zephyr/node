const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    Good=require('./api/models/todolistmod.js'),
    mongoose=require('mongoose'),
    bodyParser = require('body-parser');

    // app.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    //   });
      
    //   app.get('/', function(req, res, next) {
    //     // Handle the get for this route
    //   });
      
    //   app.post('/', function(req, res, next) {
    //    // Handle the post for this route
    //   });

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/goods_db');
// app.get("/",(req,res) => {
//     res.json(users);
// })

// app.post("/",(req,res) => {
//     res.send(users);
// })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes =require('./api/routes/todolistro.js');
routes(app);
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });