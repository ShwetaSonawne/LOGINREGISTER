const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    fname: String, 
    lname: String,
    age: String,
    gender: String,
    email: String,
    password: String
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema)
module.exports = EmployeeModel