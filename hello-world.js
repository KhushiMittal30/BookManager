const express = require('express');
const app = express();
const port = 3000;


// We'd like to set it to be on the home page, so the URL for the endpoint is /:

app.get("/",(req,res)=>{
    res.send("Hello World from Express");
});

//start our client

app.listen(port,()=>{console.log(`Hello world app listening from port ${port}!`)});