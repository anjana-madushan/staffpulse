/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Employee from '../components/Employee';
import '../assets/styles.css'

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
      <h1>People</h1>
      <hr />
      <div className='btn_select_list'>

        <div className="form-group">


          <select name="type" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
            <option value="All">Employee Type</option>
            <option value="Full-time">Full time</option>
            <option value="Part-time">Part time</option>
            <option value="Contract Basis">Contract Basis </option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button className='btn btn-primary' onClick={() => navigate('/add')}>Add People</button>
      </div>
      <Employee employee={employee} deleteHandler={deleteHandler} />

    </div>
  );
}
