// Requires Dependencies
let mongoose = require('mongoose')

// Defines Schema
let Schema = mongoose.Schema

// Defines Lesson Schema
let LessonSchema = new Schema({
    level: String,
    warmUp: String,
    warmUpDescription: String,
    stretch: String,
    stretchDescription: String,
    kicks: String,
    kicksDescription: String,
    strikes: String,
    strikesDescription: String,
    blocks: String,
    blocksDescription: String,
    combos: String,
    combosDescription: String,
    form: String,
    formDescription: String
})

// Models data
let Lesson = mongoose.model('Lesson', LessonSchema)

// Exports model
module.exports = Lesson