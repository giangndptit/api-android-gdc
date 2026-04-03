# Employee Management System

This project is a simple Node.js application for managing employee records. It provides APIs to add, edit, delete, and retrieve employee information, with data stored in a text file.

## Project Structure

```
employee-management
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains the employee controller
│   │   └── employeeController.js
│   ├── routes                # Contains the routes for employee management
│   │   └── employeeRoutes.js
│   ├── services              # Contains services for file operations
│   │   └── fileService.js
│   └── data                 # Contains the employee data file
│       └── employees.txt
├── package.json              # NPM configuration file
├── .gitignore                # Specifies files to ignore by Git
└── README.md                 # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd employee-management
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the application:
   ```
   node src/app.js
   ```

## API Endpoints

- **Add Employee**
  - **Endpoint:** `POST /employees`
  - **Request Body:** `{ "name": "John Doe", "position": "Developer", "salary": 50000 }`
  - **Description:** Adds a new employee record.

- **Edit Employee**
  - **Endpoint:** `PUT /employees/:id`
  - **Request Body:** `{ "name": "John Doe", "position": "Senior Developer", "salary": 60000 }`
  - **Description:** Edits an existing employee record.

- **Delete Employee**
  - **Endpoint:** `DELETE /employees/:id`
  - **Description:** Deletes an employee record.

- **Get Employees**
  - **Endpoint:** `GET /employees`
  - **Description:** Retrieves all employee records.

## File Storage

Employee records are stored in `src/data/employees.txt` in a simple text format. Each record is saved as a line in the file.

## License

This project is licensed under the MIT License.