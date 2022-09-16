let express = require("express");
let studentss = require("./students");
let app = express();
app.use(express.json());
app.use(function(req,res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST, OPTIONS , PUT, PATCH,DELTE , HEAD");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});
const port = 1234;
app.listen(port, () => console.log(`listening at port  ${port}!`) );
 
let {data} = require("./students");

app.get("/svr/students",function(req,res)
{
    res.send(data);
});







/*app.get("/svr/test",function(req,res)
{
    res.send("successful");
});*/