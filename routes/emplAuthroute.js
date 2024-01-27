const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const emplmanageTable = require('../models/emplmanage.js');


router.post('/', async(req,res)=>{
    try {
        res.send({message:'employee'});
    } catch (error) {
        res.status(400).send({message : 'Internal Server Error'});
    }
});


router.post('/login',async(req,res)=> {
    try {
        const {userid,password} = req.body;
        if (userid && password) {
            const existingUser = await emplmanageTable.find({_id:userid});
            if (existingUser) {
                if ((String(existingUser[0]._id) === String(userid) ) && (existingUser[0].password === password)) {
                    const token = jwt.sign({ _id:userid }, 'your-secret-key', {expiresIn: '1h'});
                    res.status(200).send({status : true ,message :'login success',token});
                } else {
                    res.status(401).send({message : 'userid or password is invalid'});
                }
            } else {
                res.status(409).send({status : false, message : 'You are not registered user'});
            }
        } else {
            res.status(409).send({status:false,message:'all field are required'});
        }
    } catch (error) {
        res.status(500).send({status:false,message:'Internal server error'});
    }
})


module.exports  = router;