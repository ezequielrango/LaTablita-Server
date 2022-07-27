CREATE DATABASE IF NOT EXISTS LaTablita;
USE LaTablita;

CREATE TABLE position (
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR(25) NOT NULL,
   PRIMARY KEY(id)
   );

CREATE TABLE stores(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL ,
    city VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
    );
   
CREATE TABLE Staff (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    store_id INT NOT NULL,
    position_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (position_id) REFERENCES position (id),
    FOREIGN KEY (store_id) REFERENCES stores(id)
    );

CREATE TABLE customers (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    email VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
    );

CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT,
    store_id INT NOT NULL,
    staff_id INT NOT NULL,
    customer_id INT NOT NULL,
    status BOOLEAN,
    PRIMARY KEY (id),
    FOREIGN KEY (store_id) REFERENCES stores(id),
    FOREIGN KEY (staff_id) REFERENCES staff(id),
    FOREIGN KEY (customer_id) REFERENCES customers(id)
    );
    
CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    price INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE categories (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(25)  NOT NULL,
    PRIMARY KEY(id)
    );
    
CREATE TABLE stocks (
	id INT NOT NULL AUTO_INCREMENT,
    quantity INT NOT NULL,
    store_id INT NOT NULL,
    product_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (store_id) REFERENCES stores(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE order_products (
	id INT NOT NULL AUTO_INCREMENT,
    quantity INT NOT NULL,
    total FLOAT NOT NULL,
    order_id INT NOT NULL,
    product_id INT NOT NULL ,
    PRIMARY KEY(id),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

    