const fs = require('fs');
const lista = JSON.parse(fs.readFileSync('task.json', 'utf8'));

console.log(lista);

// npm install prompt-sync to synchronize the console input
const prompt = require('prompt-sync')();

function agregar(objeto) {
    let tarea_in = prompt('Introduzca los datos de la nueva tarea, introduzca la tarea: ');
    console.log('Ud entró:', tarea_in);
    let descripcion_in = prompt('Introduzca la descripción: ');
    console.log('Ud entró:', descripcion_in);

    // Create a new task object
    const newTask = {
        id: objeto.length + 1,
        tarea: tarea_in,
        descripcion: descripcion_in,
    };

    // Push the new task to the array
    objeto.push(newTask);

    // Write the updated list to the task.json file with indentation and line breaks
    fs.writeFileSync('task.json', JSON.stringify(objeto, null, 2), 'utf8');

    return objeto;
}

function editar(objeto) {
    console.log(objeto);
    let userInput = prompt('Introduzca el nombre de la tarea: ');
    console.log('Ud entró:', userInput);

    if (typeof userInput === 'string') {
        console.log('La entrada es un string.');

        for (let i = 0; i < objeto.length; i++) {
            if (objeto[i].tarea === userInput) {
                let tarea_in = prompt('Introduzca los datos de la tarea, introduzca la tarea: ');
                console.log('Ud entró:', tarea_in);
                let descripcion_in = prompt('Introduzca los descripcion: ');
                console.log('Ud entró:', descripcion_in);

                // Update the task properties
                objeto[i].tarea = tarea_in;
                objeto[i].descripcion = descripcion_in;

                // Write the updated list to the task.json file with indentation and line breaks
                fs.writeFileSync('task.json', JSON.stringify(objeto, null, 2), 'utf8');

                return objeto;
            } else {
                console.log('...');
            }
        }
    } else {
        console.log('La entrada es errónea, ejecute de nuevo e inserte el string adecuado: ', userInput);
    }
    return objeto;
}

function eliminar(objeto) {
    console.log(objeto);
    let userInput = prompt('Introduzca la tarea: ');
    console.log('Ud entró:', userInput);

    if (typeof userInput === 'string') {
        console.log('La entrada es un string.');

        for (let i = 0; i < objeto.length; i++) {
            if (objeto[i].tarea === userInput) {
                objeto.splice(i, 1);
                console.log('La nueva lista es ');

                // Write the updated list to the task.json file with indentation and line breaks
                fs.writeFileSync('task.json', JSON.stringify(objeto, null, 2), 'utf8');

                return objeto;
            }
        }
    } else {
        console.log('La entrada es errónea, ejecute de nuevo e inserte el string adecuado: ', userInput);
    }
    return objeto;
}

// User input for options
let opcion = prompt('Introduzca el número de la opción que desea y presione ENTER: 1. Agregar tarea 2. Eliminar tarea 3. Editar tarea 4. Imprimir lista ');

if (opcion == 1) {
    console.log('Ud ha elegido insertar una nueva tarea: ');
    let nuevaLista = agregar(lista);
    console.log('//////////////////////////////La nueva lista es: ////////////////////////////////////////');
    console.log(nuevaLista);
} else if (opcion == 2) {
    console.log('Ud ha elegido la opción de eliminar una tarea');
    let nuevaLista = eliminar(lista);
    console.log(nuevaLista);
} else if (opcion == 3) {
    console.log('Ud ha elegido editar una tarea');
    let nuevaLista = editar(lista);
    console.log(nuevaLista);
} else if (opcion == 4) {
    console.log('Imprimir lista');
    console.log(lista);
} else {
    console.log('Opción incorrecta');
}
