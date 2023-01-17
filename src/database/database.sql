-- Active: 1673889359453@@127.0.0.1@3306

CREATE TABLE users (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO users (id, name, email, password)
VALUES("u001", "Igor", "igor@gmail.com", "123456")
VALUES("u002", "Vanessa", "vanessa@gmail.com", "654321")
VALUES("u003", "Hugo", "hugo@gmail.com", "164352");

INSERT INTO users (id,name,email,password)
VALUES("u004", "Ana", "ana@gmail.com", "139728");

DELETE FROM users
WHERE id = "u002";

UPDATE users
SET name = "Jeremias"
WHERE id = "u002";



SELECT * FROM users;

SELECT COUNT(*) as usuariosPorNomeEEmail, name, email
FROM users
GROUP BY name,email;


--==========================================================

CREATE TABLE products(
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);

INSERT INTO products (id, name, price, category)
VALUES("p001", "Galaxy S20", 5000, "Celphones")
VALUES("p002", "Motorola Edge", 3200, "Celphones")
VALUES("p003", "LG k20", 1300, "Celphones");

INSERT INTO products (id, name, price, category)
VALUES("p004", "Iphone", 6800, "Celphones");



SELECT * FROM products
WHERE name LIKE "Motorola%";

UPDATE products
SET price = 2300
WHERE id = "p002";


SELECT * FROM products;

SELECT * FROM products
ORDER BY price ASC;