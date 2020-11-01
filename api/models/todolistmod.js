var mongoose = require('mongoose');
let Schema= mongoose.Schema;
let tschemaus=mongoose.Schema({
        name:{
            type:String,
            required:'Number'
        },
        creatDate:{
            type:Date,
            default:Date.now
        },
        status:{
            type:[{ 
                type:String,
                enum:['pending','ongoing','completed']
            }],
        default:['pending']
        }
});
module.exports=mongoose.model('Tasks',tschemaus)