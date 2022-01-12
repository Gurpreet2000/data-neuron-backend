import express from 'express';
import mongoose from 'mongoose';
import ContentRoutes from './routes/content.js';
import cors from 'cors';
const app = express();

mongoose.connect(
	'mongodb+srv://admin:database@cluster0.zvu1w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', ContentRoutes);

app.listen(process.env.PORT || 5000, () => {
	console.log('Server is running at localhost:5000');
});
