require("colors");
const inquirer = require("inquirer");
const { async } = require("rxjs");

const questions = [
  {
    type: "list",
    name: "value",
    message: "¿Qué desea hacer?",
    choices: [
      {
        value: 1,
        name: "1. Crear tareas",
      },
      {
        value: 2,
        name: "2. Listar tareas",
      },
      {
        value: 3,
        name: "3. Listar tareas completas",
      },
      {
        value: 4,
        name: "4. Listar tareas pendientes",
      },
      {
        value: 5,
        name: "5. Completar tarea(s)",
      },
      {
        value: 6,
        name: "6. Borrar tarea",
      },
      {
        value: 0,
        name: "0. Salir",
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("===========================".green);
  console.log("Seleccione una opción".green);
  console.log("===========================".green);

  const { value } = await inquirer.prompt(questions);
  return value;
};

const inputPause = [{
    type: 'input',
    name: 'val',
    message: `Presione ${'ENTER'.blue} para continuar`
}];

const inquirerPause = async() => {
    console.log('\n');
    await inquirer.prompt(inputPause);
}

module.exports = {
  inquirerMenu,
  inquirerPause
};
