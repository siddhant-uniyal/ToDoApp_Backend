
import { Task } from "../models/task_model.js";
import ErrorHandler from "../middlewares/error.js";


export const newTask = async (req , res)=>{
    const {title , description} = req.body;

    await Task.create({
        title,description,user:req.user
    })

    res.status(201).json({
        success : true,
        message : "task added successfully",
    })

} 
export const getMyTask = async (req , res)=>{
    
    

    const tasks = await Task.find({user : req.user._id});

    res.status(200).json({
        success : true,
        tasks,
    })

} 
export const updateTask = async (req , res , next)=>{
    
   
    const task = await Task.findById(req.params.taskid);

    if(!task) return next(new ErrorHandler())
    task.isCompleted = !task.isCompleted;

    task.save()

     res.status(201).json({
        success : true,
        message : "Task Updated Successfully"
    })

    

} 
export const deleteTask = async (req , res , next)=>{
    
    const task = await Task.findById(req.params.taskid);


    if(!task) return next(new ErrorHandler("Task not found" , 404))
    await task.deleteOne()

     res.status(201).json({
        success : true,
        message : "Task Removed Successfully"
} )
}