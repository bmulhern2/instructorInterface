// Requires Dependencies
let mongoose = require('mongoose')

// Import Weeks Schema
let WeekSchema = require('./weeks')

// Defines Schema
let Schema = mongoose.Schema

// Defines Lesson Schema
let LessonSchema = new Schema({
    level: String,
    sessionNumber: String,
    warmUp: String,
    stretch: String,
    kicks: String,
    strikes: String,
    blocks: String,
    combos: String,
    form: String,
    weeks: [WeekSchema]
})

// Models data
let Lesson = mongoose.model('Lesson', LessonSchema)

// Exports model
module.exports = Lesson