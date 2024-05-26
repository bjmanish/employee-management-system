const empModel = require("../models/emp-model");

const mongoose = require("mongoose");


//Route for all users 
    exports.getAllEmp = async (req, res) =>{
        const emp =  await empModel.find();

        if(emp.length === 0 ){
            return res.status(404).json({
                success: false,
                message: "No any employee found!"
            });
        }
        res.status(200).json({
            success: true,
            data: emp,
        });
    };