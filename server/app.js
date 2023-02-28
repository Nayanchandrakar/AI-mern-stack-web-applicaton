import express from "express"
import cors from "cors"
import {dallieRoute,DBroute,post} from './Routes/index.js'
import dotenv from "dotenv"
import { MongoConnect } from "./MongoDB/connect.js"
const app = express()
const port = process.env.PORT || 8000

// console.log(dallieRoute)
// HIGHER_PRIORITY_FUNCTIONS
dotenv.config()
app.use(cors())
app.use(express.json())
app.use("/api/v1/post", post)
app.use("/api/v1/image", dallieRoute)
app.use("/api/v1/getdata", DBroute)


app.get("/", (req, res) => {
    res.status(200).json({ message: "user longin" })
})


const ApplicationConnect = () => {
    try {
        MongoConnect()
        app.listen(port, () => {
            console.log(`server is listening in port http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

ApplicationConnect()
