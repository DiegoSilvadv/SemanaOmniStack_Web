const express = require('express');
const mongoose = require('mongoose');
//impor do cors é importante yarn add cors
const cors = require('cors');
const routes = require('./routes'); 


const app = express();

mongoose.connect('mongodb+srv://diegosilva:skate17@cluster0-lqouh.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);