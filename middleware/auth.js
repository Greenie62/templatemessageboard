

function isAuthenticated(req,res,next){
  
    if(req.isAuthenticated()){
        return res.redirect('/dashboard')
    }
    next()
}


function isNotAuthenticated(req,res,next){
    if(req.session.user){
        next()
    }
    else if(!req.isAuthenticated()){
        return res.redirect('/landing')
    }
    else{
        next()
    }
}


module.exports = { isAuthenticated, isNotAuthenticated }