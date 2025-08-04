    const http = require('http')
    const fs = require('fs')
    const url = require('url');
    const express = require('express')

    const app = express();
    app.get("/", (req, res) => {a
    return res.send("this is home page")
    })

    app.get("/about", (req,res) =>{
        return res.send("this is about page"+ " hey " + req.query.name + "your age " + req.query.age)
    })
    
    const myServer = http.createServer(app)

    myServer.listen(8003, () => console.log('server started http://localhost:8003/about'))
