const http = require("http")
// const fs = require("fs")
// const path = require("path")

const dataControl =(req,res)=>{
    res.write("<h1>hello , my name is kaushik </h1>");
    res.end();

}

http.createServer(dataControl).listen(1530,()=>{
    console.log("server is running on port 1530");
})