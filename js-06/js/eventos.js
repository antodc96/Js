// preventDefault

// function miFunction() {
//     alert('Gracias');
// }

let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let error = false;

    let nombre = document.querySelector('#nombre');

    if (nombre.value == '') {
        let errorNombre = document.querySelector('#error-nombre');
        errorNombre.textContent = 'El nombre es obligatorio';
        error = true;
    }

    if (error == false) {
        form.submit();
    }
})


// let enlace = document.querySelector('a');

// enlace.addEventListener('click', (event) => {
//     event.preventDefault();

//     console.log('Click');
// })

// Eventos

// const saludar = () => console.log('Hola');

// let btn = document.querySelector('.btn-ejemplo');
// btn.onclick = saludar
// btn.addEventListener('click', saludar);
// btn.addEventListener('contextmenu', saludar);
// btn.addEventListener('mouseover', saludar);

// let btn = document.querySelector('.btn-ejemplo');
// btn.addEventListener('click', () => console.log('Hola'));

// document.querySelector('.btn-ejemplo').addEventListener('click', () => console.log('Hola'));