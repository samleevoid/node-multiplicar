// requires. Hi ha paguets natius com aquests o paquets q s'instalen
const fs = require('fs');
var colors = require('colors');

let llistarTaula = (base, limit = 10) => {

    console.log('====================='.red);
    console.log(`==== >> Taula del ${base}`.blue);
    console.log('====================='.green);

    for (i = 1; i <= limit; i++) {
        console.log(`${ base } x ${ i } = ${ base * i }`);
    }

}

// transformem en promesa (enlloc de let també podriam posar module.exports)
let crearArchivo = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('La base ha de ser numèrica');
            return;
        }
        let data = '';
        for (let i = 1; i <= limit; i++) {
            // console.log(base + ' * ' + i + ' = ' + base * i);
            data += `${base} * ${i} = ${base*i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tablas/tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    llistarTaula
}

// let data = '';
// for (let i = 1; i <= 10; i++) {
//     // console.log(base + ' * ' + i + ' = ' + base * i);
//     data += `${base} * ${i} = ${base*i}\n`;
// }
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log('El fitxer ha estat creat!');
// });