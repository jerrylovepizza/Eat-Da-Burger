-- USE database
-- INSERT INTO table (existing col1, exist col2)
-- VALUES (new data1, new data2), (new data3, new data4)

USE burgers_db;
INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ("Triple Cheese Burger", false),
    ("Crispy Bancon Burger", false),
    ("Meat Collection Burger", false),
    ("The Monster Burger", false),
    ("Double Fish Filet", false);