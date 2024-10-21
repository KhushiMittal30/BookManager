const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path');
const port =3000 ;
const app = express();


app.get('/book', (req, res) => {
    res.sendFile(path.join(__dirname, 'new-book.html'));
  });


  //start the server
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });