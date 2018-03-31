const dotenv = require('dotenv').config();
const express = require('express');
const mongo = require('mongodb');
const path = process.cwd();
const port = process.env.PORT || 8080;
const routes = require('./app/routes');

const app = express();

app.use(express.static('/public'));

app.set('view engine', 'pug');
app.set('views', './public/views');

routes(app);

app.listen(port, (err)=>{
    if(err){
        console.error('Error starting node app:', err);
    }
    console.log("Node app listening on port:", port);
});