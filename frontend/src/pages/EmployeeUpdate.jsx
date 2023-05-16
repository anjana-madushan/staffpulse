import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AddEmpForm from '../components/addEmpForm';

export default function EmployeeUpdate() {
  const { id } = useParams();

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

    try {
      const res = axios.put(`http://localhost:5000/employee/update/${id}`, {
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
