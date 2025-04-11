
// import
const express = require('express');
const { readdirSync } = require('fs');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const connectDB = require('./config/mongooseDB')

app = express();
connectDB();

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json({limit: '10mb'}))

// variable
PORT = 5000;

// coding
readdirSync('./Routes')
    .map((r) => {
        return app.use('/api', require('./Routes/' + r))
    })

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
})