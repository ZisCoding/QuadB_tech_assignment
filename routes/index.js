// importing express module
const express = require('express');
// making a routing middleware
const route = express.Router();
// importing home controller all the action is defined there
const homeController = require('../controllers/homeController')

route.get('/',homeController.home);


module.exports = route;