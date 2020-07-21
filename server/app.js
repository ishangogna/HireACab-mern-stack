const express = require('express');
const routes = require('./routes/api');
const app = express();


//MW for route handling
app.use('/api',routes);

app.listen(4000,()=>{
    console.log('Listening @ 4000');
})