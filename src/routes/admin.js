const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../utils/path-helper');

//filter from a more specific path
router.get('/leave-a-note', (req, res, next) => {

    res.sendFile(path.join(rootDir, 'views' , 'leave-a-note.html'))
    // res.send(`
    //     <form action="/member" method="POST">
    //         <input type="text" name="name" placeholder="leave a note">
    //         <button type="submit">Add Note</button>
    //     </form>
    // `)
})

//limiting middleware to execute a POST request
router.post('/show-note', (req, res, next) => {
    console.log("Note is: ", req.body.name);
    res.send(`
    <h1> Note is ${req.body.name}</h1>
    <a href="/">Home</a>
`)
    
    // res.redirect('/')
})

module.exports = router;