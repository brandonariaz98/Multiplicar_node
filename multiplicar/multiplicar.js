//required
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('==================='.green);
    console.log(`======Tabla de ${ base }`.green);
    console.log('==================='.green);
    

    for(x=0; x<=limite; x++){
        console.log(`${ base } * ${ x } = ${ base * x }`);            
    }
}

crearArchivo = ( base, limite = 10 ) => {
    return new Promise( (resolve, reject) => {

        if( !Number(base) ){
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data= '';

        for(x=0; x<=limite; x++){
            data += (`${ base } * ${ x } = ${ base * x }\n`);            
        }
        
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${ base }.txt`);
           // console.log('El Archivo ha sido creado');
        });  
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
