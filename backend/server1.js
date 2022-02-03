const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connection  = mongoose.connection;
connection.once('open',()=>console.log('MongoDB connection established succ essfully'));
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
app.use('/excercises', exercisesRouter).use('/users', usersRouter);


app.listen(port,()=>{console.log(`Server running at port ${port}`)});
