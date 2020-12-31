// Require Dependencies
let express = require('express')
let http = require('http')
let mongoose = require('mongoose')
let path = require('path')

// Import Router
let apiRouter = require('./routes/router')

// Connect to MongoDB
mongoose.connect('mongodb+srv://bmulhern2:Bmole22%21%21@cluster0.eopst.mongodb.net/instructorInterface?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, function() {
    console.log("DB Connected")
})

// Defines an express app
let app = express()

// Uses Router
app.use('/api', apiRouter)

// Uses the dist folder of the front-end
app.use(express.static(path.join(__dirname, '../dist/instructorInterface')))
app.use('/', express.static(path.join(__dirname, '../dist/instructorInterface')))

// Creates a server running on port 8080
http.createServer(app).listen('8000', function() {
    console.log("Server Started On Port 8000")
})