require("colors");

const { showMenu, pause } = require("./helpers/messages");
const { inquirerMenu, inquirerPause, inquirerInputTask } = require("./helpers/inquirer");
const Tasks = require("./models/tasks");
const Task = require("./models/task");
const { saveFile, readFile } = require("./helpers/save_file");

const main = async () => {
  let opt = "";
  const tasks = new Tasks();
  const data  = await readFile();

  if(data){
    tasks.initializeDBData(data)
  }

  do {

    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        const desc = await inquirerInputTask("¿Qué tarea desea agregar?");
        tasks.createTask(desc)
        break;
      case 2:
        console.log(tasks.arrayList)
        break;
    }

    saveFile(tasks.arrayList)
    if (opt !== 0) await inquirerPause();
  } while (opt !== 0);
};

main();
