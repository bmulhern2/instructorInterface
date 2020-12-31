// Import Mongoose
let mongoose = require('mongoose')

// Video Schema
let VideoSchema = mongoose.Schema({
    videoUrl: String
})

// Model Schema
let Video = mongoose.model('Video', VideoSchema)