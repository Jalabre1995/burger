CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE  burgers(
id INT AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(30) DEFAULT NULL,
devoured BOOLEAN
);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourRootPassword'