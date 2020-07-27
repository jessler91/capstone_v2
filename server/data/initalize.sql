-- Initialize Checkpoint#2 Database
-- CREATE DATABASE checkpoint2;
-- SELECT DATABASE();
-- USE checkpoint2;



-- Admin users login table,
-- Will store user_id, username, and bcrypt'ed hashed password in this table 
CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  PRIMARY KEY (user_id)
);


INSERT INTO users
	(username, password)
VALUES 
  ("testuser1","password"),
  ("testuser2","seCu4ePass49!");

SELECT * FROM users;


-- This is the primary working table "products" table
-- Will create a web form for a user to submit items into this table
DROP TABLE products;

CREATE TABLE products (
  db_products_id INT NOT NULL AUTO_INCREMENT,
  merchant_sku VARCHAR(50) NOT NULL,
  asin_sku VARCHAR(50) NOT NULL,
  display_name VARCHAR(50),
  date_created VARCHAR(50),
  PRIMARY KEY (db_products_id)
);

INSERT INTO products
	(merchant_sku, asin_sku, display_name, date_created)
VALUES 
  ("AMF-1-FBA","B00GHSY86","Magnesium Flakes 1lbs","todays date"),
  ("AMF-4-FBA","B00GHSYGH","Magnesium Flakes 4lbs","todays date"),
  ("AMF-8-FBA","B00GHSYBC","Magnesium Flakes 8lbs","todays date");
  ("sku","....",".....","....");


SELECT * FROM products;





-- This is the secondary working table "products-info" table
-- Some of the fields in this table will come from an express API call,
-- and some are just index references in the database,
-- the pallet_qty and case_qty are supplemental for version2 of the app 
CREATE TABLE product_info (
  db_info_id INT NOT NULL AUTO_INCREMENT,
  merchant_sku VARCHAR(50) NOT NULL,
  asin_sku VARCHAR(50) NOT NULL,
  fnsku VARCHAR(50),
  amz_title VARCHAR(200),
  amz_price INT,
  case_qty INT,
  pallet_qty INT,
  PRIMARY KEY (db_info_id),
  FOREIGN KEY (merchant_sku)
  REFERENCES products (merchant_sku)
);

INSERT INTO product_info
	(merchant_sku, product_title, product_price, case_qty, pallet_qty)
VALUES 
  ("AMF-1-FBA","B00GHSY86","n/a","n/a","n/a","n/a"),
  ("AMF-4-FBA","B00GHSYGH","n/a","n/a","n/a","n/a"),
  ("AMF-8-FBA","B00GHSYBC","n/a","n/a","n/a","n/a");
  




CREATE TABLE fba_inventory_snapshop (
  inv_snapshot_id INT NOT NULL AUTO_INCREMENT,
  merchant_sku VARCHAR(50) NOT NULL,
  warehouse_qty INT,
  fulfillable_qty INT,
  total_qty INT,
  inbound_working INT,
  inbound_shipped INT,
  inbound_recieving INT,
  timestamp VARCHAR(50),
  PRIMARY KEY (inv_snapshot_id),
  FOREIGN KEY (merchant_sku) REFERENCES products (merchant_sku)
);


INSERT INTO fba_inventory_snapshop
	(merchant_sku, warehouse_qty, fulfillable_qty, total_qty, timestamp)
VALUES 
  ("AMF-1-FBA","n/a","n/a","n/a",timestamp),
  ("AMF-4-FBA","n/a","n/a","n/a",timestamp),
  ("AMF-8-FBA","n/a","n/a","n/a",timestamp);
 




CREATE TABLE fba_product_sales (
  product_sales_id INT NOT NULL AUTO_INCREMENT,
  product_asin INT NOT NULL,
  total_sessions VARCHAR(50),
  units_ordered VARCHAR(50),
  conversion_rate VARCHAR(50),
  total_revenue VARCHAR(50),
  date_start VARCHAR(50),
  date_end VARCHAR(50),
  PRIMARY KEY (product_sales_id),
  FOREIGN KEY (product_asin) REFERENCES product_info (product_asin)
);



INSERT INTO fba_product_sales
	(asin_sku, total_sessions, units_ordered, date_start, date_end)
VALUES 
  ("B00GHSY86","n/a","n/a","n/a","n/a"),
  ("B00GHSYGH","n/a","n/a","n/a","n/a"),
  ("B00GHSYBC","n/a","n/a","n/a","n/a");