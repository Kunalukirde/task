const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const DBConnect = require('./config/dbconnect.js');
const DATABASE_URL = process.env.DATABASE_URL;
DBConnect(DATABASE_URL);
const adminRoute = require('./routes/adminroute.js');
const employeeRoute = require('./routes/employeeroute.js');
const empAuthRoute = require('./routes/emplAuthroute.js');

app.use('/admin', adminRoute);
app.use('/authemp',empAuthRoute);
app.use('/employee', employeeRoute);


app.listen(PORT, () => { console.log(`Listening on port ${PORT}`)});