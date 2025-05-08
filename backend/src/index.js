import express from "express"
import cors from "cors"
import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import chatRoutes from "./routes/chat.route.js"
import cookieparser from "cookie-parser"
import dotenv from "dotenv"
import {connectDB} from "./lib/db.js"

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
 
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
    console.log("server running on port 5000")
    connectDB()
})