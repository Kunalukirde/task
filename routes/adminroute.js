const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const employeeAddTable = require('../models/employee.js');
const taskTable = require('../models/task.js');
const emplmanageTable = require('../models/emplmanage.js');


router.post('/', async (req,res)=> {
    res.status(200).send({message : 'adminpage'});
})

router.post('/login',async (req,res)=> {
    const {userid,password} = req.body;
    try {
        if (userid === '123', password ==='123') {
            token = jwt.sign({userid,password},"secretkeyappearshere",{expiresIn :'5h'});
            await res.status(200).send({message : "Login Success" , status :true, token : token});
        } else {
            res.status(409).send({status : false, message: "Invalid Credentials"});
        }
    } catch (error) {
        res.send(400).send({message :'Internal Server Error'});
    }
})


// get employee

router.get('/employee' , async(req,res)=> {
    try {
        const employee = await employeeAddTable.find();
        res.status(200).send({status : true , message : 'employee fetch successfully' , employeeList : employee})
    } catch (error) {
        res.status(400).send({status: false ,message : "internal server error"});
    }
})

//add employee

router.post('/employee/add', async (req,res)=>{
    const {employeename,employeeid} = req.body;

    try {
        const doc = await employeeAddTable({
            employeename  : employeename,
            employeeid : employeeid
        });
        await doc.save();
         saved_empl = await employeeAddTable.find({employeename : employeename});
         console.log('saved_empl',saved_empl);
         res.status(200).send({status: true, message: "Emploeey Saved",'saved_empl': saved_empl});
    } catch (error) {
        res.status(400).send({status: false, message: 'Internal Server Error'});
    }
})


// task 

router.post('/task/add',async (req,res)=> {
    const {employeename,taskname} = req.body;

    try {
        if (employeename && taskname) {
            const doc = taskTable({
                employeename:employeename,
                taskname:taskname
            });
            doc.save();
            res.status(200).send({status : true, message : 'task added'});
        } else {
            res.send({message : false , message:"fill the all fields"});
        }
    } catch (error) {
        res.status(400).send({status: false,message:"Internal server error"});
    }
})

// get task
router.get('/task',async(req,res)=> {
    try {
        const taskData = await taskTable.find();
        res.status(200).send({status:true,message:'fetch successfully', taskData})
    } catch (error) {
        res.status(400).send({status:false,message : 'Intrnal server error'});
    }
})


// manage employee

router.get('/manageempget',async(req,res)=>{
    try {
        manageEmployee = await emplmanageTable.find();
        res.status(200).send({message :true,message : 'fetch successfully',manageEmployee});
    } catch (error) {
        res.status(400).send({status : false, message : 'Internal server error'});
    }
});

router.post('/manageempget/add',async(req,res)=> {
    const {username,password,role} = req.body;

    try {
        if (username && password && role) {
            const doc = emplmanageTable({
                username : username,
                password:password,
                role:role
            });
            doc.save().then(()=> {
                res.status(200).send({status:true,message : 'added successfully'})
            }).catch((error)=>{
                console.log('error to savng emp',error);
            })
        } else {
            res.status(409).send({status : false ,message : "All field required"});
        }
    } catch (error) {
        res.status(400).send({status : false, message :'Internal Server Error'});
    }
})



module.exports = router;