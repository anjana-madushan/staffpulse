import React from 'react'
import {useNavigate}from 'react-router-dom'


const Employee = ({employee, deleteHandler}) => {

    const navigate = useNavigate()
  return (
    <div className='table'>
      
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Designation</th>
            <th>Type</th>
            <th>Experience</th>
          </tr>
        </thead>

        <tbody>
            {employee.map((employee)=>(
                <tr>
            <td>{employee.fullName}</td>
            <td>{employee.designation}</td>
            <td>{employee.type}</td>
            <td>{employee.experience}</td>
            <td>
              <button onClick={() => deleteHandler(employee._id)}>Delete</button>
              <button onClick={()=> navigate(`/update/${employee._id}`)}>Update</button>
            </td>
          </tr>
            ))}
          
        </tbody>
      </table>

    </div>
  )
}

export default Employee