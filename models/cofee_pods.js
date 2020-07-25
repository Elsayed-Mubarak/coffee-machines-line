var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CofeeMachineSchema = new Schema({

    cofee_pod_id: {
        type: String
    },
    product_type: {
        type: String,
        enum: ['COFFEE_POD_LARGE', 'COFFEE_POD_SMALL', 'ESPRESSO_POD'],
        require: true

    },
    coffee_flavor: {
        type: String,
        enum: [
            'COFFEE_FLAVOR_VANILLA',
            'COFFEE_FLAVOR_CARAMEL',
            'COFFEE_FLAVOR_PSL',
            'COFFEE_FLAVOR_MOCHA',
            'COFFEE_FLAVOR_HAZELNUT'
        ],
        require: true
    },
    pack_size: {
        type: String,
        enum: [
            '1 dozen',
            '3 dozen',
            '5 dozen',
            '7 dozen'

        ],
        require: true
    },
    model: {
        type: String
    }

});


CofeeMachineSchema.virtual('id').get(function () {

    return this._id;
});

CofeeMachineSchema.set('toJSON', {
    virtuals: true,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.id;
    }
});


module.exports = mongoose.model('CofeeMachines', CofeeMachineSchema);


