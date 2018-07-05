const express = require("express"); //web framework for node - routing
const bodyParser = require("body-parser"); //middleware to parse incoming request bodies before handles via req.body
const path = require("path") //helps match slashes to the OS  either \ or /

const mongoose = require("mongoose");
const Message = require("./models/messages");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//mongoose
mongoose.connect("mongodb://localhost:27017/project3");

// have express serve stuff out of this folder (client/build)
app.use(express.static("client/build"));


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
app.post("/api/messages", (req, res) =>{
    console.log(req.body); 
    Message.create(req.body).then(dbMessage =>{
        res.json(dbMessage);
    })
    res.json(true); //because of this, be sure to require body-parser
    //expected: true on screen
 
 })

//  this is a catch all if no other routes are mateched
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "client/build/index.html"))
  })

// simple test to ensure our Port is up and running
app.listen(PORT, function(){
    console.log(`API Server now listening on Port ${PORT}`);
})