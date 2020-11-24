/*
    Author: Brendan Mulhern
    Reference: 
*/
// Defines Dependencies
let express = require('express')
let bodyParser = require('body-parser')

// Defines Router
let router = express.Router()

// Imports Lesson Model
let Lesson = require('../models/lesson')

// Body Parser Middleware
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// Get Lessons Route
router.get('/', function(req, res) {
    Lesson.find({}, function(err, lesson) {
        if (err) {
            res.json(err)
        } else {
            res.json(lesson)
        }
    })
})

// Get Lesson By Id
router.get('/:id', function(req, res) {
    Lesson.findOne({ "_id": req.params.id }, function(err, lesson) {
        if (err) {
            res.json(err)
        } else {
            res.json(lesson)
        }
    })
})

// Post to Lessons Route
router.post('/create', function(req, res) {
   Lesson.create(req.body, function(err, lesson) {
       if (err) {
           res.json(err)
       } else {
           res.json(lesson)
       }
   })
})

// Edits the Lessons
router.put('/edit/:id', function(req, res) {
    Lesson.findOne({ "_id": req.params.id }, function(err, lesson) {
        if (err) {
            res.json(err)
        } else {
            lesson.set(req.body)
            lesson.save()
            res.json("PUT Success")
        }
    })
})

// Deletes the Lesson
router.delete('/delete/:id', function(req, res) {
    Lesson.findOne({ "_id": req.params.id }, function(err, lesson) {
        if (err) {
            res.json(err)
        } else {
            lesson.remove()
            res.json("Delete Success")
        }
    })
})

// Exports router
module.exports = router
