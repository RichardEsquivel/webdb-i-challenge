const express = require('express');
const router = express.Router();
const knex = require('../data/dbConfig.js');

router.get('/', (req, res) => {
	knex.select('*')
		.from('accounts')
		.then(accounts => {
			res.status(200).json(accounts);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

router.get('/:id', (req, res) => {
	knex.select('*')
		.from('accounts')
		.where('id', '=', req.params.id)
		.first()
		.then(accounts => {
			res.status(200).json(accounts);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

router.post('/', (req, res) => {
	const postAccount = req.body;
	knex('accounts')
		.insert(postAccount, 'id')
		.then(ids => {
			res.status(200).json(ids);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

router.put('/:id', (req, res) => {
	knex('accounts')
		.where({ id: req.params.id })
		.update(req.body)
		.then(accounts => {
			res.status(200).json(accounts);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

router.delete('/:id', (req, res) => {
	knex('accounts')
		.where({ id: req.params.id })
		.del()
		.then(accounts => {
			res.status(200).json(accounts);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

module.exports = router;