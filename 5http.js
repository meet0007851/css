const http = require('http')
const fs = require('fs')
const myServer = http.createServer((req,res) =>{
    const log = `${Date.now()} : ${req.url}: new req received\n`;
    fs.appendFile("5http.txt", log , (err,data) =>{
            switch(req.url){
                case '/':
                res.end("home.page"); 
                break;
                
                case '/about':
                res.end("about page")
                break;

                default :
                res.end("not found")
            }
    })
})

myServer.listen(8001,() => console.log('server started'))
