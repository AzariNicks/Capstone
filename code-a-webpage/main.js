const cl = (TheThingYouWantToConsoleLog) => {console.log(TheThingYouWantToConsoleLog)}
const cl2 = () => { cl('hello this thing is workings')}

const title = document.getElementById(`title`)
const mailcont = document.getElementById('content')    
const submit = document.getElementById('submitform')
const bigForm = document.getElementById('BigForm')


submit.addEventListener('mouseover', () => {
  submit.style.backgroundColor = 'lightblue'})
submit.addEventListener(`mouseout` ,() => {
  submit.style.backgroundColor = '#cca8b3'
})
emailjs.init('YV8k2_428YWlFRKkm')
axios.get('/usernames')
.then((res) => {

      let UserID = parseInt(window.localStorage.getItem('Number')) 
      title.textContent = "broment"
  
    let ThisUser = res.data[UserID]
   const {Name,Email,UserName} = ThisUser 
   title.textContent = `Welcome ${UserName}`
     submit.addEventListener('click' , event => {event.preventDefault()
        // console.log(`right now you have the stuff commeted out but this would email you ${mailcont.value}`)
        submit.style.cursor = 'not-allowed'
        
        
        if(mailcont.value < 1){alert('You Need To Have Some Mail TO Send')}
        else{  
            emailjs.send('Azari_emailServer', 'contact_form' , {
            from_name:Name,
            message: mailcont.value,
            user_email: Email
    })
    alert(`${UserName} You've sent the email as ${Email}`)
        

        .then( (res) => {console.log('Nice Everything is working' , res.status , res.text)})
        , () => {console.log('Bruh its not working', error())}
    }


  })
  submit.style.cursor = 'pointer'
})

        
              

    

// service id Azari_emailServer