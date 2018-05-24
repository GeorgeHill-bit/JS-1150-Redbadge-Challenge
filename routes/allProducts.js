var router = require('express').Router();
const db = require('../models/index').sequelize;
const Products = db.model('store_inventory');


router.get('/', function(req, res){
    // var limit = getQueryVariable('limit')
    const limit = req.query
    console.log("?limit=20", req.query)
	Products.findAll(limit).then(
			function findAllSuccess(data){
				res.json(data)
			},
			function findAllError(err){
				res.send(500, err.message)
			}
		)
})

module.exports = router;
