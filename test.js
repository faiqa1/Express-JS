const express = require('express');

const port = 2410;

const app = express();

app.get("/svr/test",function(req,res)
{
    res.send("successful");
});

app.listen(`listening at port  ${port}`);