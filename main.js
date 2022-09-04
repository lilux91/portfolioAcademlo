
const iconMenu=document.querySelector("#iconMenu")
const ulMenu=document.querySelector("#nav ul")
let menuabierto=false
iconMenu.addEventListener("click",()=>{
    
    if(menuabierto){ ulMenu.style.transform="translateX(200%)"
    menuabierto=true
    } else {ulMenu.style.transform="translateX(0)"
     menuabierto=false
    }
})
