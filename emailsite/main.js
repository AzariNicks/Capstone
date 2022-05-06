const mailcont = document.getElementById('content')    
const submit = document.getElementById('submitform')
const bigForm = document.getElementById('BigForm')
emailjs.init('YV8k2_428YWlFRKkm')
let bruh = 5
submit.addEventListener('click' , event => {event.preventDefault()
console.log(`right now you have the stuff commeted out but this would email you ${mailcont.value}`)
    //     emailjs.send('Azari_emailServer', 'contact_form' , {
//         from_name:'Azari',
//         message: mailcont.value,
//         user_email: 'hello.com'
// })
    // .then( (res) => {console.log('Nice Everything is working' , res.status , res.text)})
    // , () => {console.log('Bruh its not working', error())}

})


// service id Azari_emailServer