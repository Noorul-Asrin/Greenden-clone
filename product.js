//selecting side navbar,menu icon

var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

sidenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

//Product serach functionality
var product_container=document.getElementById("product-container")
var productlist=product_container.querySelectorAll("div")
var search=document.getElementById("search")

search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()

    for(i=0;i<productlist.length;i++){

        var productname=productlist[i].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"
        }
    }
})


