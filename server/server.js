const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5001;

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })