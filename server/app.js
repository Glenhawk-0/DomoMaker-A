const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const mongoose = require('mongoose');
const expressHandlebars = require('express-handlebars');
const helmet = require('helmet');

const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const dbURI = process.envMONGODB_URI || 'mongodb://localhost/DomoMaker';
mongoose.connect(dbURI).catch((err) => {
    if(err){
        console.log('Could not connect to database');
        throw err;

    }
});

const app = express();

app.use(helmet());
app.use
app.use
app.use
app.use
app.use

app.engine
app.set
app.set

router(app);

