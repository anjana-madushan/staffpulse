import EmployeeList from "./pages/EmployeeList"
import EmployeeAdd from "./pages/EmployeeAdd"
import EmployeeUpdate from "./pages/EmployeeUpdate"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmployeeList />} />
        <Route path='/add' element={<EmployeeAdd />} />
        <Route path='/update/:id' element={<EmployeeUpdate />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
