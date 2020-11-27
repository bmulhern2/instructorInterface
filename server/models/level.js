// Define Mongoose
let mongoose = require('mongoose')

// Define Schema
let Schema = mongoose.Schema

// Define Level Schema
let LevelSchema = new Schema({
    level: String
})

// Model Schema
let levels = mongoose.model('level', LevelSchema)

// Export Schema
module.exports = levels