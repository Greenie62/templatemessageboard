const express = require('express');
const layouts = require('express-ejs-layouts');
const flash = require('express-flash');
const session = require('express-session');
const passport = require('passport')
const RedisStore = require('connect-redis')(session);
const Redis = require('redis');

const client = Redis.createClient()


const app = express();
const PORT = process.env.PORT || 3005;

const routes = require("./routes")

app.set("view engine","ejs")


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.use(layouts)


app.use(flash())
app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:false,
    store:new RedisStore({client})
}))


app.use(passport.initialize())
app.use(passport.session())


app.use(routes)


app.use(urlError)
app.use(errorHandler)


function urlError(req,res,next){
    res.status(404);
    let error = new Error(`Error -- ${req.originalUrl}`);
    next(error)
}


function errorHandler(err,req,res,next){
    res.status(500);
    res.json({
        message:err.message,
        stack:err.stack,
        custom:`Ooops, looks like you've wandered off the valid URL pathway! 🤓 `
    })
}





app.listen(PORT,console.log(`Logged onto port ${PORT}, ${process.env.USER}`))