import express from 'express';
import Content from '../models/Content.js';
const router = express.Router();

router.get('/', async (req, res) => {
	const content = await Content.find({});
	res.send(content);
});

router.get('/:id', async (req, res) => {
	const content = await Content.findOne({ id: req.params.id });

	res.send(content);
});

router.get('/:id/count', async (req, res) => {
	const content = await Content.findOne({ id: req.params.id });
	res.send({ count: content ? content.count : 0 });
});

router.post('/', async (req, res) => {
	const { data, id } = req.body;
	let count = 1;
	const exists = await Content.exists({ id });
	if (exists) {
		const oldContent = await Content.findOneAndDelete({ id });
		count = ++oldContent.count;
	}
	const content = await Content.create({ data, id, count });

	res.send(content);
});

router.put('/', async ({ body }, res) => {
	const exists = await Content.exists({ id: body.id });
	if (exists) {
		const content = await Content.findOneAndUpdate(
			{ id: body.id },
			{ ...body, count: Number.parseInt(body.count) }
		);
		res.send({ updated: true });
	} else {
		const content = await Content.create({
			data: body.data,
			id: body.id,
			count: 1,
		});
		res.send(content);
	}
});

export default router;
