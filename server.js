
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
const port = 2410;
app.listen(port, () => console.log(`listening at port  ${port}!`) );
 






app.get("/svr/test",function(req,res)
{
    res.send("successful");
});
