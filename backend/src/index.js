import express from "express"
import cors from "cors"
import authRoute from "./routes/auth.route.js"
import cookieparser from "cookie-parser"
import dotenv from "dotenv"
import {dbconnection} from "./lib/db.js"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true, // allow frontend to send cookies
    })
  );

app.use(express.json())
app.use(cookieparser())
app.use("/api/auth", authRoute)


app.listen(PORT, () => {
    console.log("server running on port 5000")
    dbconnection()
})