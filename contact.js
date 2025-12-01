//selecting side navbar,menu icon

var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

sidenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})