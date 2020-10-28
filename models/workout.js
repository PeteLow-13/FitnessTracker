// const { builtinModules } = require('module');
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
    },   
    {
        toJSON: {
            virtuals: true
        } 
    });

    // workoutSchema.set('toJSON', {virtuals: true});

workoutSchema.virtual('totalDuration').get(function() {
    return this.exercises.reduce((total, exercise)=> {
        return total + exercise.duration;
    }, 0);
    
});

const Workout = mongoose.model('Workout', workoutSchema);
//exports new workout schema
module.exports = Workout;