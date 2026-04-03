const { v4: uuidv4 } = require('uuid');
class EmployeeController {
    constructor(fileService) {
        this.fileService = fileService;
    }

    async addEmployee(req, res) {
        const newEmployee = req.body;
        newEmployee.id = uuidv4(); // Generate a unique ID for the new employee
        console.log('Adding new employee:', newEmployee);
        try {
            const employees = await this.fileService.readFromFile();
            employees.push(newEmployee);
            await this.fileService.saveToFile(employees);
            res.status(201).json({ message: 'Employee added successfully', employee: newEmployee });
        } catch (error) {
            console.error('Error adding employee:', error.message);
            res.status(500).json({ message: 'Error adding employee', error });
        }
    }

    async editEmployee(req, res) {
        const { id } = req.params;
        const updatedData = req.body;
        try {
            let employees = await this.fileService.readFromFile();
            employees = employees.map(employee => (employee.id === id ? { ...employee, ...updatedData } : employee));
            await this.fileService.saveToFile(employees);
            res.status(200).json({ message: 'Employee updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error updating employee', error });
        }
    }

    async deleteEmployee(req, res) {
        const { id } = req.params;
        try {
            let employees = await this.fileService.readFromFile();
            employees = employees.filter(employee => employee.id !== id);
            await this.fileService.saveToFile(employees);
            res.status(200).json({ message: 'Employee deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting employee', error });
        }
    }

    async getEmployees(req, res) {
        const { page = 1, limit = 10 } = req.query; // Default to page 1 and limit 10
        try {
            const employees = await this.fileService.readFromFile();
    
            // Calculate start and end indices for pagination
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
    
            // Paginate the employees array
            const paginatedEmployees = employees.slice(startIndex, endIndex);
    
            res.status(200).json({
                total: employees.length, // Total number of employees
                page: parseInt(page), // Current page
                limit: parseInt(limit), // Limit per page
                data: paginatedEmployees, // Paginated data
            });
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving employees', error });
        }
    }

    login(req, res) {
        const { username, password } = req.body;

        // Predefined credentials for simplicity
        const USERNAME = 'admin';
        const PASSWORD = 'password123';

        if (username === USERNAME && password === PASSWORD) {
            res.status(200).json({ message: 'Login successful', token: 'fake-jwt-token' });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    }
}

module.exports = EmployeeController;