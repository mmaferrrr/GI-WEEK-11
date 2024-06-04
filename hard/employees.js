const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3003;

const employeesFilePath = path.join(__dirname, 'employees.json');

const getEmployees = () => {
    const data = fs.readFileSync(employeesFilePath, 'utf8');
    return JSON.parse(data);
};


app.get('/', (req, res) => {
    res.send('Welcome to the Employee API! Use /employees to get all employees data.');
});

app.get('/employees', (req, res) => {
    console.log('GET /employees');
    const employees = getEmployees();
    res.json(employees);
});


app.get('/employees/:employeeID', (req, res) => {
    console.log(`GET /employees/${req.params.employeeID}`);
    const employeeID = parseInt(req.params.employeeID, 10);
    const employees = getEmployees();
    const employee = employees.find(emp => emp.employeeID === employeeID);

    if (employee) {
        res.json(employee);
    } else {
        res.status(404).json({ error: 'Employee not found' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
