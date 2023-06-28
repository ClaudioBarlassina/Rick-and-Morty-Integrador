const express = require('express')
const routesApp = express.Router();

const getCharById = require('../Controllers/getCharById')
const login = require('../Controllers/login')
const postFav =  require('../Controllers/handleFavorites/postFav')
const deleteFav =  require('../Controllers/handleFavorites/deleteFav')


routesApp.get('/character/:id', getCharById)
routesApp.get('/login', login)
routesApp.post('/fav', postFav)
routesApp.delete('/fav/:id', deleteFav)

module.exports = routesApp;