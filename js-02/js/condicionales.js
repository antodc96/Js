// let edad = 13;

// const mensaje = document.querySelector('#mensaje');

// if (edad === 13) {
//     console.log('Se puede registrar'); 
//     mensaje.textContent = 'Se puede registrar';
// } else {
//     console.log('No se puede registrar'); 
//     mensaje.textContent = 'No se puede registrar';
// }

// let admin = true;

// const btnAdmin = document.querySelector('.btn-admin');

// if (admin == true) {
//     btnAdmin.classList.remove('d-none');
// } else {
//     btnAdmin.classList.add('d-none');
// }


const respuesta = confirm('¿Esta seguro?');

if (respuesta) {
    console.log('Compra confirmada');
} else  {
    console.log('Compra cancelada');
}