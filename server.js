const express = require('express');
const parser = require('body-parser');
const server = express();

server.use(parser.json());
server.use(express.static('client/public'));

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
  if (err) {
    console.error(err);
    return;
  }
  const db = client.db('bucket_list');
  console.log('Connect to DB');
  const countriesCollection = db.collection('selected_countries');
})

server.listen(3000, function () {
  console.log('Listening on port 3000');
})
