const { pluralize } = require('mongoose');

module.exports=function(app){
    // let todolist=require('../controllers/todolistcontr');
    app.get("/",(req,res)=>{
        Good.find(function(err,goods){
            if (err)
                res.send(err);
            res.json(goods)
        });
    })
    app.post("/",(req,res)=>{
        res.send(goods)
    })

    // app.route('/tasks')
    //     .get(todolist.list_all_tasks)
    //     .post(todolist.create_a_task);

    // app.route('/tasks/:taskId')
    // .get(todolist.read_a_task)
    // .put(todolist.update_a_task)
    // .delete(todolist.delete_a_task);
};