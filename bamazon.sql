DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
item_id INTEGER (11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR (75),
department_name VARCHAR (50),
price INTEGER (10),
stock_quantity INTEGER (10),
primary key (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Couch', 'Furniture', 100, 13);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Table', 'furniture', 130, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Bike', 'Toys', '50', '35'); 
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Eyeglases', 'Accesories', '80', '30');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Laptop', 'Technology', '850', '28');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Shirt', 'Apparel', '25', '45');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Scooter', 'Toys', '35', '33');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Microwave', 'Appliance', '300', '8'); 
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Dishwasher', 'Appliance', '500', '9');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Pencil', 'Office Supplies', '1', '1200'); 

SELECT * FROM products.stock_quantity;
      
       
       
       
       