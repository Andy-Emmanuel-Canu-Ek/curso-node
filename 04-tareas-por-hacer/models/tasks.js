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


}


module.exports = Tasks