
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/data_education');
        console.log("connect success!");
    } catch (error) {
        console.log("connect faild!");
        
    }

} 
module.exports = {connect}