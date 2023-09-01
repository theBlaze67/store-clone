let navList = document.querySelectorAll(".nav-ul")[0];
let menuBtn = document.querySelectorAll(".ri-menu-line")[0];
menuBtn.addEventListener('click',()=>{
    navList.classList.toggle("active")
})