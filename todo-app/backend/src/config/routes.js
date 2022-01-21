const express = require('express')

// exportando uma função
module.exports = function (server) {
    
    // API Routes
    const router = express.Router()
    server.use('/api', router) //Midway

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}