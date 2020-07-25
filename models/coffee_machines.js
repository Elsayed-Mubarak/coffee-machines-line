var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CofeeMachineSchema = new Schema({

    cofee_machine_id: {
        type: String,
        require: true
    },
    product_type: {
        type: String,
        enum: ['COFFEE_MACHINE_LARGE', 'COFFEE_MACHINE_SMALL', 'ESPRESSO_MACHINE'],
        require: true
    },
    water_line_compatible: {
        type: Boolean,
        default: false
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


module.exports = mongoose.model('CofeeMachine', CofeeMachineSchema);


