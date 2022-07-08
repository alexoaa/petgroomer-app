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
const btnAgregarTel = document.getElementById('btnAgregarTel');
const btnAgregarMascota = document.getElementById('btnAgregarMascota');
const divSegundoNumTel = document.getElementById('divSegundoNumTel');
const mascotas = document.querySelector('.mascotas');
const documentFragment = document.createDocumentFragment();

let ids = 1;

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


btnAgregarTel.addEventListener('click', () => {
    divSegundoNumTel.classList.toggle('toggle-seg-num');
    btnAgregarTel.classList.toggle('btn-quitar-seg-num');
    btnAgregarTel.firstElementChild.classList.toggle('fa-plus');
    btnAgregarTel.firstElementChild.classList.toggle('fa-xmark');
    segundoNumTel.value = '';
});

btnAgregarMascota.addEventListener('click', () => {
    const divParaBtnMascotas = document.createElement('div');
    const divDatosMascota = document.createElement('div');
    const divInputBox = document.createElement('div');
    const divInputBox2 = document.createElement('div');
    const input = document.createElement('input');
    const input2 = document.createElement('input');
    const span = document.createElement('span');
    const span2 = document.createElement('span');
    const btnBorrarMascota = document.createElement('button');
    const iBtnBorrarMascotas = document.createElement('i');

    divParaBtnMascotas.classList.add('divParaBtnMascotas');
    btnBorrarMascota.classList.add('btnBorrarMascota');
    btnBorrarMascota.setAttribute('type','button');
    btnBorrarMascota.setAttribute('onclick','borrarMascota(this.id)');
    iBtnBorrarMascotas.classList.add('fa-solid');
    iBtnBorrarMascotas.classList.add('fa-trash-can');
    divDatosMascota.classList.add('datos-mascota');
    divInputBox.classList.add('inputBox');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'nombreMascota');
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('required', 'true');
    span.textContent = 'Nombre Mascota';

    divInputBox2.classList.add('inputBox');
    input2.setAttribute('type', 'text');
    input2.setAttribute('name', 'razaMascota');
    input2.setAttribute('autocomplete', 'off');
    input2.setAttribute('required', 'true');
    span2.textContent = 'Raza Mascota';

    //* Asigning Id to button and div datosMascota and id
    divParaBtnMascotas.id = `idDivParaBtnMascotas_${ids}`;
    divDatosMascota.id = `idDatosMascota_${ids}`;
    btnBorrarMascota.id = `idBtnBorrarMascota_${ids}`;
    input.id = `idNombreMascota_${ids}`;
    input2.id = `idRazaMascota_${ids++}`;

    divParaBtnMascotas.appendChild(divDatosMascota);

    divDatosMascota.appendChild(divInputBox);
    divInputBox.appendChild(input);
    divInputBox.appendChild(span);

    divDatosMascota.appendChild(divInputBox2);
    divInputBox2.appendChild(input2);
    divInputBox2.appendChild(span2);

    btnBorrarMascota.appendChild(iBtnBorrarMascotas);

    divParaBtnMascotas.appendChild(btnBorrarMascota);

    
    documentFragment.appendChild(divParaBtnMascotas);
    mascotas.appendChild(documentFragment);

    // const datosMascota = document.querySelectorAll('.datos-mascota');
    // console.log(datosMascota);
});

function borrarMascota(id) {
    if (mascotas.childNodes.length > 1 && !(id === undefined)) {
        const divToRemove = document.getElementById(`idDivParaBtnMascotas_${id.toLowerCase().split('_')[1]}`);
        mascotas.removeChild(divToRemove);
    }
    else return;
}

const selServicio = document.getElementById('selServicio');
const servOpcBano = document.getElementById('servOpcBano');
const servOpcBanoCorte = document.getElementById('servOpcBanoCorte');
const servOpcCorte = document.getElementById('servOpcCorte');
const servOpcCorteUnas = document.getElementById('servOpcCorteUnas');

const selServicioActive = ()=>{
    selServicio.children[1].classList.add('servSpanActive');
    document.getElementById('touch').checked = false;
}

servOpcBano.addEventListener('click', ()=>{
    selServicio.firstElementChild.textContent = servOpcBano.textContent;
    selServicioActive();
    
});
servOpcBanoCorte.addEventListener('click', ()=>{
    selServicio.firstElementChild.textContent = servOpcBanoCorte.textContent;
    selServicioActive();
});
servOpcCorte.addEventListener('click', ()=>{
    selServicio.firstElementChild.textContent = servOpcCorte.textContent;
    selServicioActive();
});
servOpcCorteUnas.addEventListener('click', ()=>{
    selServicio.firstElementChild.textContent = servOpcCorteUnas.textContent;
    selServicioActive();
});