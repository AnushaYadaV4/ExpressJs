const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add product</button></form>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect('/')
  
});

app.use('/',(req,res,next)=>{
    console.log("products are added!!!");
    res.send('<h1>Products are added</h1>')
    
});


/*app.use((req,res,next)=>{
    console.log("In the another middleware");
    //res.send('<h1> hello to node js </h1>')
    res.send( { key1: "value" })
});
*/

app.listen(2000);
/*const server=http.createServer(app)

server.listen(7000);
*/
