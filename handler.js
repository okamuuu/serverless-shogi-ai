'use strict';

const serverless = require('serverless-http');
const express = require('express');
const app = express();

// const aws = require('aws-sdk');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS")
  next()
});

app.get('/api/gikou', (req, res) => {
  res.json({});
});

module.exports.main = serverless(app);
