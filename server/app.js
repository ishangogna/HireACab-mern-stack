const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes/api');
const errorHandler = require('./middleware/error');
//connect to mongo db
mongoose.connect('mongodb://localhost/drivers');

//setup app
const app = express();

//MW to parse json 
app.use(express.json());

//MW for route handling
app.use('/api',routes);

//MW for error handling
app.use(errorHandler);

app.listen(5000,()=>{
    console.log('Listening @ 5000');
})