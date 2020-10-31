// const users=[
//     {name:"name1",age:"age1"},
//     {name:"name2",age:"age2"}
// ]
User=require('./models/model')


module.exports = function(app){
    app.get("/",(req,res)=>{ 
        User.find((err,users) => {
            if (err)
            res.send(err);
            res.json(users);
    
        // res.sendFile('/fsfile.txt');
        // res.sendStatus(200) ;
        // res.redirect('http://46.101.212.195:3000/students');
            res.end();  
        });
        
        
    })

    app.post("/",(resq,res)=>{
        res.send(users);
    })
}