const express = require("express")
const app=express()
const port=3000
app.listen(port,console.log("server is runing"))
app.get("/",(req,res)=>{
    res.writeHead(200,{'content-Type':"text/html"})
res.write("<h1>hello node</h1>")
res.end()
console.log(res)
})
/*
app.get("/api/:x/:z",(req,res)=>{
console.log(req.params);
const x=+req.params.x
const z=+req.params.z
res.status(200).send({result:x+z})
})
*/
