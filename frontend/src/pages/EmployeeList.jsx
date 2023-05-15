import React, { useEffect, useState } from 'react'
import Employee from '../components/Employee';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function EmployeeList() {

    const [employee, setEmployees] = useState([]);

    const navigate = useNavigate()

    useEffect(()=>{
        const getEmployees=async()=>{
            const res = await axios.get('http://localhost:5000/employee/').catch((err)=>{
                console.log(err)
            })
            setEmployees(res.data.employees)
            console.log(res.data.employees)
        }

        getEmployees();
    }, [])

        
    const deleteHandler = async(id) => {

        try{
            await axios.delete(`http://localhost:5000/employee/delete/${id}`);
            setEmployees((prevEmployees) => prevEmployees.filter((emp) => emp._id !== id));
        }catch (error) {
            console.log(error);
          }
        
      }

  return (
    <div>
        <h1>People</h1>
        <button onClick={()=>navigate('/add')}>Add People</button>
        <Employee employee={employee} deleteHandler={deleteHandler}/></div>
  )
}
