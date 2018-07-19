// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const routes = require("./routes");
// const app = express();
// const cors = require('cors');

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");



// const PORT = process.env.PORT || 3001;


// app.use(cors());

// // Configure body parser for AJAX requests
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// // Serve up static assets
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }




// // Set up promises with mongoose
// mongoose.Promise = global.Promise;
// // Connect to the Mongo DB
// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://localhost:27017/project3",

// );

// // Start the API server
// app.listen(PORT, function () {
//     console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });



// Auth related frameworks
const jwt = require("express-jwt");
const jwtAuthz = require("express-jwt-authz");
const jwksRsa = require("jwks-rsa");
const cors = require('cors');

// const Blog = require("./models/blog");

dotenv.config()

if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
    throw 'Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE configured';
}

// const checkJwt = jwt({
//     secret: jwksRsa.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: `${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
//     }),
//     audience: 'my-blog',
//     issuer: `${process.env.AUTH0_DOMAIN}/`,
//     algorithms: ['RS256']
// });

// const checkWriteBlog = jwtAuthz(['write:blog']);

const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/project3");

// This allows us to serve files out of the client/build folder
app.use(express.static("client/build"));

// Add routes, both API and view
app.use(routes);

// app.get("/", (req, res) => {
//     res.send("hi");
// });

// app.get("/api/blog", (req, res) => {
//     console.log("this should be hit");
//     Blog.find({}).sort({ createdAt: -1 }).then(results => res.json(results));
// });
// app.post("/api/blog", checkJwt, checkWriteBlog, (req, res) => {
//     console.log(req.body);

//     Blog.create(req.body).then(dbBlog => {
//         res.json(dbBlog);
//     })
// })

// This is a catch all if no other routes are matched
app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});



app.listen(PORT, function () {
    console.log(`API Server now listening on port ${PORT}`);
})
