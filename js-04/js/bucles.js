const pokemons = [
    {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
        "name": "ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
        "name": "venusaur",
        "url": "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
        "name": "charmander",
        "url": "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
        "name": "charmeleon",
        "url": "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
        "name": "charizard",
        "url": "https://pokeapi.co/api/v2/pokemon/6/"
    },
    {
        "name": "squirtle",
        "url": "https://pokeapi.co/api/v2/pokemon/7/"
    },
    {
        "name": "wartortle",
        "url": "https://pokeapi.co/api/v2/pokemon/8/"
    },
    {
        "name": "blastoise",
        "url": "https://pokeapi.co/api/v2/pokemon/9/"
    },
    {
        "name": "caterpie",
        "url": "https://pokeapi.co/api/v2/pokemon/10/"
    },
    {
        "name": "metapod",
        "url": "https://pokeapi.co/api/v2/pokemon/11/"
    },
    {
        "name": "butterfree",
        "url": "https://pokeapi.co/api/v2/pokemon/12/"
    },
    {
        "name": "weedle",
        "url": "https://pokeapi.co/api/v2/pokemon/13/"
    },
    {
        "name": "kakuna",
        "url": "https://pokeapi.co/api/v2/pokemon/14/"
    },
    {
        "name": "beedrill",
        "url": "https://pokeapi.co/api/v2/pokemon/15/"
    },
    {
        "name": "pidgey",
        "url": "https://pokeapi.co/api/v2/pokemon/16/"
    },
    {
        "name": "pidgeotto",
        "url": "https://pokeapi.co/api/v2/pokemon/17/"
    },
    {
        "name": "pidgeot",
        "url": "https://pokeapi.co/api/v2/pokemon/18/"
    },
    {
        "name": "rattata",
        "url": "https://pokeapi.co/api/v2/pokemon/19/"
    },
    {
        "name": "raticate",
        "url": "https://pokeapi.co/api/v2/pokemon/20/"
    }
]

// for (let i = 0; i < pokemons.length; i++) { // i = 0
//     // console.log(pokemons[i].name);
//     document.writeln('<a href="' + pokemons[i].url + '">' + pokemons[i].name + '</a><br>')
// }

// pokemons.forEach(function(pokemon) {
//     console.log(pokemon.name);
// });

// pokemons.forEach( pokemon => console.log(pokemon.name) );

// --- find

// let numeros = [33, 1, 1, 5, 3, 5, 4];

// let numero = numeros.find( function(num, index) {
//     if (num == 5) {
//         console.log(index)
//         return true;
//     }
//     return false;
// } )

// let numero = numeros.find( num => num == 5 )
// console.log(numero);

// let pokemon = pokemons.find( poke => poke.name == 'metapod' )
// console.log(pokemon);

//--- filter

// let numeros = [1, 5, 3, 2, 4];

// // let numerosFiltrados = numeros.filter(function(num) {
// //     if (num <= 2) {
// //         return true;
// //     } 
// //     return false;
// // }); 

// let numerosFiltrados = numeros.filter( num => num <= 2 );

// console.log(numerosFiltrados);

// --- map

// let numeros = [1, 2, 3, 4, 5];

// let numerosMapeados = numeros.map( function(num) {
//     return num * 3;
// })

// console.log(numerosMapeados);
let links = pokemons.map( function(poke) {
    return `<a href="${poke.url}">${poke.name}</a>`;
    // '<a href="' + pokemons[i].url + '">' + pokemons[i].name + '</a>'
} )

console.log(links);

// --- sort

// let numeros = [33, 1, 1, 5, 3, 4];
// console.log(numeros);
// // numeros.sort((a, b) => {
// //     if (a < b) {
// //         return -1
// //     }
// //     if (a > b) {
// //         return 1
// //     }
// //     return 0;
// // });
// numeros.sort((a, b) => a - b);
// console.log(numeros);