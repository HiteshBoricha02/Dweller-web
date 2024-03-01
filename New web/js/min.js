const hambagerMenu = document.querySelector(".hambger-menu");
const Menu = document.querySelector("#navbar");

hambagerMenu.addEventListener("click" , () => {
    hambagerMenu.classList.toggle("active");
    Menu.classList.toggle("active");
})









// header scroll efect 

// document.addEventListener("scroll" , () => {
//     const header = document.querySelector("header");

//     if(window.screenY > 50){
//         header.classList.add("active");
//     }
//     else{
//         header.classList.remove("active");
//     }
// })

      