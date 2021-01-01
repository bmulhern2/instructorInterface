// Import Mongoose
let mongoose = require('mongoose')

let Schema = mongoose.Schema

// Film Schema
let FilmSchema = new Schema({
    filmUrl: String
})

// Model Schema
let Films = mongoose.model('Films', FilmSchema)

// Export Schema
module.exports = Films