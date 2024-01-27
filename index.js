var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://davitminasyan95:suPerdav1@cluster0.pbftnmd.mongodb.net/sample_mflix";

  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];

app.get("/", function (req, res) {
  res.render("../public/index.ejs" ,{
      info : mascots,
      aperjan: 'aper'
    });
});

app.post("/addInfo", function (req, res) {
  const data = req.body.login;
  const data1 = req.body.parol;
  const data2 = req.res.email;
  console.log("this is" + data, data1, data2);
  mongoose.connect(connectionString, { useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "Connection error:"));
  db.once("open", async () => {
    console.log("Connected to MongoDB!");

    try {
      const allMovies = await mongoose.connection.db
        .collection("users")
        .insertOne({
          name: data,
          email: data1,
          password: data2,
        });

      console.log("All Movies:", allMovies);
    } catch (error) {
      console.error("Error retrieving movies:", error);
    } finally {
      mongoose.connection.close();
    }
  });
});

app.listen(3000, function () {
  console.log("kpanq");
});
