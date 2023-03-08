const cl = (TheThingYouWantToConsoleLog) => {console.log(TheThingYouWantToConsoleLog)}
const cl2 = () => { cl('hello this thing is workings')}


const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const axios = require('axios')
const PORT = process.env.PORT || 5000;


app.use(express.json())
app.use(cors())
const serverNumber = 3500


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/code-a-webpage/main.html'))
    cl('HTML RegisterPage Sent To Server')
})
app.get('/style', (req, res) => {
    res.sendFile(path.join(__dirname, '/code-a-webpage/main.css'))
    cl('CSS For HtmlPage Sent To Server')
})
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '/code-a-webpage/main.js'))
    cl('JavaScript For RegisterPage Sent To Server')
})




app.listen(PORT, () => { cl(
    `running on port ${PORT}
heres a cute copy paste so its easy to get to
 www.localhost:${PORT} `)})
// git remote -v
// heroku git:remote -a toemailazari


// 2022-05-09T05:50:36.411699+00:00 app[web.1]: Error: ENOENT: no such file or directory, stat '/app/Login/Login.html'
/*
git init
git add .
git commit -m "MadeCssAddedFuncButtons"
git push heroku master



git init
git add .
git commit -m "MadeCssAddedFuncButtons"
git push https://github.com/AzariNicks/Capstone
*/ 