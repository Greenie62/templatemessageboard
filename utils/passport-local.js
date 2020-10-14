const LocalStrategy = require('passport-local').Strategy;
const orm = require('../orm/orm.js')


module.exports = function(passport){


    async function authenticateUser(username,pw,done){
        console.log(username,pw)


        let users = await orm.getClients()

        let userId = users.findIndex(u=>u.username === username);
        console.log("Id: " + userId)


        if(userId === -1){
            return done(null,false,{message:"That user doesn't exist. Please register an account!"})
        }

        else if(users[userId].password !== pw){
            return done(null,false,{message:"invalid password"})
        }
        else{
            // let user = users[userId]
            // console.log("User:",user)
            return done(null,users[userId])
        }
    }

    passport.use(new LocalStrategy({usernameField:"username"},authenticateUser))
    passport.serializeUser((user,done)=>done(null,user))
    passport.deserializeUser((user,done)=>done(null,user))
}