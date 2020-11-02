var mongoose = require('mongoose');
let goods=mongoose.Schema({
        name:{
            type:String,
        },
        id:{
            type:Number,
        },
        price:{
            type:Number,
        }
});
module.exports=mongoose.model('Goods',goods)