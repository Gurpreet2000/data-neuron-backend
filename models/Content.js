import mongoose from 'mongoose';

const contentSchema = mongoose.Schema({
	id: {
		type: String,
		required: true,
	},
	data: String,
	count: Number,
});

export default mongoose.model('Content', contentSchema);
