const http=require('http');
const express=require('express')
const app=express();

app.use((req,res,next)=>{
    console.log("In the middleware");
    next();
});

app.use((req,res,next)=>{
    console.log("In the another middleware");
    //res.send('<h1> hello to node js </h1>')
    res.send( { key1: "value" })
});


app.listen(2000)
/*const server=http.createServer(app)

server.listen(7000);
*/