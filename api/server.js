const bodyParser = require('body-parser')
const express = require('express')
const jwt = require('express-jwt')
const passport = require('passport')

const auth = require('./src/auth')
const project = require('./src/project')
const user = require('./src/user')
const security = require('./src/services/security')

let app = new express()

app.use(bodyParser.json())

let config = require('./config')
config()

// Add CORS Filter
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-XSRF-TOKEN")
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
  next()
});

app.use(passport.initialize());
app.use(jwt({ secret: security.SECRET}).unless({path: ['/auth/login', '/auth/login']}));


// Custom handler for authorization errors. Default throws UnauthorizedError.
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.sendStatus(401);
  }
});

app.set('trust proxy', 1) // trust first proxy

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.use('/auth', auth)
app.use('/projects', project)
app.use('/users', user)

let server = app.listen(4000, () => console.log('Express server is listening on ' + server.address().port))
