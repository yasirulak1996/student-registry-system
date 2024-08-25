/*const mysql = require('mysql2');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    //console.log('db ' + connection.state);
});

class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM students;";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                });
            });
            // console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    // Removed 'async function', use method syntax for class method
    async insertNewdata(name, birthday, sex, address, phone) {
        try {
            const dateAdded = new Date();
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO students (name, birthday, sex, address, phone) VALUES (?, ?, ?, ?, ?);";
    
                connection.query(query, [name, birthday, sex, address, phone], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                });
            });

            return {
                id: insertId,
                name: name,
                birthday: birthday,
                sex: sex,
                address: address,
                phone: phone,
              
            };
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = DbService;*/

// dbService.js
const mysql = require('mysql2');

class DbService {
    static instance = null;

    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',   // Replace with your database host
            user: 'root',        // Replace with your database user
            password: 'Hashan1996@',        // Replace with your database password
            database: 'registry'  // Replace with your database name
        });

        this.connection.connect((err) => {
            if (err) {
                console.error('Error connecting to database:', err);
                return;
            }
            console.log('Connected to the database.');
        });
    }

    static getDbServiceInstance() {
        return this.instance ? this.instance : new DbService();
    }

    query(sql, params, callback) {
        this.connection.query(sql, params, callback);
    }

    getAllData() {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM students'; // Replace with your actual table name
            this.connection.query(query, (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    }
}

const dbService = {
    getDbServiceInstance: function() {
        // Returns an instance of the database connection/service
        return {
            getAllData: function() {
                // This method should return a Promise that resolves with the data from your database
                return new Promise((resolve, reject) => {
                    // Example: fetching data from a database
                    const data = []; // Replace with actual database fetching logic
                    resolve(data);
                });
            }
        };
    }
};


module.exports = DbService;
