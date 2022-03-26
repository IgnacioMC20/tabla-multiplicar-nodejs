const { base, listar, hasta } = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');

console.clear();


if(base > 10 ) {
    console.log('El numero base debe ser menor o igual a 10'.red);
}else if(base < 1 ){
    console.log('El numero debe ser mayor o igual a 1'.red);
}else{
    crearArchivo(base, listar, hasta)
            .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
            .catch( err => console.log(err));
}

// const [,, arg3 ] = process.argv

// const [, base] = arg3.split('=');

// console.log(base);