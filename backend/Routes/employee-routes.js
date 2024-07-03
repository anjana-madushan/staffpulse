/* eslint-disable import/extensions */
/* eslint-disable max-len */
import express from 'express';

import {
  addEmployee, deleteEmployee, getFilteredEmployees, getOneEmployee, updateEmployee,
} from '../controllers/employee-controller.js';

const router = express.Router();

router.post('/add', addEmployee);
router.get('/:id', getOneEmployee);
router.get('/emps/detaills', getFilteredEmployees);
router.put('/update/:id', updateEmployee);
router.delete('/delete/:id', deleteEmployee);

export default router;
