const express = required("express");

const { getAllEmp } = required("../controllers/emp-controller.js");

const router = express.Router();

const {empModel} = require("../models/emp-model");

/*
* Route: /
*Methods : GET
*Description: Get all Employee info
*Access: Public
* Parameters:None
*/

router.get("/", getAllEmp);