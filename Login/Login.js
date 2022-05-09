const cl = (TheThingYouWantToConsoleLog) => {console.log(TheThingYouWantToConsoleLog)}
const cl2 = () => { cl('hello this thing is workings')}
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('SuperSecret')








document.getElementById('submitLogin').addEventListener('click' , (event) => {
event.preventDefault()
    const newusername = usernameInput.value
    const password = passwordInput.value
    const body = {
        Username:newusername,
        password:password


    }
    

axios.post(`http://localhost:3456/verfy`, body )
.then((res,req)  => {
  
    if((typeof res.data) === 'string'){
    alert(res.data) //
    return
}
    else
{   
        let number = res.data
              window.localStorage.setItem('Number', parseInt(number))
              window.location.href = "http://www.localhost:3456/email"}
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

