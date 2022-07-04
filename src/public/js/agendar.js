'use strict';

const btnAgendar = document.getElementById('btnAgendar');
const nombreCliente = document.getElementById('nombreCliente');
const nombreMascota = document.getElementById('nombreMascota');
const razaMascota = document.getElementById('razaMascota');
const tamanoMascota = document.getElementById('tamanoMascota');
const numeroTelefono = document.getElementById('numeroTelefono');
const segundoNumTel = document.getElementById('segundoNumTel');
const inputBanoCorte = document.getElementById('inputBanoCorte');
const inputBano = document.getElementById('inputBano');
const fechaCita = document.getElementById('fechaCita');
const horaCita = document.getElementById('horaCita');
const precioServicio = document.getElementById('precioServicio');


//Btn de agendar cita
/* btnAgendar.addEventListener('click', (e) => {
    e.preventDefault();

    if (nombreCliente.value === '' || nombreMascota.value === '' || razaMascota.value === '' || tamanoMascota.value === '' || numeroTelefono.value === '' || segundoNumTel.value === '' || (inputBanoCorte.checked === false && inputBano.checked === false) || fechaCita.value === '' || horaCita.value === '' || precioServicio.value === '') {
        return console.log('Empty input, please fill all of them');
    }

    let servicio;
    if (inputBano.checked === true && inputBanoCorte.checked === false) servicio = inputBano.value;
    else if (inputBano.checked === false && inputBanoCorte.checked === true) servicio = inputBanoCorte.value;

    axios.post('/nueva-cita', {
        nombreCliente: nombreCliente.value,
        nombreMascota: nombreMascota.value,
        razaMascota: razaMascota.value,
        tamanoMascota: tamanoMascota.value,
        numeroTelefono: numeroTelefono.value,
        segundoNumTel: segundoNumTel.value,
        servicio: servicio,
        fechaCita: fechaCita.value,
        horaCita: horaCita.value,
        precioServicio: precioServicio.value
    })
        .then((response) => {
            if (response.status === 200) {
                
                console.log(response.data.nombreMascota);

            }

        })
        .catch((err) => {
            console.log(err);
        });

}); */

inputBanoCorte.addEventListener('click', () => {
    if (inputBanoCorte.checked === true) {
        document.getElementById('liBano').style.outline = 'none';
        document.getElementById('liBanoCorte').style.outline = '2px solid #404040';
    }
});
inputBano.addEventListener('click', () => {
    if (inputBano.checked === true) {
        document.getElementById('liBanoCorte').style.outline = 'none';
        document.getElementById('liBano').style.outline = '2px solid #404040';
    }
});