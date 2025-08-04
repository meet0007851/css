    const http = require('http')
    const fs = require('fs')
    const url = require('url');
    const express = require('express')

    const app = express();
    app.get("/", (req, res) => {
        res.send("this is home page")
    })

    app.get("/about", (req,res) =>{
        res.send("this is about page")
    })
    function myHandler(req, res) {
        if (req.url === "/favicon.ico") return res.end();
        const log = `${Date.now()} :${req.method} :${req.url}: new req received\n`;

        const myurl = url.parse(req.url, true)
        console.log(myurl)
        fs.appendFile("5http.txt", log, (err, data) => {

            switch (myurl.pathname) {
                case '/':
                    if (req.method === "GET") res.end("home.page");
                    break;

                case '/about':
                    const username = myurl.query.myname
                    res.end(`"hi" , ${username}`)
                    break;

                case '/search':
                    const search = myurl.query.search_query;
                    res.end("heare are result for" + search)
                    break;
                case '/signup':
                    if (req.method === "GET")
                        res.end("this is get request")
                    else if (req.method === "POST") {
                        res.end("succeess")
                    }
                default:
                    res.end("not found")
            }
        })
    }
    const myServer = http.createServer(app)

    myServer.listen(8003, () => console.log('server started'))
