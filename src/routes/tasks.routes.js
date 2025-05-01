import express from 'express';
import { add, deleteTask, getById, getTasks, update } from '../controllers/tasks.controller.js';

const taskRouter = express.Router();


taskRouter.get('/', (req,res)=>{
    getTasks(req,res);
});

taskRouter.get('/:id', (req,res)=>{
    getById(req,res);
});

taskRouter.post('/', (req,res)=>{
    add(req,res);
});

taskRouter.put('/:id', (req,res)=>{
    update(req,res);
});

taskRouter.delete('/:id', (req,res)=>{
    deleteTask(req,res);
});

export default taskRouter;