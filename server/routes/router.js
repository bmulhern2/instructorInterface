/*
    Author: Brendan Mulhern
    Reference: 
*/
// Defines Dependencies
let express = require('express')
let bodyParser = require('body-parser')
let multer = require('multer')

// Multer Storage
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname.split(" ").join(""))
    }
})

let upload = multer({ storage: storage })

// Defines Router
let router = express.Router()

// Imports Lesson Model
let Lesson = require('../models/lesson')

// Import Film Model
let Films = require('../models/films')

// Imports Level
let levels = require('../models/level')


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
router.get('/week/:level/:sessionNumber/:weekId', function(req, res) {
    Lesson.findOne({ "level": req.params.level }, function(err, sessions) {
        if (err) {
            res.json(err)
        } else {
           res.json(sessions)
        }
    })
})
// FindByLevel Route
router.get('/lesson/:level', function(req, res) {
    Lesson.find({ "level": req.params.level }, function(err, lessons) {
        if (err) {
            res.json(err)
        } else {
            res.json(lessons)
        }
    })
})
// Get Levels Route
router.get('/levels', function(req, res) {
    levels.find({}, function(err, levels) {
        if (err) {
            res.json(err)
        } else {
            res.json(levels)
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

// Get individul week
router.get('/week/')

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

// Weeks Post
router.post('/post/week/:level/:sessionNumber', function(req, res) {
    Lesson.findOne({ "level": req.params.level}, function(err, level) {
        if (err) {
            res.json(err)
        } else {
            level['weeks'].push(req.body)
            level.save(req.body, function(err, response) {
                if (err) {
                    res.json(err)
                } else {
                    res.json(response)
                }
            })
        }
    })
})

// Video Post
router.post('/upload', upload.single('video'), function(req, res) {
    Films.create({ "videoUrl": req.file.path })
})

// Video GET
router.get('/download', function(req, res) {
    Films.find({}, function(err, films) {
        if (err) {
            res.json(err)
        } else {
            res.json(films)
        }
    })
})

// Exports router
module.exports = router
