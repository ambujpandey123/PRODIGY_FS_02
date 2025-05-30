import mongoose from "mongoose";

const EmployeeModel = new mongoose.Schema({
    name: String,
    salary: Number,
    department: String,
    destination: String,
});

export const Employee = mongoose.models.employee || mongoose.model("employee",EmployeeModel)