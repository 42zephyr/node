//Path
const path =require('path');
//Назва файлу
console.log(__filename);
//Розширення файлу
console.log(path.extname(__filename));
//Чи абсолютний шлях
console.log(path.isAbsolute(__filename));
//Нормалізує шлях
console.log(path.normalize(__filename));
//Повертає масив стрінгових об'єктів , що є частинами шляху
console.log(__filename.split(path.sep));

//FS
const fs = require('fs');

const { dir } = require('console');


let stream=new fs.ReadStream(__filename);
//Прочитані байти
console.log(stream.bytesRead);
//Шлях потоку
console.log(stream.path)
//Відкрило файл
fs.open('fsfile.txt', 'r', (err) => {
    if (err) throw err;
  });

  async function print(path) {
    const dir = await fs.promises.opendir(path);
    for await (const dirent of dir) {
        dir.read();
        dir.close();
    }
  }

//os
const os = require('os');
//Константи системи
console.log(os.constants);
//Повна версія Системи
console.log(os.release());
//Повна назва системи
console.log(os.version());
//Статистика  Ядер Процесору
console.log(os.cpus())

//http
const http= require('http');
const { runInNewContext } = require('vm');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    console.log(response.getHeaders());
    if(req.url=="/"){
        
        res.write("<h1>Server</h1>"+server.listening);
    }
    else{res.write("Server")};
    server.setTimeout([20000][res.write(" Time out")])
    res.end();
    
})

server.listen(3000,()=>{
    console.log(server.listening);
    console.log('server running')
    
})