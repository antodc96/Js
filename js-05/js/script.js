// let persona = new Object();

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    dni: 98765432,
    admin: true,
    numeros: [1, 2, 3],
    // 'nombre completo': 'Juan Perez',
    direccion: {
        calle: 'Falsa',
        numero: 123
    },
    nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    }
};

// usuario.nombreCompleto = function() {
//     return this.nombre + ' ' + this.apellido;
// }

console.log(persona.nombreCompleto());

// for (propiedad in persona) {
//     if (propiedad == 'nombre') {
//         console.log(propiedad, persona[propiedad]);
//     }

//     if (typeof persona[propiedad] == 'object' && propiedad == 'direccion') {
//         console.log(propiedad, persona[propiedad]);
//         console.log(persona[propiedad].calle, persona[propiedad].numero)
//     }
// }

// console.log(persona.hasOwnProperty('nombre'));
// console.log('nombre' in persona);

// persona.nombre = 'Pedro';

// console.log(persona.nombre);
// console.log(persona['nombre completo']);
// console.log(persona['apellido']);