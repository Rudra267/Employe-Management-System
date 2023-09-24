const express = require('express')
const path = require('path')
const app = express()
const port = 8000;
const hostname = '127.0.0.1';


const requestFileter = (req,resp,next)=>{
next()
}



// consolidate is for setting view engine as html 
var cons = require('consolidate');
const consolidate = require('consolidate');

// Static Middleware for serving static files i.e js file, css file.
app.use(express.static(path.join(__dirname, 'static')))

// Setting up view engine as html
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// ENDPOINTS 
app.get('/', function (req, res) {
    res.render('index.html')
})
app.get('/Salary', function (req, res) {
    res.render('Salary.html')
})
app.get('/Login', function (req, res) {
    res.render('Login.html')
})
app.get('/signup', function (req, res) {
    res.render('Signup.html')
})

// creation of server 
app.listen(port, function (error) {
    if (error) throw error
    console.log(`Server running at http://${hostname}:${port}/`)
})


