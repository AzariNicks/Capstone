const cl = (TheThingYouWantToConsoleLog) => {console.log(TheThingYouWantToConsoleLog)}
const cl2 = () => { cl('hello this thing is workings')}
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('SuperSecret')
const BaseUrl = `https://toemailazari.herokuapp.com`
const RegLink = document.getElementById('Register')
RegLink.addEventListener('mouseover', () => {
    RegLink.style.cursor = 'pointer'})
RegLink.addEventListener('mouseout', () => {
    RegLink.style.cursor = 'default'})
RegLink.addEventListener('mouseover', () => {
    RegLink.style.color = 'lightblue'})
RegLink.addEventListener('mouseout', () => {
    RegLink.style.color = 'blue'})




submitButton = document.getElementById('submitLogin')
submitButton.addEventListener('mouseover', () => {
    submitButton.style.backgroundColor = 'lightblue'})
submitButton.addEventListener(`mouseout` ,() => {

    submitButton.style.backgroundColor = '#cca8b3'
})



document.getElementById('submitLogin').addEventListener('click' , (event) => {
event.preventDefault()
    const newusername = usernameInput.value
    const password = passwordInput.value
    const body = {
        Username:newusername,
        password:password


    }
    

axios.post(`${BaseUrl}/verfy`, body )
.then((res,req)  => {
  
    if((typeof res.data) === 'string'){
    alert(res.data) //
    return
}
    else
{   
        let number = res.data
              window.localStorage.setItem('Number', parseInt(number))
              window.location.href = "/email"}
})
.catch(err => {
    console.log(err)
})
})

// const anonButton = document.getElementById("AnonLog-in")
// anonButton.addEventListener('click', cl2)

document.getElementById('Register').addEventListener('click', (event) => {
    event.preventDefault()
    
    window.location.href = "/"
    
})

