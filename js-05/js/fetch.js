fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json() )
    .then( usuarios => {
        usuarios.forEach(usuario => {
            document.write('<p>' + usuario.name + '</p>');
            console.log(usuario.name);
        });
    } )
    .catch( error => console.log(error) )