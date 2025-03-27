CREATE DATABASE truyum;
USE truyum;

CREATE TABLE menu_items(
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    active ENUM('Yes', 'No') NOT NULL,
    date_of_launch DATE NOT NULL,
    category VARCHAR(100) NOT NULL,
    free_delivery ENUM('Yes', 'No') NOT NULL
);

CREATE TABLE user(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL
);

CREATE TABLE cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    menu_item_id INT,
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (menu_item_id) REFERENCES menu_item(item_id)
);

-- TYUC001 --

INSERT INTO menu_item (name, price, active, date_of_launch, category, free_delivery) VALUES
('Sandwich', 99.00, Yes, '2017-03-15', 'Main Course', Yes),
('Burger', 129.00,Yes , '2017-12-23', 'Main Course', No),
('Pizza', 149.00,Yes , '2017-08-21', 'Main Course', No),
('French Fries', 57.00, Yes, '2017-07-02', 'Starters', Yes);
('Chocolate Brownie', 32.00, Yes, '2022-11-02', 'Dessert', Yes);


SELECT * FROM menu_items;

-- TYUC002 --

SELECT * FROM menu_items WHERE active='Yes' AND date_of_launch<=CURDATE();

-- TYUC003 --

SELECT * FROM menu_items WHERE item_id=3;

UPDATE menu_items SET price = 99.00 WHERE item_id=3;

-- TYUC004 --

INSERT INTO users VALUES ('Teja');
INSERT INTO users VALUES ('Sai');

INSERT INTO cart(user_id,menu_item_id) VALUES
(2,1),
(2,2),
(2,4);

-- TYUC005 --

SELECT m.name,m.price
FROM cart c
JOIN menu_item m on c.menu_item_id=m.item_id
WHERE c.user_id=2;

SELECT SUM(m.price) AS total_price
FROM cart c
JOIN menu_item m on c.menu_item_id=m.item_id
WHERE c.user_id=2;

-- TYUC006 --

DELETE FROM cart WHERE user_id=2 AND menu_item_id=1;