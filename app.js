import express from "express"

import userRouter from "./routes/user_routes.js"
import taskRouter from "./routes/task_routes.js"
import { errorMiddleware } from "./middlewares/error.js"
import {config} from "dotenv"
import cookieParser from "cookie-parser";
export const app = express();

config({
    path:"./data/config.env",
})

app.use(cookieParser())
app.use(express.json())
app.use("/api/v1/users" ,userRouter)
app.use("/api/v1/tasks" ,taskRouter)

app.use(errorMiddleware)



