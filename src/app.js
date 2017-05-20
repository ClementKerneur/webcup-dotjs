import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cors from 'cors'
import passport from 'passport'
import mongoose from 'mongoose'
import config from './config/database'

import Router from './react-src/Router'
import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { StaticRouter } from 'react-router'

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

const app = express();

const users = require('./routes/users');

// Port Number
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

//SSR React
app.get('*', (req, res) => {
	console.log(req.url);
	res.send(ReactDOMServer.renderToString( <StaticRouter location={req.url} context={{}}><Router /></StaticRouter> ));
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
