var loginToggleBtn = document.querySelector(".loginswitch")
var registerToggleBtn = document.querySelector(".registerswitch");
var registerForm = document.querySelector(".registerForm")
var loginForm = document.querySelector(".loginForm")
var overlay = document.querySelector(".overlay")

var errorH3 = document.querySelector(".errorh3")

loginToggleBtn.onclick=()=>toggleForm('login')
registerToggleBtn.onclick=()=>toggleForm('register')


loginForm.classList.add('hide-form')
registerForm.classList.add('hide-form')


function toggleForm(form){
    console.log(form)

    overlay.classList.add('drop-overlay')

    if(form === "register"){
        loginForm.classList.add("hide-form")
        registerForm.classList.remove("hide-form")
    }
    else{
        registerForm.classList.add("hide-form")
        loginForm.classList.remove("hide-form")

    }
}


console.log(errorH3)

if(errorH3){
    loginForm.classList.remove("hide-form")
    overlay.style.display='none'
    overlay.classList.add('drop-overlay')

}