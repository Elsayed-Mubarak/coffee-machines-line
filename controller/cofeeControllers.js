var mongoose = require('mongoose');
var config = require('../config/db');
var CoffeeMachine = require('../models/coffee_machines')


// Inser Machines into db
exports.createCoffeeMachines = async (req, res) => {


    if (!(req.body)) {
        return res.status(400).send({
            sucess: false,
            message: "please enter a valid data"
        })
    }
    try {
        const savedMachine = await req.body.forEach(element => { CoffeeMachine.create(element) });
        res.status(201).json({
            sucess: true,
            message: "machine added sucess",
            data: savedMachine
        })
    } catch (err) {
        res.status(400).json({
            sucess: false,
            message: err.message
        })
        console.log(err);
    }
}



// Get all large machine and projection on Id
exports.getLargeMachines = async (req, res) => {

    try {
        const lagreMachine = await CoffeeMachine.find({
            'product_type': 'COFFEE_MACHINE_LARGE'
        })
            .select('cofee_machine_id');
        res.status(201).json({
            sucess: true,
            message: "All Large Machine Id",
            data: lagreMachine
        })
    } catch (err) {
        res.status(400).json({
            sucess: false,
            message: err.message
        })
        console.log(err);
    }
}


// Get all spresso machine and projection on Id
exports.getAllEspressoMachines = async (req, res) => {

    try {
        const espressoMachine = await CoffeeMachine.find({
            'product_type': 'ESPRESSO_MACHINE'
        })
            .select('cofee_machine_id');
        res.status(201).json({
            sucess: true,
            message: "All Espresso Machine Id",
            data: espressoMachine
        })
    } catch (err) {
        res.status(400).json({
            sucess: false,
            message: err.message
        })
        console.log(err);
    }
}
