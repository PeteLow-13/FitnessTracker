const { builtinModules } = require('module');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// workout schema 
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises:{
        type: Array
    }
});

const Workout = mongoose.model('Workout', workoutSchema);
//exports new workout schema
module.exports = Workout;