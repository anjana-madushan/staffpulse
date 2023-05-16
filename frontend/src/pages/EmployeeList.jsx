/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Employee from '../components/Employee';
import '../assets/styles.css';

export default function EmployeeList() {
  const [employee, setEmployees] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortColumn, setSortColumn] = useState('');

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage - 1;
  const firstIndex = lastIndex - recordsPerPage + 1;
  const records = employee.slice(firstIndex, lastIndex + 1);
  const noPages = Math.ceil(employee.length / recordsPerPage);
  const numbers = [...Array(noPages + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changePage = (no) => {
    setCurrentPage(no);
  };

  const nextPage = () => {
    if (currentPage !== noPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // fetching employees by filtering them based on the type
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/employee/emps/detaills?type=${selectedType}`);
        const sortedEmployees = response.data.empData;

        // sorting logic
        if (sortColumn === 'fullname') {
          sortedEmployees.sort((a, b) => {
            const nameA = a.fullName.toLowerCase();
            const nameB = b.fullName.toLowerCase();
            if (sortOrder === 'asc') {
              if (nameA < nameB) return -1;
              if (nameA > nameB) return 1;
            } else {
              if (nameA > nameB) return -1;
              if (nameA < nameB) return 1;
            }
            return 0;
          });
        }
        setEmployees(sortedEmployees);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployees();
  }, [selectedType, sortOrder, sortColumn]);

  const sortHandle = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  // delete Employees api call
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
      <div className="btn_select_list">

        <div className="form-group">

          <select name="type" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
            <option value="All">Employee Type</option>
            <option value="Full time">Full time</option>
            <option value="Part time">Part time</option>
            <option value="Contract Basis">Contract Basis </option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/add')}>Add People</button>
      </div>

      <Employee employee={records} deleteHandler={deleteHandler} sorthandle={sortHandle} />

      <div className="pagination_nav">
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prePage}>Prev</a>
            </li>
            {
              numbers.map((n, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                  <a href="#" className="page-link" onClick={() => changePage(n)}>
                    {n}
                  </a>
                </li>
              ))
            }
            <li className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
