import express from 'express';
const app = express();
import { connectDB } from './src/config/db.js';
const port = 5000;
import dotenv from 'dotenv';
import authRouter from './src/routes/auth.routes.js';
dotenv.config();
connectDB();

app.use("/auth",authRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});