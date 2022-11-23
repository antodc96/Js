// let array = [1, 'Dos', true, [1, 2, 3]];

let numeros = [1, 5, 3, 4];

console.log(numeros[1]);
console.log(numeros.length);
// numeros[4] = 99;
numeros[numeros.length] = 99;
numeros[1] = 2;
// ---
// let numero = numeros.pop();
// let numero = numeros.shift();

// numeros.push(150);
numeros.unshift(-1);