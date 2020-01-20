const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const fs = require("fs");

app.get('/', (req, res)=> {
    //res.sendFile(path.join(__dirname + "/index.html"));
    res.sendFile(__dirname + "/index.html");
});

app.get('/listUsers', (req, res)=> {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

function dataMock(){
    console.log('Mocko dati');
    return 'Prova';
}

app.get('/dataMock',function(req,res){
    res.end(dataMock());
})


app.post('/riceviCella',(req,res)=>{
    let cellID = req.body.cellID;
    console.log(req.body);
    console.log(cellID);
    //res.sendStatus(200);
    res.send('OK');
})

const server = app.listen(8081, ()=> {
   let host = server.address().address
   let port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})