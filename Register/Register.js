const cl = (TheThingYouWantToConsoleLog) => {console.log(TheThingYouWantToConsoleLog)}
const cl2 = () => { cl('hello this thing is working')}

// const getDocId = (thing) => {document.getElementById(`${thing}`)}

// const NameInput = getDocId('name')
// NameInput.addEventListener('click' , cl2)
const BaseUrl = `https://toemailazari.herokuapp.com`



const usernameInput = document.getElementById(`username`)
const passwordInput = document.getElementById(`SuperSecret`)
const emailInput = document.getElementById(`email`)
const nameInput = document.getElementById(`name`)
const submitButton = document.getElementById('submitLogin')
const Wholeform = document.getElementById('wholeform')
submitButton.addEventListener('click', (event) => {event.preventDefault()
console.log(nameInput.value,  emailInput.value, usernameInput.value)
if(nameInput.length < 5 || usernameInput.length < 5 || emailInput.length < 5 || passwordInput < 5){
    alert('All Feilds Required more than 5 characters')
    return
}
else{
cl('everything is more than 5')




 const body = {

   Name:nameInput.value, Email:emailInput.value, UserName:usernameInput.value
,Password:passwordInput.value
}
axios.post(`${BaseUrl}/usernames`,body)


.then(res => {
    
   if(typeof res.data === 'string'){alert(res.data)} 
   else{
         window.location.href = "/login"
        console.log(res.data)
        .status(200).send(res.data)}
})
.catch(err => {
    console.log(err)
})
// fix this when you upload it to thingy 
}})

