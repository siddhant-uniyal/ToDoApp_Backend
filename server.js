import { app } from "./app.js"

import {connectToDB} from "./data/db.js"

connectToDB();


app.get("/" , (req , res)=>{
    res.send("site is working")
})
app.listen(process.env.PORT , ()=>{
    console.log(`Server is working on port : ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})