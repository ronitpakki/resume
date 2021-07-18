let ham=document.querySelector("#ham")
let image=document.querySelector("#img");
let list=document.querySelector("nav>ul");
let listItems=document.querySelectorAll("nav>ul>li");
image.addEventListener("click",()=>{
    list.classList.toggle("open")
    ham.classList.toggle("open")
})