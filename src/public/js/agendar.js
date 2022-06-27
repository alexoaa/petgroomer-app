'use strict';

window.onload = ()=>{

    const btnCerrarConf = document.getElementById('btnCerrarConf');
    const confCitaModal = document.querySelector('.confirmacion-cita-modal');
    const btnAgendar = document.getElementById('btnAgendar');

    btnCerrarConf.addEventListener('click', ()=>{
        confCitaModal.classList.toggle('toggleDisplay');
        window.location.href='/agendar-una-cita';
    });
    
    btnAgendar.addEventListener('click', (e)=>{
        e.preventDefault();
        confCitaModal.classList.toggle('toggleDisplay');
    });













};
