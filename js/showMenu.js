document.addEventListener("DOMContentLoaded", function (){
    "use strict";
    /*---------------- menu/ menu oculto  ----------------*/ 
    let navMenu= document.getElementById('nav-menu');
    let navToggle = document.getElementById('nav-toggle');
    let navClose = document.getElementById('nav-close');

    /*---------------- Show - menu  ----------------*/
/*Validamos si existe */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
} 
/*---------------- menu-hidden  ---------------- */
/*Validamos si existe */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*Eliminamos el menú*/
let navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    let navMenu = document.getElementById('nav-menu')
    /*Al seleccionar una opcion desaparece el menu */
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

})