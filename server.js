const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT ||3001;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// simple test to ensure server is working
app.get("/", (req, res)=> {
    res.send ("Hi there! Server working")
})

// simple test to validate that the backend and front end are working
app.get("/api/test", (req, res) =>{
//    console.log(req.body);commenting this out for testing purpsoses of post call below
   res.json(true); //because of this, be sure to require body-parser

})

//check to see if we can send data 
app.post("/api/test", (req, res) =>{
    console.log(req.body); 
    req.body.received = true;
    res.json(req.body); //because of this, be sure to require body-parser
    //expected: true on screen
 
 })

// simple test to ensure our Port is up and running
app.listen(PORT, function(){
    console.log(`API Server now listening on Port ${PORT}`);
})