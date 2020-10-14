const router = require('express').Router();
const fetchNews = require('../../utils/fetch-news.js')

const { isAuthenticated, isNotAuthenticated } = require('../../middleware/auth.js')


router.get("/",(req,res)=>{
    res.redirect('/landing')
})

router.get('/landing',isAuthenticated,(req,res)=>{
    res.render('./pages/landing',{pageTitle:"Landing"})
})


router.get('/dashboard',isNotAuthenticated,async(req,res)=>{
    let user = req.session.user
    if(req.session.user){
        user = req.session.user
    }
    console.log("User:",user.username)
    // console.log(req.session.user)
    
    let articles = await fetchNews()
    res.render("./pages/dashboard",{layout:'dashlayout',
                                    user:user.username,
                                    articles})

  })


router.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('/landing')
})





module.exports = router;