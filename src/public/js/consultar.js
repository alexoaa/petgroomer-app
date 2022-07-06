'use strict'

const btnConsultarCitas = document.getElementById('btnConsultarCitas');

btnConsultarCitas.addEventListener('click',()=>{
    axios.get('/consulta-cita', ()=>{

    })
    .then((response)=>{
        response.data;
    });
});