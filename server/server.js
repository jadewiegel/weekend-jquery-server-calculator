const express = require('express');
const bodyParser = require('body-parser');
const calculatorProcess = require('./module/calculator');
const app = express();
const PORT = 5001;

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })

app.get('/calculations', function(req, res){
    console.log('GET request was made');
    res.send(calculatorProcess.calculationList)
})

app.post('/calculations', function(req, res){
    console.log(req.body.equation);
    calculatorProcess.doEquation(req.body.equation);
    res.sendStatus(201); 
})
