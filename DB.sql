create schema ecommdashboard;

CREATE TABLE ecommdashboard.users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(45) NOT NULL,
  user_email VARCHAR(45) NOT NULL,
  user_password VARCHAR(45) NOT NULL);