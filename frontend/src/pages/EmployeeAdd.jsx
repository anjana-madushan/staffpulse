/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import AddEmpForm from '../components/addEmpForm';
import '../assets/styles.css';

export default function EmployeeAdd() {
  const navigate = useNavigate();

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
      const res = await axios.post('http://localhost:5000/employee/add', {
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
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Employee added successfully',
        }).then(() => {
          navigate('/');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to add employee',
        });
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred',
      });
    }
  };

  return (
    <div>
      <h3>Add People</h3>
      <hr />
      <AddEmpForm inputs={inputs} handleSubmit={handleSubmit} handleChange={handleChange} />

    </div>
  );
}
