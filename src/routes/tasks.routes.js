import express from 'express';
import { add, getById, getTasks, update } from '../controllers/tasks.controller.js';

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
})

export default taskRouter;