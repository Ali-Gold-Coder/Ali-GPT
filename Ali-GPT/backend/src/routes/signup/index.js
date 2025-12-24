const express = require('express');
const router = express.Router();
const {singupUser} = require('../..services/authServices')

router.post('/', async (req, res) =>{
    try{
        const result = await singupUser(req.body);
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            user:result
        });
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;
