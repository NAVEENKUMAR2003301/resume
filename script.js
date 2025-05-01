const navLinks = document.querySelector(".nav2 > .nav-links2 > ul")
const menu = document.querySelector(".responsive")
const cancel = document.querySelector(".cancel")
const logo = document.querySelector("header>.logo")
const clickA = document.querySelector(".clickA")
let a = 1
menu.addEventListener("click", () =>  {  
   a=!a;
    if(a===false){
        navLinks.style.display="block"  
    }
    else{
        navLinks.style.display="none"
   }   
})
cancel.addEventListener("click", () =>  {
    navLinks.style.display="none"
    a=1
})

logo.addEventListener("mouseover",() => {
   logo.innerHTML="click Me" 
})

logo.addEventListener("click",() => {
     a=!a;
    if(a===false){
        clickA.style.display="block"  
    }
    else{
        clickA.style.display="none"
   } 
})

