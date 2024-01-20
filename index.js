var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser")



app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'))

app.get("/", function(req, res){
   res.sendFile(path.join(__dirname, './public/index.html'))
});

app.post("/addInfo", function(req, res){
    const data = req.body.login
    const data1 = req.body.parol
    console.log('this is' + data, data1);
});
const mongoose = require('mongoose');
// Replace the connection string with your MongoDB connection string
const connectionString = 'mongodb+srv://davitminasyan95:suPerdav1@cluster0.pbftnmd.mongodb.net/sample_mflix';


// Connect to MongoDB
mongoose.connect(connectionString, { useUnifiedTopology: true });

// Check the connection
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
console.log('Connected to MongoDB!');

try {
const allMovies = await mongoose.connection.db.collection('movies').find().toArray(); // .insertMany(newMovies);

console.log('All Movies:', allMovies);
} catch (error) {
console.error('Error retrieving movies:', error);
} finally {
mongoose.connection.close();
}
})
   
