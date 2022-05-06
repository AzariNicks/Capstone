const cl = (TheThingYouWantToConsoleLog) => {console.log(TheThingYouWantToConsoleLog)}
const cl2 = () => { cl('hello this thing is workings')}
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('SuperSecret')








document.getElementById('submitLogin').addEventListener('click' , (event) => {
event.preventDefault()
    const newusername = usernameInput.value
    const password = passwordInput.value
    

axios.get(`http://localhost:3456/usernames`)
.then(res => {const ALLUSERS = res.data
    // cl(ALLUSERS[0].UserName) this is how you can match usernames 
// .status(200).send(res.data)
})
.catch(err => {
    console.log(err)
})
})

const anonButton = document.getElementById("AnonLog-in")
anonButton.addEventListener('click', cl2)

document.getElementById('linktoRegister').addEventListener('click', (event) => {
    event.preventDefault()
    
    window.location.href = "http://www.localhost:3456/"
    
})

