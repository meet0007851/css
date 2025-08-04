const http = require('http')
const fs = require('fs')
const url = require('url');

const myServer = http.createServer((req,res) =>{
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()} : ${req.url}: new req received\n`;

    const myurl = url.parse(req.url,true)
    console.log(myurl)
    fs.appendFile("5http.txt", log , (err,data) =>{
            switch(myurl.pathname){
                case '/':
                res.end("home.page"); 
                break;
                
                case '/about':
                const username = myurl.query.myname
                res.end(`"hi" , ${username}`)
                break;

                case '/search':
                const search = myurl.query.search_query;
                res.end("heare are result for" + search)
                break;

                default :
                res.end("not found")
            }
    })
})

myServer.listen(8002,() => console.log('server started'))
