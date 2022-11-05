let modedark=document.getElementById("modedark");
let body=document.body;

modedark.addEventListener ("click", function(){
    let val=body.classList.toggle("dark")
    localStorage.setItem("modedark",val)
})
let valor=localStorage.getItem("modedark")

if (valor=="true") {
    body.classList.add("dark")
} else {
    body.classList.remove("dark")
}