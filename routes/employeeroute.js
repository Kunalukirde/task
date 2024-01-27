const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const emplmanageTable = require('../models/emplmanage.js');
const mongoose = require('mongoose');



router.post('/', (req,res) =>  {
    res.status(200).json({ message: 'Protected route accessed' });
})


router.post('/dashboard', async (req, res) => {
    try {
        const { _id } = req.body;
        console.log(_id);

        // Check if _id is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            res.status(400).send({ status: false, message: 'Invalid ObjectId format' });
            return;
        }

        // Use findOne with the provided _id
        const employee = await emplmanageTable.findOne({ _id });

        if (employee !== null) {
            res.status(200).send({ status: true, message: 'Fetch successful', employee });
        } else {
            res.status(400).send({ status: false, message: 'Error fetching data' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: false, message: 'Internal server error' });
    }
});

module.exports = router;