/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import AddEmpForm from '../components/addEmpForm';

export default function EmployeeUpdate() {
  const { id } = useParams();
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

  useEffect(() => {
    const getEmployee = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/employee/${id}`);
        setInputs(res.data.employee);
      } catch (err) {
        console.log(err);
      }
    };

    getEmployee();
  }, [id]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // update api call
    try {
      const res = await axios.put(`http://localhost:5000/employee/update/${id}`, {
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
        const data = await res.data.employee;
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Employee Updated',
          showConfirmButton: false,
          timer: 1500,
        });
      }
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <AddEmpForm
        inputs={inputs}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

    </div>
  );
}
