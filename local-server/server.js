const express = require('express');
const app = express();
const path = require('path');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.get('*', express.static(__dirname + '/../static'));

app.listen(8080);
