const express = require ('express');
const app = express();

// const cors = require("cors");
// app.use(cors())

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
    const db = client.db('projectco2');

});

app.listen(5000, function() {
    console.log(`Project CO2 server running on port ${this.address().port}`)
});    
