require("colors");

const showMenu = () => {
  return new Promise((resolve) => {
    console.clear();

    console.log("===========================".green);
    console.log("Seleccione una opcion".green);
    console.log("===========================".green);

    console.log(`${"1.".green} Crear tareas`);
    console.log(`${"2.".green} Listar tareas`);
    console.log(`${"3.".green} Listar tareas completadas`);
    console.log(`${"4.".green} Listar tareas pendientes`);
    console.log(`${"5.".green} Completar tareas`);
    console.log(`${"6.".green} Borrar tarea`);
    console.log(`${"0.".green} Salir`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question("Seleccione una opción: ", (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};

const pause = () => {
  return new Promise((resolve) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question(`Presione ${"ENTER".blue} para continuar`, (opt) => {
      readLine.close();
      resolve();
    });
  });
};

module.exports = {
  showMenu,
  pause,
};
