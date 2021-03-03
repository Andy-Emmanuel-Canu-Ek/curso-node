const Task = require("./task");

class Tasks{
    _tasksList = {}

    constructor(){
        this._tasksList = {}
    }

    get arrayList(){
        const arrarList = [];
        Object.keys(this._tasksList).forEach(key => {
            const task = this._tasksList[key];
            arrarList.push(task);
        })
        return arrarList;
    }

    initializeDBData(tasks = []){
        for(let task of tasks){
            this._tasksList[task.id] = task
        }
    }

    createTask(desc = ''){
        const tarea = new Task(desc);
        this._tasksList[tarea.id] = tarea;
    }

    tasksList(completed){
        console.log('');
        this.arrayList.forEach((task, idx) => {
           
            let task_completed = task.completed ? true : false;
            if(completed != null && completed != task_completed){
                return 
            }

            const idx_tag = ((idx + 1).toString() + ".").green
            const desc_tag = task.desc
            const completed_tag = task.completed ? ("Completado => ".green +task.completed.toString().blue) : "Pendiente".red
            
            console.log(`${idx_tag} ${desc_tag} :: ${completed_tag}`);
           
        });
    }

    deleteTask(id = ''){
        if(this._tasksList[id]){
            delete this._tasksList[id]
        }
    }
    
    completedTasks(ids = []){
        if(ids.length > 0 ){
            ids.forEach((task_id) => {
              const day_completed = new Date();
              this._tasksList[task_id].completed = day_completed.toISOString(); //`${day_completed.getDate()}/${day_completed.getMonth()}/${day_completed.getFullYear()}`; 
            });
        }

        this.arrayList.forEach((task) => {
            if(!ids.includes(task.id)){
                this._tasksList[task.id].completed = null;
            }
        })
    }
}


module.exports = Tasks