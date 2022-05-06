const cl = (TheThingYouWantToConsoleLog) => {console.log(TheThingYouWantToConsoleLog)}
const cl2 = () => { cl('hello this thing is workings')}
const Usernames =
    [ 
         {
        Name:'Azari',
        Email:'itsazari9321@gmail.com',
        UserName:'Franky',
        HashedPassword: "67877777"
    }
]

UsernamesFile = Usernames
UsernamesFile.push({
    Name: 'Obama',
    Email: 'James@gmail.com',
    UserName: 'whap whap',
    HashedPassword: 'rhcmd9jf9dnm4'
})
  cl(UsernamesFile)



const bcrypts = require('bcryptjs')
const array = []  
module.exports = {
    sendUserInfo: (req ,res) => { 
        const {Users,Name,Email,UserName,Password} = req.body
       
        const NewUser = req.body
        res.status(200).send(req.body)
          const salts = bcrypts.genSaltSync(9)
          const Hasedpassword = bcrypts.hashSync(Password, salts)
        UsernamesFile.push({
            Name: Name,
            Email: Email,
            UserName: UserName,
            HashedPassword: Hasedpassword
        })
      
    },
        getAllUserInfo: (req ,res) => { 
        res.status(200).send(UsernamesFile)
        
    }
} 