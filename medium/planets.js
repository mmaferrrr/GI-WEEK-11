const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, 'planets.txt');


fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    console.log('Planets in the solar system:');
    console.log(data);
});

//\\