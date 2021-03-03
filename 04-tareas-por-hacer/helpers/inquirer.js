require("colors");
const inquirer = require("inquirer");
const { async } = require("rxjs");
const { validate } = require("uuid");

const questions = [
  {
    type: "list",
    name: "value",
    message: "¿Qué desea hacer?",
    choices: [
      {
        value: 1,
        name: `${"1.".green} Crear tareas`,
      },
      {
        value: 2,
        name: `${"2.".green} Listar tareas`,
      },
      {
        value: 3,
        name: `${"3.".green} Listar tareas completas`,
      },
      {
        value: 4,
        name: `${"4.".green} Listar tareas pendientes`,
      },
      {
        value: 5,
        name: `${"5.".green} Completar tarea(s)`,
      },
      {
        value: 6,
        name: `${"6.".green} Borrar tarea`,
      },
      {
        value: 0,
        name: `${"0.".green} Salir`,
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

const inquirerPause = async (message = "") => {
  const inputPause = [
    {
      type: "input",
      name: "val",
      message,
    },
  ];

  await inquirer.prompt(inputPause);
};

const inquirerInputTask = async (message = "") => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor debe de ingresar una tarea";
        }
        return true;
      },
    },
  ];

  let { desc } = await inquirer.prompt(question);
  return desc;
};

const getTaskIdToDelete = async (taskList = []) => {
  const choices = taskList.map((task, idx) => {
    const { id: value, desc: name } = task;
    return {value, name: `${(idx + 1).toString().red} ${name}` }
  });

  choices.unshift({
    value: 0,
    name: "Cancelar"
  })

  const question = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices,
      validate(id) {
        if (id.length === 0) {
          return "Debe de seleccionar un tarea a eliminar";
        }
        return true;
      },
    },
  ];

  let { id } = await inquirer.prompt(question);
  return id;
};

const confirmDelete = async(message) => {

  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    }
  ];

  let { ok } = await inquirer.prompt(question);
  return ok;
}

const getTaskList = async (taskList = []) => {

  const choices = taskList.map((task, idx) => {
    const { id: value, desc: name, completed } = task;
    return {value, name: `${(idx + 1).toString().blue} ${name}`, checked: completed ? true : false }
  });

  let question = [
    {
      type: "checkbox",
      name: "ids",
      message: "Seleccione",
      choices,
      validate(id) {
        if (id.length === 0) {
          return "Debe de seleccionar un tarea";
        }
        return true;
      },
    }
  ]

  let { ids } = await inquirer.prompt(question)
  return ids;
}
module.exports = {
  inquirerMenu,
  inquirerPause,
  inquirerInputTask,
  getTaskIdToDelete,
  confirmDelete,
  getTaskList
};
