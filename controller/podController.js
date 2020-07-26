var mongoose = require('mongoose');
var config = require('../config/db');
var CoffeePod = require('../models/cofee_pods')


// Inser Pods into db
exports.createCoffeePods = async (req, res) => {

    if (!(req.body)) {
        return res.status(400).send({
            sucess: false,
            message: "please enter a valid data"
        })
    }
    try {
        const savedPods = await CoffeePod.insertMany(req.body);
        res.status(201).json({
            sucess: true,
            message: "pods added sucess",
            data: savedPods
        })
    } catch (err) {
        res.status(400).json({
            sucess: false,
            message: err.message
        })
        console.log(err);
    }
}


// Get all large pods and projection on Id
exports.getLargePods = async (req, res) => {

    try {
        const largePod = await CoffeeMachine.find({
            'product_type': 'COFFEE_POD_LARGE'
        })
            .select('cofee_pod_id');
        res.status(201).json({
            sucess: true,
            message: "All Large pods Id",
            data: largePod
        })
    } catch (err) {
        res.status(400).json({
            sucess: false,
            message: err.message
        })
        console.log(err);
    }
}


// Get all spresso vanilla pods and projection on Id
exports.getAllEspressoVanillaPods = async (req, res) => {

    try {
        const espressoVanillaPods = await CoffeePod.find({
            'product_type': 'ESPRESSO_POD',
            'coffee_flavor': 'COFFEE_FLAVOR_VANILLA'
        })
            .select('cofee_pod_id');
        res.status(201).json({
            sucess: true,
            message: "All Espresso Vanilla Pods Id",
            data: espressoVanillaPods
        })
    } catch (err) {
        res.status(400).json({
            sucess: false,
            message: err.message
        })
        console.log(err);
    }
}

// Get all small pods and projection on Id
exports.getAllSmallPods = async (req, res) => {

    try {
        const smallPods = await CoffeePod.find({
            'product_type': 'COFFEE_POD_SMALL'
        })
            .select('cofee_pod_id');
        res.status(201).json({
            sucess: true,
            message: "All small Pods Id",
            data: smallPods
        })
    } catch (err) {
        res.status(400).json({
            sucess: false,
            message: err.message
        })
        console.log(err);
    }
}

// Get all pods sold in 7 dozen and projection on Id
exports.getAllPodSoldIn7DozenPacks = async (req, res) => {

    try {
        const podSoldIn7DozenPacks = await CoffeePod.find({
            'pack_size': '7 dozen'
        })
            .select('cofee_pod_id');
        res.status(201).json({
            sucess: true,
            message: "All pods sold on 7 dozen",
            data: podSoldIn7DozenPacks
        })
    } catch (err) {
        res.status(400).json({
            sucess: false,
            message: err.message
        })
        console.log(err);
    }
}