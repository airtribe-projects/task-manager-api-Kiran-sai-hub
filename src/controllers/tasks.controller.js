import TaskModel from "../models/tasks.model.js";


function isBoolean(input) {
    return typeof input === 'boolean';
};


const getTasks = (req,res)=>{
    let tasks = TaskModel.get();
    res.status(200).json({
        success: true,
        message:"Fetched all tasks successfully",
        tasks: tasks,
    });
};

const getById = (req,res)=>{
    const id = req.params.id;

    let task = TaskModel.getById(id);
    // console.log(task);
    if(!task){
        return res.status(404).json({
            success: true,
            message: "Task with ID not found",
        })
    }
    res.status(200).json({
        success: true,
        message: "Task with ID fetched successfully",
        task: task,
    });
}

const add = (req,res)=>{
    const{title,description} = req.body;

    if(title.trim() == '' || description.trim() == ''){
        return res.status(400).json({
            success:false,
            message: "Send Valid data",
        });
    }

    const newTask = TaskModel.add(title, description);

    res.status(201).json({
        success:true,
        message: "new task created successfully",
        task: newTask,
    });

};

const update = (req,res)=>{
    const id = req.params.id;

    const{title, description, completed} = req.body;

    if(title.trim() == '' || description.trim() == '' || !isBoolean(completed)){
        return res.status(400).json({
            success: false,
            message: "Invalid states of Input sent",
        });
    }

    const task = TaskModel.update(id, title, description, completed);

    res.status(201).json({
        success: true,
        message: "Task with ID updated",
        task: task,
    });
};

const deleteTask = (req,res)=>{
    const id = req.params.id;

    const task = TaskModel.delete(id);
    if(!task){
        return res.sttus(404).json({
            success: true,
            mesage:"No task found",
        });
    }
    res.status(200).json({
        success: true,
        message:"Task deleted",
        task: task,
    })

};

export {getTasks, getById, add, update, deleteTask};