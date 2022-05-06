const cl = (TheThingYouWantToConsoleLog) => {console.log(TheThingYouWantToConsoleLog)}
const cl2 = () => { cl('hello this thing is working')}

// const getDocId = (thing) => {document.getElementById(`${thing}`)}

// const NameInput = getDocId('name')
// NameInput.addEventListener('click' , cl2)
const usernameInput = document.getElementById(`username`)
const passwordInput = document.getElementById(`SuperSecret`)
const emailInput = document.getElementById(`email`)
const nameInput = document.getElementById(`name`)
const submitButton = document.getElementById('submitLogin')
const Wholeform = document.getElementById('wholeform')
submitButton.addEventListener('click', (event) => {event.preventDefault()
console.log(nameInput.value,  emailInput.value, usernameInput.value)


 const body = { 
   Name:nameInput.value, Email:emailInput.value, UserName:usernameInput.value
,Password:passwordInput.value
}
axios.post(`http://localhost:3456/usernames`,body)
.then(res => {console.log(res.data)
    .status(200).send(res.data)
})
.catch(err => {
    console.log(err)
})


window.location.href = "http://www.localhost:3456/email"



})

