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
        name: `${'1.'.green} Crear tareas`,
      },
      {
        value: 2,
        name: `${'2.'.green} Listar tareas`,
      },
      {
        value: 3,
        name: `${'3.'.green} Listar tareas completas`,
      },
      {
        value: 4,
        name: `${'4.'.green} Listar tareas pendientes`,
      },
      {
        value: 5,
        name: `${'5.'.green} Completar tarea(s)`,
      },
      {
        value: 6,
        name: `${'6.'.green} Borrar tarea`,
      },
      {
        value: 0,
        name: `${'0.'.green} Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("===========================".green);
  console.log("Seleccione una opción".white);
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

const inquirerInputTask = async (message = '') => {

  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value){
        if(value.length === 0){
          return 'Por favor debe de ingresar una tarea'
        }
        return true;
      }
    }
  ];

  let desc = await inquirer.prompt(question);
  return desc;
}
module.exports = {
  inquirerMenu,
  inquirerPause,
  inquirerInputTask
};
