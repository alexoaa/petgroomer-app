'use strict';

window.onload = ()=>{

    const btnNav = document.getElementById('btnNav');
    const navMenu = document.querySelector('.nav-menu');

    btnNav.addEventListener('click', ()=>{
        navMenu.classList.toggle('toggleDisplay');
        navMenu.classList.toggle('nav-menu-active');
    });

};
