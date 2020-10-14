const router = require('express').Router();
const pool = require('../../postgres/pool');
const passport = require("passport");
const orm = require('../../orm/orm.js')
require("../../utils/passport-local")(passport)



router.post('/register',async (req,res)=>{
    console.log(req.body);
    // pool.query("INSERT INTO clients(username,password,interest) VALUES ($1,$2,$3)",[req.body.username,req.body.password,req.body.topic])
    await orm.addClient(req.body)
    req.session.user=req.body;
    res.redirect('/dashboard')
})

router.post('/login',passport.authenticate("local",{
    successRedirect:'/dashboard',
    failureFlash:true,
    failureRedirect:"/landing"
}))



router.post("/newcomment",(req,res)=>{
    console.log(req.body.comment)
})


module.exports = router;