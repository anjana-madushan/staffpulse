/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Employee from '../components/Employee';

export default function EmployeeList() {
  const [employee, setEmployees] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const navigate = useNavigate();



  const fetchEmployees = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/employee/emps/detaills?type=${selectedType}`); // Assuming your backend endpoint is '/api/employees'
      setEmployees(response.data.empData);
      console.log(selectedType)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [selectedType]);


  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/employee/delete/${id}`);
      setEmployees((prevEmployees) => prevEmployees.filter((emp) => emp._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="type">Type

          <select name="type" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
            <option value="All">Employee Type</option>
            <option value="fulltime">Full time</option>
            <option value="parttime">Part time</option>
            <option value="ContractBasis ">Contract Basis </option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>
      <h1>People</h1>
      <button onClick={() => navigate('/add')}>Add People</button>
      <Employee employee={employee} deleteHandler={deleteHandler} />

    </div>
  );
}
