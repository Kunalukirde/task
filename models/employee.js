const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    employeename :{type :  String, required : true} ,
    employeeid :{type :  String, required : true} ,
})

const employeeTable = mongoose.model('employee',employeeSchema);
module.exports = employeeTable;