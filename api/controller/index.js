// Controller index
const express = require('express')
const bodyParser = require('body-parser')
const { verifyAToken } = require('../middleware/AuthenticateUser')
const routes = express.Router()
//Importing All model's objects
const { users, books, authors, orders } = require('../model')

//========== User Router ==========
routes.get('/Users', (req, res) => {
    users.fetchUsers(req, res)
})
// ==== SINGLE USER ==== \\
routes.get('/user/:id', (req, res) => {
    users.fetchUser(req, res)
})
// ==== LOGIN === \\
routes.post('/login', bodyParser.json(), (req, res) => {
    
})
// ==== REGISTER ==== \\
routes.post('/register', bodyParser.json(), (req, res) => {
    users.register(req,res)
})
// ==== UPDATE ==== \\
routes.put('/user:id', bodyParser.json(), (req, res) => {
    users.updateUser(req, res)
})
routes.patch('/user:id', bodyParser.json(), (req, res) => {
  users.updateUser(req, res)
})
// ====  DELETE === \\
routes.delete('/user/:id', (req, res) => {
    users.deleteUser(req, res)
})
module.exports = {
    express,
    routes
}
// === Login === \\
routes.post("/login", bodyParser.json(), (req, res) => {
  users.login(req, res);
});

