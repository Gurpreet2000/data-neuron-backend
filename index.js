import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import ContentRoutes from './routes/content.js';
const app = express();

mongoose.connect(process.env.DATABASE);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', ContentRoutes);

app.listen(process.env.PORT, () => {
	console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
