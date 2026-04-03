const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/employees.txt');

const saveToFile = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

const readFromFile = () => {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    }
    return [];
};

module.exports = {
    saveToFile,
    readFromFile
};