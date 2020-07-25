var express = require('express');
var router = express.Router();

var coffeeController = require('../controller/cofeeControllers')

router.get('/machines', coffeeController.getLargeMachines);
router.get('/espresso-machines', coffeeController.getAllEspressoMachines);

router.post('/machines', coffeeController.createCoffeeMachines);

module.exports = router;
