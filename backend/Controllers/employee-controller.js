/* eslint-disable max-len */
import Employee from '../Model/employee';

export const addEmployee = async (req, res) => {
  const {
    fullName, nameInitials, preferredName, gender, email, dob, mobile, designation, type, experience, joinDate, Salary, notes,
  } = req.body;

  let employee;

  try {
    employee = new Employee({
      fullName,
      nameInitials,
      preferredName,
      gender,
      email,
      dob,
      mobile,
      designation,
      type,
      experience,
      joinDate,
      Salary,
      notes,
    });

    // save data in the database
    await employee.save();
  } catch (err) {
    console.log(err);
  }
  res.status(201).json({ employee });
  if (!employee) {
    res.status(500).json({ message: 'Unable to Add the employee' });
  }
};

export const getAllEmployees = async (req, res) => {
  let employees;

  try {
    employees = await Employee.find();
  } catch (err) {
    console.log(err);
  }

  if (!employees) {
    return res.status(404).json({ message: 'No employees Found' });
  }

  return res.status(200).json({ employees });
};

export const getFilteredEmployees = async (req, res) => {
  const { type } = req.params;
  let employees;

  try {
    employees = await Employee.find({ type });
  } catch (err) {
    console.log(err);
  }

  if (!employees || employees.length === 0) {
    return res.status(404).json({ message: 'No employees Found with this type' });
  }

  return res.status(200).json({ employees });
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  let employee;

  try {
    employee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
  } catch (err) {
    console.log(err);
  }

  if (!employee) {
    res.status(500).json({ message: 'Unable to Update this Employee' });
  }
  return res.json({ message: 'Employee successfully updated' });
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  let employee;

  try {
    employee = await Employee.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }

  if (!employee) {
    res.status(500).json({ message: 'Unable to Delete this Employee' });
  }

  return res.status(200).json({ message: 'Employee is succesfully deleted' });
};
