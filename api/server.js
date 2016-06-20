let express = require('express')
let bodyParser = require('body-parser')
let passport = require('passport')

const auth = require('./src/auth')
const project = require('./src/project')

let app = new express()

app.use(bodyParser.json())

let config = require('./config')
config()

app.use(passport.initialize())

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.use('/auth', auth)
app.use('/projects', project)

let server = app.listen(4000, () => console.log('Express server is listening on ' + server.address().port))