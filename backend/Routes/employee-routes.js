import express from 'express';

import {
  addEmployee, deleteEmployee, getAllEmployees, getFilteredEmployees, updateEmployee,
} from '../Controllers/employee-controller';

const router = express.Router();

router.post('/add', addEmployee);
router.get('/', getAllEmployees);
router.get('/:type', getFilteredEmployees);
router.put('/update/:id', updateEmployee);
router.delete('/delete/:id', deleteEmployee);

export default router;
