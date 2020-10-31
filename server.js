
const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000
    routes=require('./routes.js');
    mongoose=require('mongoose');
    User=require('./models/model')

mongoose.connect('mongodb://localhost/mongoose_basics')
// app.get("/",(req,res) => {
//     res.json(users);
// })

// app.post("/",(req,res) => {
//     res.send(users);
// })
routes(app);
app.listen(port);


