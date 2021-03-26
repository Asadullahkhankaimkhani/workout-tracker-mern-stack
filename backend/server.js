const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json);

const url = process.env.ATLAS_URL;
mongoose.connect(url,{useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true});
const connection = mongoose.connection;
// Database Connection
connection.once('open', ()=> {
    console.log('MongoDB Database is connection established successfully')
});
// Routers 
const excersieRouter = require('./routes/excersie');
const usersRouter = require('./routes/users');

app.use('/excersie',excersieRouter);
app.use('/users',usersRouter);
// Sever Port Or Server
app.listen(port,()=> {
    console.log(`Sever is running ${port}`);

});
