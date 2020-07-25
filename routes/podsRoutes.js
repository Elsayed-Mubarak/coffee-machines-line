var express = require('express');
var router = express.Router();

var podsController = require('../controller/podController')

router.get('/pods', podsController.getLargePods);
router.get('/espresso-vanilla-pods', podsController.getAllEspressoVanillaPods);
router.get('/small-pods', podsController.getAllSmallPods);
router.get('/pods-sold-in7-dozen-packs', podsController.getAllPodSoldIn7DozenPacks);

router.post('/pods', podsController.createCoffeePods);

module.exports = router;
