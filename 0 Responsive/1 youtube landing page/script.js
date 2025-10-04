let menu = document.querySelector("#menu")
let side = document.querySelector("#side-menu")
let content = document.querySelector("#video")
let flag = true

menu.addEventListener("click",function(){
    if(flag){
        side.style.left = "0"
        flag = false
    }else{
        side.style.left = "-240px"
        flag = true
    }

        side.classList.toggle("active");
    content.classList.toggle("shrink");
})