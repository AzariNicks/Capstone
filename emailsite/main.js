const mailcont = document.getElementById('content')    

const submit = document.getElementById('submitform')

const bigForm = document.getElementById('BigForm')

emailjs.init('YV8k2_428YWlFRKkm')

mailcont.addEventListener('click' , (event) => {event.preventDefault()
console.log('hello')
})
let bruh = 5
submit.addEventListener('click' , event => {event.preventDefault()
    emailjs.send('Azari_emailServer', 'contact_form' , {
        from_name:'Azari',
        message: mailcont.value,
        user_email: 'hello.com'
})
    .then( (res) => {console.log('Nice Everything is working' , res.status , res.text)})
    , () => {console.log('Bruh its not working', error())}
console.log(mailcont.value)
})


// service id Azari_emailServer