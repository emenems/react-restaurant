CREATE DATABASE IF NOT EXISTS myDatabase;

USE myDatabase;

CREATE TABLE IF NOT EXISTS `demo_restaurant_users` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(50),
    surname VARCHAR(50),
    role VARCHAR(10) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `demo_restaurant_menu` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(5,2) NOT NULL,
    menu_type VARCHAR(10) NOT NULL, -- daily or regular
    count INT,
    details VARCHAR(255),
    allergy_list VARCHAR(255),
    valid_from DATE,
    valid_to DATE
);

CREATE TABLE IF NOT EXISTS `demo_restaurant_orders` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    menu_id INT NOT NULL,
    count INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); -- planetscale does not allow foreign keys by default
--FOREIGN KEY (menu_id) REFERENCES demo_restaurant_menu(id)


--INSERT INTO `demo_restaurant_users` (username, password, name, surname)
--VALUES ('admin', SHA2('adminpassword', 256), 'Admin', 'User');


