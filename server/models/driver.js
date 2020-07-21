const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
    type : {
        type : String,
        default : 'Point'
    },
    coordinates : {
        type : [Number]
    }
})

const DriverSchema = new Schema({
    name : {
        type: String,
        required : [true, 'Driver name is required']
    },
    age : {
        type : Number,
        required : [true, 'Driver age is required'],
        index: '2dsphere'
    },
    geometry : GeoSchema
})

const Driver = mongoose.model('Driver',DriverSchema);

module.exports = Driver;
