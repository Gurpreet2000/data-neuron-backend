import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import ContentRoutes from './routes/content.js';
const app = express();

mongoose.connect(process.env.DATABASE);

app.use((req, res, next) => {
	res.append('Access-Control-Allow-Origin', ['*']);
	res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.append('Access-Control-Allow-Headers', 'Content-Type');
	next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', ContentRoutes);

app.listen(process.env.PORT, () => {
	console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
