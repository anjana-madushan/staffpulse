import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import EmployeeList from './pages/employee-list';
import EmployeeAdd from './pages/employee-add';
import EmployeeUpdate from './pages/employee-update';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/add" element={<EmployeeAdd />} />
        <Route path="/update/:id" element={<EmployeeUpdate />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
