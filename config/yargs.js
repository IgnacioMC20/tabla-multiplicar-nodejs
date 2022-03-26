
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
// const argv = yargs(hideBin(process.argv)).argv
// ? desestructuramos el parametro
const { base, listar, hasta } = yargs(hideBin(process.argv)).option('b', {
    alias: 'base',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
    type: 'number'
}).option('l', {
    alias: 'listar',
    demandOption: false,
    describe: 'Muestra la tabla en consola',
    type: 'boolean'
}).option('h', {
  alias: 'hasta',
  demandOption: true,
  describe: 'Contador de la tabla (hasta)',
  type: 'number'
}).check((argv, options) => {
    const {base, hasta} = argv
    if (isNaN(base)) {
      throw new Error("El argumento base debe ser un numero");
    } else if(isNaN(hasta)) {
      throw new Error("El argumento hasta debe ser un numero");
    }else{
      return true 
    }
  }).argv

  module.exports = {
      base, listar, hasta
  }