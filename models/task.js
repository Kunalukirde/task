const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    employeename: { type : String , required: true},
    taskname : {type : String , required : true}
});

const taskTable = mongoose.model('task',taskSchema);

module.exports = taskTable;