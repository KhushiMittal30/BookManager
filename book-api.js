const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express();
const port = 3000;


let books = [];

app.use(cors());


// What the body-parser middleware will be doing is grabbing the HTTP body, 
// decoding the information, and appending it to the req.body. From there,
// we can easily retrieve the information from the form - in our case, a book's information.

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post("/book",(req,res)=>{
    const book = req.body;
     
    //for debugging purpose
    console.log(book)
    books.push(book);

    res.send('Book is added to the database');
})








app.listen(port,()=> console.log(`Hello world, listening from port ${port}!`));