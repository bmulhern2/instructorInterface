// Import Dependencies
let mongoose = require('mongoose')

// Define week's schema
let WeekSchema = mongoose.Schema({
    weekNumber: Number,
    warmUpDescription: String,
    stretchDescription: String,
    kicksDescription: String,
    strikesDescription: String,
    blocksDescription: String,
    combosDescription: String,
    formDescription: String
})

// Export Schema
module.exports = WeekSchema