
// NAVBAR MENU SCROLL

const menu = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    
}

// BACK TOP SCRIPT

const goBackTop = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
    if(this.window.scrollY >= 200 ){
        goBackTop.classList.add("active");
    }
    else{
        goBackTop.classList.remove("active");
    }
});