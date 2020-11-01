var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/mongoose_basics',function(err){
//     if (err) throw err;
//     console.log('Successfully connected');

// });

let schemaus=mongoose.Schema({
    name:'String',
    age:'Number'
});
module.exports=mongoose.model('users',schemaus)

// let user=mongoose.model('User',schemaus)
//         user.find(function(err,users){
//             if (err)
//                 res.send(err);
//             else
//                 res.json(schemaus)
//         });
