const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// defining the schema which will be used to save the data
var employeeSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    salary:{
        type: Number,
        required: true,
    },
},
{ 
    timestamps: true,
});

module.exports = mongoose.model("Employee", employeeSchema);