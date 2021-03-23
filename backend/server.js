const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json);

const url = process.env.ATLAS_URL;
mongoose.connect(url,{useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log('MongoDB Database is connection established successfully')
});

app.listen(port,()=> {
    console.log(`Sever is running ${port}`);

});
