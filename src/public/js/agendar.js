'use strict';

    const btnAgendar = document.getElementById('btnAgendar');
    const nombreCliente = document.getElementById('nombreCliente');
    const nombreMascota = document.getElementById('nombreMascota');
    const tamanoMascota = document.getElementById('tamanoMascota');
    const emailCliente = document.getElementById('emailCliente');
    const numeroTelefono = document.getElementById('numeroTelefono');


    //Btn de agendar cita
    btnAgendar.addEventListener('click', (e)=>{
        e.preventDefault();

        if (nombreCliente.value === '' || nombreMascota.value === '' || tamanoMascota.value === '' || emailCliente.value === '' || numeroTelefono.value === '') {
            return console.log('Empty input, please fill all of them');
        }
        
        axios.post('/nueva-cita', {
            nombreCliente : nombreCliente.value,
            nombreMascota : nombreMascota.value,
            tamanoMascota : tamanoMascota.value,
            emailCliente : emailCliente.value,
            numeroTelefono : numeroTelefono.value,
            segundoTelefono : 'N/A'
        })
        .then((response)=>{
            if (response.status === 200) {
                window.location.href= '/confirmacion-cita';
            }
        })
        .catch((err)=>{
            console.log(err);
        });

    });
