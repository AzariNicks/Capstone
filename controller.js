const cl = (TheThingYouWantToConsoleLog) => {console.log(TheThingYouWantToConsoleLog)}
const cl2 = () => { cl('hello this thing is workings')}
function containsWhitespace(str) {
    return /\s/.test(str);
  }

const Usernames =
    [ 
         {
        Name:'Azari',
        Email:'itsazari9321@gmail.com',
        UserName:'Franky',
        HashedPassword: "N/A",
        UniqueID:1
    },
    {
        Name:'Azari2ndAccount',
        Email:'itsazari9321@gmail.com',
        UserName:'CanISendAnEmail',
        HashedPassword: "N/A",
        UniqueID:2
    }
]

UsernamesFile = Usernames
UsernamesFile.push({
    Name: 'Obama',
    Email: 'James@gmail.com',
    UserName: 'TestMan',
    HashedPassword: 'N/A',
    UniqueID:3
})
  cl(UsernamesFile)
let UniqueID = 4


const bcrypts = require('bcryptjs')
const array = []  
module.exports = {
    RegUser: (req ,res) => { 
        const {Users,Name,Email,UserName,Password} = req.body
        if(UserName.length < 5 || Name.length < 5 || Email.length < 5 || Password.length < 5){
           let message = 'ALL Fields Required '
          res.status(200).send(message)
        return}
        else if(UserName.length > 20 ){ let message = 'Username Needs To Less Than 20 characters'
        res.status(200).send(message)
      return
    }
    else if(containsWhitespace(UserName)) 
    {
        let message = 'Username Cant Have Spaces'
        res.status(200).send(message)
      return
    }
        for(let i = 0;i < UsernamesFile.length;i++){
        if(UserName === UsernamesFile[i].UserName){
        
            let message =   `We already Have This name`
            console.log(`This name already exist Please try another`)
            
            res.status(200).send(message)
            return 
        }}
        
        res.status(200).send(req.body)
          const salts = bcrypts.genSaltSync(9)
          const HashedPassword = bcrypts.hashSync(Password, salts)
        UsernamesFile.push({
            Name: Name,
            Email: Email,
            UserName: UserName,
            HashedPassword: HashedPassword,
            UniqueID:UniqueID++ 
        })
        UniqueID = UniqueID++
      
    },
        getAllUserInfo: (req ,res) => { 
        

        res.status(200).send(UsernamesFile)
        
    },
    checkingPassword: (req, res) => {
  
    const {Username,password} = req.body
       let doesntHaveUsername = `${Username} does not exist in our system`

       const salts = bcrypts.genSaltSync(9)
       const hashedPassword = bcrypts.hashSync(password, salts)
               for(let i = 0; i < UsernamesFile.length;i++){
                     if(Username === UsernamesFile[i].UserName){
                            cl(`This is a Vaild User In Our System`)
                                bcrypts.compare(password, UsernamesFile[i].HashedPassword, (err, result) => {
                                   if(result === true) {
                                 
                                       let message = (i).toString()
                                       cl(message)
                                    res.status(200).send(message)
                                    return 
                                   } 
                                         else if(result === false){
                                
                    let message = `This Password Is Incorrect`
                    cl(`Wrong Password Tho`)
                    res.status(200).send(message)
                    return 
                    }
                }
            )
            return
        }
   }
let message = `This User Name Doesnt Exist`
res.status(200).send(message)
return 
}


} 