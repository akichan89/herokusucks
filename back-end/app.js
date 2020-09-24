const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;

//Connection to MongoDB
try {
  mongoose.connect( "mongodb+srv://shakespeare89:We2Otters@cluster0.r0hc5.mongodb.net/sample-store?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, () =>
  console.log("connected"));    
  }catch (error) { 
  console.log("could not connect");    
  }

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
  console.log("Error: " + error);
});

//Models import
require("./models/post");
require("./models/category");


app.use(express.json());

//Router import

app.use(require("./routes/post"));
app.use(require("./routes/category"));

app.listen(PORT, () => {
  console.log("Server is started at " + PORT);
});
