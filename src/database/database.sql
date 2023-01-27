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

--===================================

CREATE TABLE purchases (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    total_price REAL UNIQUE NOT NULL,
    paid INTEGER NOT NULL,
    delivered_at TEXT,
    buyer_id TEXT NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES users(id)
);

INSERT INTO purchases (id, total_price, paid, buyer_id)
VALUES
    ("purc001",5000,1,"u001"),
    ("purc002",3000,0,"u001"),
    ("purc003",4000,0,"u001");

INSERT INTO purchases (id, total_price, paid, delivered_at, buyer_id)
VALUES
    ("purc004",6000,1,DATETIME('2013-10-07 08:23:19.120'),"u002"),
    ("purc005",7000,0,DATETIME('2013-10-07 08:23:19.120'),"u003"),
    ("purc006",8000,1,DATETIME('2013-10-07 08:23:19.120'),"u004");

SELECT * FROM users
INNER JOIN purchases
ON purchases.buyer_id = users.id;

UPDATE purchases
SET delivered_at = DATETIME('now')
WHERE id = "purc002";

SELECT * FROM purchases;

DROP TABLE purchases;
