const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearArchivo, llistarTaula } = require('./multiplicar/multiplicar'); //destructuración

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear en base: ', argv.base);
        crearArchivo(argv.base, argv.limit)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    case 'listar':
        console.log('Llistar taula base: ', argv.base);
        llistarTaula(argv.base, argv.limit);
        break;

}

console.log(argv);
// module -> objecte global
// console.log(module);
// let base = '4';
// console.log(process.argv[2]);

// let argv2 = process.argv;
// let parametre = argv[2];

//split és per a separar elements
// base = parametre.split('=')[1];