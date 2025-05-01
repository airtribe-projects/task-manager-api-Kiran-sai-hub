export default class TaskModel{

    constructor(id, title, description, completed){
        this.id = id;
        this.title = title,
        this.description = description,
        this.completed = completed
    }
    
    static get(){
        return tasks;
    }

    static getById(id){
        return tasks.find((task)=> task.id == id);
    }

    static add(title, description){
        const newTask = new TaskModel(
            tasks.length + 1,
            title,
            description,
            false
        )

        tasks.push(newTask);
        return newTask;
    }

    static update(id, title, description, completed){
        const index = tasks.findIndex((task)=> task.id == id);

        let newTask = new TaskModel(
            id,
            title,
            description,
            completed
        );

        tasks[index] = newTask;
        return newTask;
    }

    static delete(id){
        const index = tasks.findIndex((task)=> task.id == id);
        const task = tasks.splice(index,1);
        return task;
    }

}

/** Dummy Data will not update!!! */
/** Will return to original state after the server restarts! */
let tasks = [
    new TaskModel(
        1,
        "Learn node.js",
        "Finish Node.js by afternoon",
        false,
    ),
    new TaskModel(
        2,
        "Finish Java",
        "Learn OOP in java",
        false,
    ),
];