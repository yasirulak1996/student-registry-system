CREATE DATABASE your_database;

USE your_database;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  birthday DATE,
  sex ENUM('male', 'female'),
  address VARCHAR(255),
  phone_number VARCHAR(15)
);