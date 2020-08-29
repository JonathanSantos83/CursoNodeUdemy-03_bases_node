const opts = {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multipilcar', opts)
    .command('crear', 'Genera un archivo con la tabla de multipilcar', opts)
    .help()
    .argv;

module.exports = {
    argv
}    