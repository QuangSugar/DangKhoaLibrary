"use strict";

require('dotenv').config();

var express = require('express');

var mongoose = require('mongoose');

var cors = require('cors');

var cookieParser = require('cookie-parser');

var fileUpload = require('express-fileupload');

var path = require('path');

var appRoute = require("./routes");

var seedAdmin = require("./seed/seedAdmin");

var app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(fileUpload({
  useTempFiles: true
})); // Routes

app.use('/api/v1', appRoute);
app.use("/", function (req, res) {
  res.send('Server is running!!!');
}); // Connect to mongodb

var URI = process.env.MONGODB_URL;
mongoose.connect(URI, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function (err) {
  if (err) throw err;
  console.log("Connected to mongodb");
  seedAdmin.createAdmin();
});

if (process.env.NODE_ENV === 'production') {
  app.use(express["static"]('client/build'));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log('Server is running on port', PORT);
});