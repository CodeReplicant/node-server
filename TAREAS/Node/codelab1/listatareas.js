
//Ajusta las funciones de crear y eliminar un contacto para 
//que puedan almacenar la siguiente información como objetos: id
//tarea                 
//descripcion           s
//teléfono
//ubicaciones
//    ciudad
//    dirección
//Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-2 y compártelo con nosotros. 👍🏼⬇️



const lista =[{
    tarea : 'Terminar front',
    descripcion : 'Terminar Labs Hooks 2 y forms',
         
}
,{
    tarea : "Acabar curso de conduccion",
    descripcion : 'Asistir y pasar clases en menos de dos meses, recibir licencia ',
               

},{
    tarea : "Renovar pasaporte",
    descripcion : 'Agendar cita, averiguar requisitos clave. ',
                     
},{
    tarea : "Terminar modulo de comunucaciones ",
    descripcion : 'Rendir laboralmente en elmmodulo de comunicaciones',
                           
}






]


console.log(lista);
//                                                                                          console.log(lista[1]);

//nmp install prompt-sync para  sincronizar consola cmd
const prompt = require('prompt-sync')();



function agregar(objeto){
    let tarea_in = prompt('Introdusca los datos de la nueva tarea, introduzca la tarea: ');
    console.log('Ud entro:', tarea_in);
    let descripcion_in = prompt('Introduzca los descripcion: ');
    console.log('Ud entro:', descripcion_in);
    
    const newtask = new Object()
    newtask.tarea = tarea_in,
    newtask.descripcion = descripcion_in,
    

    objeto.push(newtask);

    return objeto;
}













function editar (objeto){
    console.log(objeto);
    let userInput = prompt('Introdusca el nombre de la tarea : ');
    console.log('Ud entro:', userInput);


    if (typeof userInput === 'string') {
        console.log('La entrada es un string.');

        for (let i_1=0;i_1<objeto.length;i_1++){

            if(objeto[i_1].tarea ==userInput){


                
                let tarea_in = prompt('Introdusca los datos del contacto, introduzca la tarea:');
                console.log('Ud entro:', tarea_in);
                let descripcion_in = prompt('Introduzca los descripcion: ');
                console.log('Ud entro:', descripcion_in);
               
                objeto[i_1].tarea=tarea_in;
                objeto[i_1].descripcion=descripcion_in;
                


            return objeto;
            }else{ console.log('...');}

        }

    }else {
    console.log('La entrada es erronea, ejecute denuevo e inserte el string adecuado!!!:', userInput);
    }
    return objeto;
} 









function eliminar (objeto){
    console.log(objeto);
    let userInput = prompt('Introdusca la tarea : ');
    console.log('Ud entro:', userInput);


    if (typeof userInput === 'string') {
        console.log('La entrada es un string.');

        for (let i_0=0;i_0<objeto.length;i_0++){//localisa el valor de la propiedad tarea                  en toda la lista

            if(objeto[i_0].tarea==userInput){
            objeto.splice(i_0, 1);
            console.log('La nueva lista es ');
            return objeto;
            }else{}

        }

    }else {
    console.log('La entrada es erronea, ejecute denuevo e inserte el string adecuado!!!:', userInput);
    }
    return objeto;
} 
    

//entrada de opciones del usuario///////////////////////////////


let opcion = prompt ('inserte el numero de la opcion que quiere y ENTER:   1. Anadir contacto    2. Eliminar contacto   3. Editar contacto  4. Imprimir contactos  ')



if(opcion==1){

    console.log('Ud ha elegido insertar un nuevo contacto: ');
    let nuevalista = agregar (lista);
    console.log('//////////////////////////////La nueva lista es: ////////////////////////////////////////');
    console.log(nuevalista);

}else if (opcion==2){
    console.log('Ud ha elegido la opcion de eliminar un contacto');
    let nuevalista= eliminar(lista);
    console.log(nuevalista)
}else if (opcion==3){
    console.log('Ud ha elegido editar un contacto contacto');
    let nuevalista = editar(lista);
    console.log(nuevalista);
}
else if (opcion==4){
    console.log('Imprimir contacto');
    console.log(lista);
}else{
    console.log('Opcion incorrecta')
}

