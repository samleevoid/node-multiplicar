const opts = {
    base: {
        demand: true, //obligatori
        alias: 'b',
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprimeix taula de multiplicar', opts)
    .command('crear', 'Crea fitxer amb la taula de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}