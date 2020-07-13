//Setting required global variables.
const express = require ("express");
const { v1: uuidv1 } = require('uuid');
const fs = require("fs");

//Using express.
const app = express();
//Setting initial port.
var PORT = process.env.PORT || 8080;
//Setting up express to handle data parsing.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());