const mongoose = require('mongoose');
const express = require('express');

const PORT = process.env.PORT || 3000;

const app =express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongod://localhost/budget',{
    useNewUrlParser: true,
    useFindAndModify: false
});
//routes
app.use(require('./'))
//listener
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});