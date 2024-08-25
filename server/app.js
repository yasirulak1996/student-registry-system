const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


app.post('/insert', (request, response) => {
    const { name, birthday, sex, address, phone_number } = request.body; 
    console.log("request.body", request.body);

    const db = dbService.getDbServiceInstance();

    // Create an SQL query to insert the data into your table
    const query = 'INSERT INTO students (name, birthday, sex, address, phone_number) VALUES (?, ?, ?, ?, ?)';
    
    // Execute the query with the provided data
    db.query(query, [name, birthday, sex, address, phone_number], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            response.status(500).json({ error: 'An error occurred while inserting data.' });
        } else {
            console.log('Data inserted successfully:', result);
            response.json({ message: 'Data inserted successfully', data: result });
        }
    });
});

// read
const getAllDataFromTable = () => {
    const db = dbService.getDbServiceInstance();
    return db.getAllData(); // Assuming `getAllData` is a method that fetches all data from the database
};

// Route handler for '/getAll'
app.get('/getAll', (request, response) => {
    // Call the function to get all data
    const result = getAllDataFromTable();

    result
        .then(data => response.json({ data: data }))
        .catch(err => {
            console.log(err);
            response.status(500).send('Error retrieving data');
        });
});


app.listen(process.env.PORT, () => console.log('app is running'));