const express = require('express');
const EmployeeController = require('../controllers/employeeController');
const fileService = require('../services/fileService');

const router = express.Router();
const employeeController = new EmployeeController(fileService);

const setRoutes = (app) => {
    router.post('/employees', employeeController.addEmployee.bind(employeeController));
    router.put('/employees/:id', employeeController.editEmployee.bind(employeeController));
    router.delete('/employees/:id', employeeController.deleteEmployee.bind(employeeController));
    router.get('/employees', employeeController.getEmployees.bind(employeeController));
    router.post('/login', employeeController.login.bind(employeeController));
    app.use('/api', router);
};

module.exports = setRoutes;