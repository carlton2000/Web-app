const express = require('express');
const router = express.Router();
const fs = require('fs')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const fetch = require('node-fetch')
var favMusic = require('./favoritesMusic.json')
var favBooks = require('./favoritesBooks.json')
const app = express()
app.use(bodyParser.json())
app.use(express.json())
app.use(helmet())


// This is displaying the music api from where it is being called 
router.get('/music', (req, res) => {
    fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(req.query.search)}&limit=10&entity=song`)
        // this is the api where the music is displaying from and itune website
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            // displaying the specific info from the api
            res.send(JSON.stringify(data.results))
        })
    console.log(res)
})


router.post('/favoritesMusic', (req, res) => {
    // calling the music from the api
    console.log('access')
    favMusic.push(req.body)
    fs.writeFile('favoritesMusic.json', JSON.stringify(favMusic), (err) => {
        if (err) {
            console.log("not working", err)
        } else {
            console.log("yeah")
        }
    })
    // making sure the api is working and inputing your own music
})

router.get('/favoritesMusic', (req, res) => {
    // using the api 
    fs.readFile('./favoritesBooks.json', (err, data) => {
        // displaying the books that is being called
        if (err) {
            console.log('Not Calling anything')
        } else {
            res.send(favMusic)
        }
    })
})

router.delete('/favoritesMusic', (req, res) => {
    console.log('access')
    favMusic = favMusic.filter((i) => {
        return i.id != req.body.deleted
    })
    fs.writeFile('favoritesMusic.json', JSON.stringify(favMusic), (err) => {
        if (err) {
            console.log("Stopped working", err)
        } else {
            console.log("Its Working now")
        }
    })
})

// This is displaying the books api from where it is being called 
router.get('/book', (req, res) => {
    fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(req.query.search)}&limit=10&entity=ebook`)
    // using the api and fetching the information and then displaying it 
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            // displaying the results of the function
            res.send(JSON.stringify(data.results))
        })
})

router.post('/favoritesBooks', (req, res) => {
    // Posting the books so whatever is called will show
    favBooks.push(req.body)
    fs.writeFile('favoritesBooks.json', JSON.stringify(favBooks), (err) => {
        if (err) {
            console.log("Stopped working", err)
        } else {
            console.log("Its working now")
        }
    })
})


router.get('/favoritesBooks', (req, res) => {
    fs.readFile('./favoritesBooks.json', (err, data) => {
        if (err) {
            console.log('cant read')
        } else {
            res.send(favBooks)
        }
    })
})
router.delete('/favoritesBooks', (req, res) => {
    console.log('access')
    favBooks = favBooks.filter((i) => {
        return i.id != req.body.deleted
    })
    fs.writeFile('favoritesBooks.json', JSON.stringify(favBooks), (err) => {
        if (err) {
            console.log("not working", err)
        } else {
            console.log("yeah")
        }
    })
})

if(process.env.NODE_ENV === 'poduction'){
    app.use(express.static('frontend/build'));
    app.get('/', function(req, res){
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}


module.exports = router;