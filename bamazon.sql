-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "animals_db" database --
CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect animals_db --
USE bamazon_db;

CREATE TABLE products (
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,

  product_name VARCHAR(60),

  department_name VARCHAR(60),

  price INTEGER(20),

  stock_quantity INTEGER(10) NOT NULL,
  
  PRIMARY KEY (item_id)
);

INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ( "The Land That Time Forgot", "Books", 3, 150), 
( "The People That Time Forgot", "Books", 2, 200), 
( "Out of Time's Abyss", "Books", 2, 100), 
( "At the Earth's Core", "Books", 4, 75), 
( "Pellucidar", "Books", 3, 125), 
( "Tanar of Pellucidar", "Books", 3, 45), 
( "A Princess of Mars", "Books", 6, 75), 
( "The Gods of Mars", "Books", 5, 80), 
( "The Warlord of Mars", "Books", 5, 300), 
( "Beyond Thirty", "Books", 3, 160), 
( "The Adventures of Tarzan", "Movies", 10, 250), 
( "The Legend of Tarzan", "Movies", 14, 130);