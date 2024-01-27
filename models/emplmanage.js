const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    username : {type : String, required: true},
    password : {type : String, required: true},
    role : {type : String, required: true},
});

const emplmanageTable = mongoose.model('manageemp',employeeSchema);
module.exports = emplmanageTable;