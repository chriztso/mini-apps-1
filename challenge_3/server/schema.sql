CREATE DATABASE customers;

USE customers;

CREATE TABLE customers(
id INT AUTO_INCREMENT PRIMARY KEY, 
name varchar(40) ,
email varchar(40) , 
password varchar(40) , 
address varchar(40), 
phonenumber varchar(40), 
creditcard varchar(40), 
expiration varchar(40)
);