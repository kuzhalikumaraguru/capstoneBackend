import express from 'express';
import dotenv from 'dotenv';
import AppRoutes from './src/routes/index.js';
import cors from 'cors';

const app = express();
dotenv.config();
const PORT = process.env.PORT;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.use(AppRoutes)

app.listen(PORT,()=>console.log(`App is listening ${PORT}`))