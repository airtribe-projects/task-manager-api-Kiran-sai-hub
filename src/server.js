import express from 'express';
import Router from './routes/tasks.routes.js';

const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Hello world using express");
});

app.use("/tasks", Router);

app.listen(4000, ()=>{
    console.log("App is listening");
})

