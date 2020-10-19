const mongoose = require('mongoose');
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workouts',{
    useNewUrlParser: true,
    useFindAndModify: false
});
//routes
app.use(require('./routes/api.js'));
app.get('/exercise', function(req,res){
    res.sendFile(__dirname + '/public/exercise.html');
});
app.get('/stats', function(req,res){
    res.sendFile(__dirname + '/public/stats.html');
});


//listener
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});