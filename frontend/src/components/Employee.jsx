/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import '../assets/styles.css';

function Employee({ employee, deleteHandler, sorthandle }) {
  const navigate = useNavigate();
  return (
    <div className="table">

      <Table responsive="sm">
        <thead>
          <tr className="emp_thead">
            <th onClick={() => sorthandle('fullname')}>Full Name</th>
            <th>Emp ID</th>
            <th>Designation</th>
            <th>Type</th>
            <th>Experience</th>
          </tr>
        </thead>

        <tbody>
          {employee.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.fullName}</td>
              <td>{employee.empNo}</td>
              <td>{employee.designation}</td>
              <td>{employee.type}</td>
              <td>{employee.experience}</td>
              <td>
                <button className="table-button" id="btn1" onClick={() => deleteHandler(employee._id)}>Delete</button>
                <button className="table-button" id="btn2" onClick={() => navigate(`/update/${employee._id}`)}>Update</button>
              </td>
            </tr>
          ))}

        </tbody>
      </Table>

    </div>
  );
}

export default Employee;
