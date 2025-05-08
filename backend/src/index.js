import express from "express"
import cors from "cors"
import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import chatRoutes from "./routes/chat.route.js"
import cookieparser from "cookie-parser"
import dotenv from "dotenv"
import {connectDB} from "./lib/db.js"
import path from "path"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

const __dirname = path.resolve();

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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}


app.listen(PORT, () => {
    console.log("server running on port 5001")
    connectDB()
})