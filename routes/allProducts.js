var router = require('express').Router();
const db = require('../models/index').sequelize;
const Products = db.model('store_inventory');

router.get('/', function(req, res){
	Products.findAll().then(
			function findAllSuccess(data){
				res.json(data)
			},
			function findAllError(err){
				res.send(500, err.message)
			}
		)
})

module.exports = router;
