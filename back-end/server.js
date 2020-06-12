// DEPENDENCIES
const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
require('dotenv').config() 
const Data = require('./data');

const router = express.Router();
const API_PORT = 3001;

//DATABASE CONNECTION
const uri = `mongodb+srv://ianmatheson:${process.env.MONGO_PASS}@gigwiredb-8p6hs.gcp.mongodb.net/gigwire?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// this is our create method
// this method adds new data in our database
app.post('/api/putData', (req, res) => {
  let data = new Data();

  const { projectName, time } = req.body;

  console.log(projectName, time);

  data.projectName = projectName;
  data.time = time;
  data.save((err) => {
    if (err) console.log("ERROR: " + err);
    return res.json();
  });
});

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));