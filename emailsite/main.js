const cl = (TheThingYouWantToConsoleLog) => {console.log(TheThingYouWantToConsoleLog)}
const cl2 = () => { cl('hello this thing is workings')}


const mailcont = document.getElementById('content')    
const submit = document.getElementById('submitform')
const bigForm = document.getElementById('BigForm')
emailjs.init('YV8k2_428YWlFRKkm')
axios.get('/usernames')
.then((res) => {
    if(UserID){
     let UserID = parseInt(window.localStorage.getItem('Number'))
    let ThisUser = res.data[UserID]
   const {Name,Email,UserName} = ThisUser 
   
    cl(Name)
    cl(Email)
    cl(UserName)
    submit.addEventListener('click' , event => {event.preventDefault()
        // console.log(`right now you have the stuff commeted out but this would email you ${mailcont.value}`)
                emailjs.send('Azari_emailServer', 'contact_form' , {
                from_name:Name,
                message: mailcont.value,
                user_email: Email
        })
        alert(`${UserName} You've sent the email as ${Email}`)


            .then( (res) => {console.log('Nice Everything is working' , res.status , res.text)})
            , () => {console.log('Bruh its not working', error())}
        })}
        else{
            submit.addEventListener('click' , event => {event.preventDefault()
                // console.log(`right now you have the stuff commeted out but this would email you ${mailcont.value}`)
                        emailjs.send('Azari_emailServer', 'contact_form' , {
                        from_name:`Anon`,
                        message: mailcont.value,
                        user_email: `Anon`
                })
                alert(`${UserName} You've sent the email as ${Email}`)
        
        
                    .then( (res) => {console.log('Nice Everything is working' , res.status , res.text)})
                    , () => {console.log('Bruh its not working', error())}
                })

            
        }
})



// service id Azari_emailServer