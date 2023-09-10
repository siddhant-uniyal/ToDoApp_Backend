import express from "express"
import { newTask , getMyTask, updateTask, deleteTask } from "../controllers/task_controllers.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();




router.post("/new" , isAuthenticated , newTask);
router.get("/my" , isAuthenticated , getMyTask);
router.route("/:taskid")
.put( isAuthenticated ,updateTask)
.delete( isAuthenticated , deleteTask)


export default router;