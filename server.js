const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    Task=require('./api/models/todolistmod.js'),
    mongoose=require('mongoose'),
    bodyParser = require('body-parser');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/mongoose_basics');
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