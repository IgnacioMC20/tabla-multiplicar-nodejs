const colors = require('colors');
const fs = require('fs');

const crearArchivo = async(base = 5, listar = false, hasta) => {

    try {
        console.log('=========');
        console.log(`Tabla del ${base}`);
        let salida = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ i * base }\n`;
        }
        if(listar){
            console.log(salida.rainbow);
        }
        
        fs.writeFileSync(`salida/tabla-${base}.txt`, salida);
        console.log(`tabla-${base}.txt creado`);
        return `tabla-${base}.txt`
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
};