const cl = (TheThingYouWantToConsoleLog) => {console.log(TheThingYouWantToConsoleLog)}
const cl2 = () => { cl('hello this thing is workings')}

const axios = require('axios')
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3456;


app.use(express.json())
app.use(cors())
const serverNumber = 3456
app.use(express.static(path.join(__dirname, 'capstone')))
// app.get('/email', (req, res) => {
//     res.sendFile(path.join(__dirname, '/emailsite/main.html'))
//     cl('We got the html through')
// })
// app.get('/style', (req, res) => {
//     res.sendFile(path.join(__dirname, '/emailsite/main.css'))
//     // cl('We got the css through')
// })
// app.get('/js', (req, res) => {
//     res.sendFile(path.join(__dirname, '/emailsite/main.js'))
//     // cl('We got the JavaScript Through')
// })
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/Register/Register.html'))
//     // cl('HTML RegisterPage Sent To Server')
// })
// app.get('/style2', (req, res) => {
//     res.sendFile(path.join(__dirname, '/Register/Register.css'))
//     // cl('CSS For HtmlPage Sent To Server')
// })
// app.get('/js2', (req, res) => {
//     res.sendFile(path.join(__dirname, '/Register/Register.js'))
//     // cl('JavaScript For RegisterPage Sent To Server')
// })
// app.get('/log-in', (req, res) => {
//     res.sendFile(path.join(__dirname, '/Log-in/Login.html'))
//     // cl('HTML Log-in Page Sent To Server')
// })
// app.get('/style3', (req, res) => {
//     res.sendFile(path.join(__dirname, '/Log-in/Login.css'))
//     // cl('HTML Log-in Page Sent To Server')
// })
// app.get('/js3', (req, res) => {
//     res.sendFile(path.join(__dirname, '/Log-in/Login.js'))
//     // cl('HTML Log-in Page Sent To Server')
// })
const {RegUser, getAllUserInfo, checkingPassword} = require('./controller.js')

app.get('/usernames',   getAllUserInfo)
app.post('/usernames', RegUser)
app.post('/verfy',checkingPassword)
app.listen(PORT, () => { cl(`running on port ${PORT}
heres a cute copy paste so its easy to get to
 localhost:${PORT} `)})
// git remote -v
// heroku git:remote -a toemailazari




// git init
// git add .
// git commit -m "switched to static"
// git push heroku master
// DONE 