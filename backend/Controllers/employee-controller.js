/* eslint-disable consistent-return */
/* eslint-disable max-len */
import Employee from '../Model/employee';
import {
  validateEmail, validateMobileNumber, validateGender, validateExperience, validateSalary,
  validateNotesLength, validateNotFutureDate, validateType,
} from '../Validations/empValidation';

export const addEmployee = async (req, res) => {
  const {
    fullName, nameInitials, preferredName, gender, email, dob, mobile, designation, type, experience, joinDate, Salary, notes,
  } = req.body;
  const dateOb = new Date(req.body.dob);
  const joinedDate = new Date(req.body.joinDate);

  // checking validations
  if (!fullName || !nameInitials || !preferredName || !gender || !email || !dob || !mobile || !designation
    || !type || !experience || !joinDate || !Salary || !notes) {
    res.status(400).json({ message: 'Please provide all required fields.' });
  } else if (!validateEmail(email)) {
    res.status(400).json({ message: 'Please provide a valid email address.' });
  } else if (!validateNotFutureDate(dateOb)) {
    res.status(400).json({ message: 'Please provide a valid date of birth that is not in the future.' });
  } else if (!validateNotFutureDate(joinedDate)) {
    res.status(400).json({ message: 'Please provide a valid join Date that is not in the future.' });
  } else if (!validateMobileNumber(mobile)) {
    res.status(400).json({ message: 'Please provide a valid 10-digit mobile number.' });
  } else if (!validateGender(gender)) {
    res.status(400).json({ message: 'Please provide a valid gender.' });
  } else if (!validateExperience(experience)) {
    res.status(400).json({ message: 'Please provide a valid experience as a number.' });
  } else if (!validateSalary(Salary)) {
    res.status(400).json({ message: 'Please provide a valid salary as a numeric value with up to two decimal places.' });
  } else if (!validateType(type)) {
    res.status(400).json({ message: 'Please provide a valid Employee Type' });
  } else if (!validateNotesLength(notes)) {
    res.status(400).json({ message: 'Notes should not exceed 500 characters.' });
  } else {
    let existingEmp;
    // chaecking whether employee already add to sysstem using this email or mobile
    try {
      existingEmp = await Employee.findOne({ $or: [{ email }, { mobile }] });
    } catch (err) {
      console.log(err);
    }

    if (existingEmp) {
      return res.status(400).json({ message: 'Employee already exist this mobile or email. Enter mobile no and email' });
    }

    // creating autoIncrement emp Id
    let eNo;
    try {
      const lastEmpDoc = await Employee.findOne({}, { empNo: 1 }, { sort: { empNo: -1 } });

      if (lastEmpDoc.empNo) {
        const lastEmpNo = parseInt(lastEmpDoc.empNo, 10);
        eNo = lastEmpNo + 1;
        eNo = eNo.toString().padStart(4, '0');
      } else {
        eNo = '0001';
        console.log(eNo);
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'internal Server Error' });
    }
    console.log(`sadf${eNo}`);
    let employee;

    try {
      employee = new Employee({
        empNo: eNo,
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

export const getOneEmployee = async (req, res) => {
  const { id } = req.params;

  let employee;
  try {
    employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: 'This employer is not Found' });
    }
  } catch (err) {
    console.log(err);
  }

  return res.status(200).json({ employee });
};

export const getFilteredEmployees = async (req, res) => {
  const type = req.query.type || '';

  const query = {};

  if (type !== 'All') {
    query.type = type;
  }

  try {
    const empData = await Employee.find(query);

    res.status(200).json({
      empData,
    });
  } catch (error) {
    res.status(401).json(error);
  }
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;

  const {
    fullName, nameInitials, preferredName, gender, email, dob, mobile, designation, type, experience, joinDate, Salary, notes,
  } = req.body;

  const dateOb = new Date(req.body.dob);
  const joinedDate = new Date(req.body.joinDate);

  // checking validations
  if (!fullName || !nameInitials || !preferredName || !gender || !email || !dob || !mobile || !designation
    || !type || !experience || !joinDate || !Salary || !notes) {
    res.status(400).json({ message: 'Please provide all required fields.' });
  } else if (!validateEmail(email)) {
    res.status(400).json({ message: 'Please provide a valid email address.' });
  } else if (!validateNotFutureDate(dateOb)) {
    res.status(400).json({ message: 'Please provide a valid date of birth that is not in the future.' });
  } else if (!validateNotFutureDate(joinedDate)) {
    res.status(400).json({ message: 'Please provide a valid join Date that is not in the future.' });
  } else if (!validateMobileNumber(mobile)) {
    res.status(400).json({ message: 'Please provide a valid 10-digit mobile number.' });
  } else if (!validateGender(gender)) {
    res.status(400).json({ message: 'Please provide a valid gender.' });
  } else if (!validateExperience(experience)) {
    res.status(400).json({ message: 'Please provide a valid experience as a number.' });
  } else if (!validateSalary(Salary)) {
    res.status(400).json({ message: 'Please provide a valid salary as a numeric value with up to two decimal places.' });
  } else if (!validateType(type)) {
    res.status(400).json({ message: 'Please provide a valid Employee Type' });
  } else if (!validateNotesLength(notes)) {
    res.status(400).json({ message: 'Notes should not exceed 500 characters.' });
  } else {
    let existingEmp;
    // chaecking whether employee already add to sysstem using this email or mobile
    try {
      existingEmp = await Employee.findOne({ $or: [{ email }, { mobile }] });
    } catch (err) {
      console.log(err);
    }

    // eslint-disable-next-line no-underscore-dangle, eqeqeq
    if (existingEmp && existingEmp._id != id) {
      return res.status(400).json({ message: 'Employee already exist this mobile or email. Enter mobile no and email' });
    }

    try {
      const employee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
      if (!employee) {
        res.status(500).json({ message: 'Unable to Update this Employee' });
      }
    } catch (err) {
      console.log(err);
    }

    res.json({ message: 'Employee successfully updated' });
  }
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) {
      res.status(500).json({ message: 'Unable to Delete this Employee' });
    }
  } catch (err) {
    console.log(err);
  }

  return res.status(200).json({ message: 'Employee is succesfully deleted' });
};
