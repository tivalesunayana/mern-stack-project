import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import cookieParser from "cookie-parser";
//for deploy
import path from "path";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log(" connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/dist"))); //deploy
app.use(express.json());
app.use(cookieParser());
app.listen(3000, () => {
  console.log(`listening on port 3000`);
});
// app.use('api/auth' ,authRoutes)
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use((err, req, res, next) => {
  const statuscode = err.statuscode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statuscode).json({
    success: false,
    message,
    statuscode,
  });
});

//for deploy
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
