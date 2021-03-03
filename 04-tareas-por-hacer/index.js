require("colors");

const { showMenu, pause } = require("./helpers/messages");
const { inquirerMenu, inquirerPause, inquirerInputTask, 
        getTaskIdToDelete, confirmDelete, getTaskList } = require("./helpers/inquirer");
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
        tasks.tasksList()
        break;
      case 3:
        tasks.tasksList(true)
        break;
      case 4:
        tasks.tasksList(false)
        break;
      case 5:
        if(tasks.arrayList.length <= 0){
          await inquirerPause(`No se han agregado tareas`.red);
          break;
        }
        
        const ids = await getTaskList(tasks.arrayList);
        tasks.completedTasks(ids);
       
        break;
      case 6:
        if(tasks.arrayList.length <= 0){
          await inquirerPause(`No se han agregado tareas`.red);
          break;
        }
        const id = await getTaskIdToDelete(tasks.arrayList);
        let ok = false;
        if(id != 0)
           ok = await confirmDelete("¿Esta seguro de que desea eliminar la tarea?");
        
        if(ok){
          console.log("Tarea eliminada".green)
          tasks.deleteTask(id)
        }

        break;
    }

    saveFile(tasks.arrayList)
    if (opt !== 0) await inquirerPause(`Presione ${'ENTER'.blue} para continuar`);
  } while (opt !== 0);  
};

main();
