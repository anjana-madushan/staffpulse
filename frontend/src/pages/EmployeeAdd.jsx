import React, { useState } from 'react';
import axios from 'axios';
import AddEmpForm from '../components/addEmpForm';

export default function EmployeeAdd() {
  const [inputs, setInputs] = useState({
    fullName: '',
    nameInitials: '',
    preferredName: '',
    gender: '',
    email: '',
    dob: '',
    mobile: '',
    designation: '',
    type: '',
    experience: '',
    joinDate: '',
    Salary: '',
    notes: '',
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = axios.post('http://localhost:5000/employee/add', {
        fullName: inputs.fullName,
        nameInitials: inputs.nameInitials,
        preferredName: inputs.preferredName,
        gender: inputs.gender,
        email: inputs.email,
        dob: inputs.dob,
        mobile: inputs.mobile,
        designation: inputs.designation,
        type: inputs.type,
        experience: inputs.experience,
        joinDate: inputs.joinDate,
        Salary: inputs.Salary,
        notes: inputs.notes,
      });
      if (res && res.data) {
        const data = await res.data;
        console.log(data);
        return data;
      }
      throw new Error('Response data is undefined');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div><AddEmpForm inputs={inputs} handleSubmit={handleSubmit} handleChange={handleChange} /></div>
  );
}
