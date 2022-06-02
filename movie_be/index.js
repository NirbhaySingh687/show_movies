import cors from "cors"
import authRoute from "./middleware/auth"
import express from "express"
import notFoundMiddleware from "./middleware/NotFoundMiddleware";
import errorHandlerMiddleware from "./middleware/errorHandlingMiddleWare";

const app = express()
const PORT = process.env.PORT || 5000;


app.get("/", (req, res) =>{
    // throw new Error("error")
    res.send("Welcome")
})
app.use(cors())
app.use(express.json())

app.use('/api', authRoute)
// app.use('/api/v1/jobs', authenticateUser, jobsRoute)
//
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


app.listen(PORT, ()=>{
    console.log(`Successfully up and running ${PORT}`)
})