const express = require('express');
const connectDB = require('./database');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const {readdirSync} = require('fs');
require('dotenv').config();



//app middleware express
const app = express();

//db
connectDB();

//middleware
app.use(morgan('dev'));
app.use(express.json({ limit:'2mb'})); //standard configuration
app.use(cors());

//fs
readdirSync('./routes').map( r => app.use('/api', require('./routes/' + r)))


//port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port: ${port}` ));