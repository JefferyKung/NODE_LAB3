//import 3rd party modules
const express = require('express');
const bodyParser = require('body-parser');
const path= require('path')

//import routes
const adminRoutes = require('./routes/admin');
const recipeRoutes = require('./routes/recipe');

//initialize express and body-parser
const app = express();
app.use(bodyParser.urlencoded({extended: false}))

//routes
app.use(adminRoutes);
app.use(recipeRoutes)

//catch-all route/middleware
app.use((req,res,next) => {
    res.status(404).send('<h1>Page not found</h1>')
})

app.use('/static', express.static(path.join(__dirname, 'public')))

//start server
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
