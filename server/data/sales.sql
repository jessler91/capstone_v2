CREATE TABLE IF NOT EXISTS sales30_import (
    `Parent_ASIN` VARCHAR(10) CHARACTER SET utf8,
    `Child_ASIN` VARCHAR(10) CHARACTER SET utf8,
    `Title` VARCHAR(194) CHARACTER SET utf8,
    `Sessions` INT,
    `Session_Percentage` NUMERIC(5, 3),
    `Page_Views` INT,
    `Page_Views_Percentage` NUMERIC(5, 3),
    `Buy_Box_Percentage` NUMERIC(3, 0),
    `Units_Ordered` INT,
    `Units_Ordered_B2B` INT,
    `Unit_Session_Percentage` NUMERIC(5, 3),
    `Unit_Session_Percentage_B2B` NUMERIC(4, 3),
    `Ordered_Product_Sales` VARCHAR(11) CHARACTER SET utf8,
    `Ordered_Product_Sales_B2B` VARCHAR(9) CHARACTER SET utf8,
    `Total_Order_Items` INT,
    `Total_Order_Items_B2B` INT
);
INSERT INTO sales30_import VALUES
    ('B07KBG42GJ','B00BBD508C','Ancient Minerals Magnesium Bath Flakes of Pure Genuine Zechstein Chloride - Resealable Magnesium Supplement Bag That Will Outperform Leading Epsom Salts (8 lb)',8940,20.60,13390,20.96,99,7830,100,87.58,1.12,'$248,533.10','$3,165.33',6529,78),
    ('B07KBG42GJ','B005F1ATJQ','Ancient Minerals Magnesium Bath Flakes of Pure Genuine Zechstein Chloride - Resealable Magnesium Supplement Bag That Will Outperform Leading Epsom Salts (26.4 Ounce)',3634,8.37,5284,8.27,99,1666,21,45.84,0.58,'$17,549.79','$215.23',1470,19),
    ('B07GCSNT3H','B001AD0HL8','Ancient Minerals Magnesium Oil Spray Bottle of Pure Genuine Zechstein Magnesium Chloride - Topical Magnesium Supplement for Skin Application and Dermal Absorption (8 Fl Oz)',5077,11.70,7357,11.51,99,1997,19,39.33,0.37,'$40,119.79','$376.71',1882,18),
    ('B07KBGX7MS','B06XXR6PRD','Ancient Minerals Magnesium Lotion ULTRA with MSM - Pure Genuine Zechstein Magnesium Lotion Supplement with MSM for Topical Application (5oz)',1610,3.71,2421,3.79,99,979,19,60.81,1.18,'$22,751.69','$442.20',834,17),
    ('B07KBG42GJ','B06XXPLT2T','Ancient Minerals Magnesium Bath Flakes of Pure Genuine Zechstein Chloride - Resealable Magnesium Supplement Bag That Will Outperform Leading Epsom Salts (4.4 lb)',3230,7.44,4672,7.31,99,1304,16,40.37,0.50,'$27,591.24','$334.72',1211,15),
    ('B07KBQ3H33','B06XXP8YRL','Ancient Minerals Magnesium Lotion of Pure Genuine Zechstein Magnesium Chloride - Best uesd for Topical Skin Application on Sensitive Skin (5oz)',2621,6.04,3941,6.17,99,1769,20,67.49,0.76,'$37,352.48','$424.08',1509,14),
    ('B07GCSNT3H','B06XXN4T98','Ancient Minerals Magnesium Oil Spray Bottle of Pure Genuine Zechstein Magnesium Chloride - Topical Magnesium Supplement for Skin Application and Dermal Absorption (4oz)',1686,3.88,2346,3.67,99,564,14,33.45,0.83,'$7,132.73','$176.20',541,12),
    ('B07KBGGS5H','B07G7GK2N1','Enviromedica Terraflora Daily Care SBO Probiotic + Prebiotic Supplement - a Soil Based Shelf Stable Bacillus Spore Form Synbiotic formulated to Assist with Complete Gut Health (60ct)',2307,5.32,3359,5.26,99,843,10,36.54,0.43,'$43,598.90','$518.49',772,8),
    ('B07KBHFV3R','B00JFUD1OS','Ancient Minerals Magnesium Bath Flakes Ultra with OptiMSM - Resealable Magnesium Supplement Bag of Zechstein Chloride with Proven Better Absorption Than Epsom Bath Salt (1.65 lb)',2292,5.28,3216,5.03,99,1212,8,52.88,0.35,'$16,410.44','$106.85',909,7),
    ('B07K6WJJFJ','B00BN9PFUW','Ancient Minerals Goodnight Magnesium Lotion with Melatonin and OptiMSM - Night Cream of Topical Nighttime Moisturizing Lotion formulated for Bedtime Absorption (2.5oz)',912,2.10,1408,2.20,100,425,6,46.60,0.66,'$13,049.30','$182.90',377,6),
    ('B07KBCPBL3','B00X7RCW4A','Enviromedica Magnetic Clay Natural Detox Bath Cleanse - Ancient Sodium and Calcium Bentonite Clay Powder with Himalayan Pink Salt for Detoxification of Harmful Toxins and Environmental Allergens',1793,4.13,2638,4.13,99,390,6,21.75,0.33,'$16,515.44','$251.37',361,6),
    ('B07GCSNT3H','B06XXN4TNR','Ancient Minerals Magnesium Oil Refill Bottle of Pure Genuine Zechstein Magnesium Chloride - Topical Magnesium Supplement for Skin Application and Dermal Absorption (33.8oz)',727,1.67,1044,1.63,100,174,7,23.93,0.96,'$7,344.12','$290.17',157,6),
    ('B07GFFZBXV','B008JSJ9HU','Ancient Minerals Magnesium Oil Spray Ultra with MSM - a Pure Zechstein Topical Magnesium Chloride Supplement with The Added Benefits of OptiMSM (8oz)',1351,3.11,1889,2.96,99,314,5,23.24,0.37,'$7,296.90','$113.48',293,5),
    ('B082MT1MNN','B082MT873N','Enviromedica Terraflora Deep Immune SBO Probiotic + Prebiotic Supplement - a Soil Based Shelf Stable Bacillus Spore Form Synbiotic with LC-Plasma - a Powerful Immune Booster (60ct)',1343,3.09,2051,3.21,98,226,4,16.83,0.30,'$13,997.42','$249.85',190,4),
    ('B07KBDYKRK','B07H7VM5Q8','Enviromedica Tracheal Cartilage Collagen Supplement Capsules of Undenatured Type II Bovine Collagen Protein sourced from Grass Fed New Zealand Beef (120ct)',811,1.87,1233,1.93,100,299,3,36.87,0.37,'$12,363.21','$129.64',251,3),
    ('B00JIN7DVY','B00JIN7DVY','Ancient Minerals Magnesium Gel Ultra with OptiMSM and Aloe Vera - Topical Magnesium Gel Formula with MSM Best Used for Dermal Skin Absorption and Massage Therapy (8oz)',736,1.70,1036,1.62,98,318,2,43.21,0.27,'$7,301.49','$46.94',288,2),
    ('B07K7BT39Y','B07HZPZKNC','Ancient Minerals Magnesium Oil Spray Sensitive - All-New Sensitive Formula with Allantoin, Organic Chamomile, and Organic Aloe Vera (4oz)',467,1.08,701,1.10,100,155,2,33.19,0.43,'$1,913.86','$23.90',143,2),
    ('B07GFFZBXV','B06XXPSJGT','Ancient Minerals Magnesium Oil Spray Ultra with MSM - a Pure Zechstein Topical Magnesium Chloride Supplement with The Added Benefits of OptiMSM (4oz)',750,1.73,1087,1.70,99,219,1,29.20,0.13,'$2,985.57','$13.73',208,1),
    ('B07KBDN8M2','B07H7VBFF1','Enviromedica Grass-Fed Beef Liver Natural Energy Supplement Capsules of Freeze Dried, Pastured, New Zealand Bovine with Preformed Vitamin A (180ct)',681,1.57,1100,1.72,96,218,1,32.01,0.15,'$6,799.31','$29.95',193,1),
    ('B082XHGHM3','B082XHGHM3','Enviromedica Freeze-Dried Bone Marrow Complex with Cartilage and MCHA Whole Bone from Grass-Fed Pastured New Zealand Bovine (120ct)',264,0.61,427,0.67,99,52,1,19.70,0.38,'$1,620.58','$32.46',47,1),
    ('1450283543','1450283543','Transdermal Magnesium Therapy: A New Modality for the Maintenance of Health',198,0.46,429,0.67,55,22,0,11.11,0.00,'$397.71','$0.00',22,0),
    ('B07K6YVGVP','B001RJ7MRM','Ancient Minerals Magnesium Gel - Hydrating Magnesium Chloride Cream with Certified Organic Aloe Vera Barbadensis Leaf Juice (8oz)',73,0.17,98,0.15,63,8,0,10.96,0.00,'$163.08','$0.00',8,0),
    ('B07GFFZBXV','B06XXSYX2W','Ancient Minerals Magnesium Oil Ultra with OptiMSM, Refill 33.8 oz. - Pure Genuine Zechstein Magnesium Chloride Supplement with MSM - Best Topical Skin Application for Dermal Absorption',351,0.81,514,0.80,99,108,0,30.77,0.00,'$5,028.25','$0.00',96,0),
    ('B07K7BT39Y','B07JH84532','Ancient Minerals Magnesium Oil Spray Sensitive Plus - All-New Sensitive+ Formula Oil with Avena Sativa (Oat Aventhramides), Nopal Cactus, Organic Chamomile, and Allantoin (4oz)',191,0.44,311,0.49,100,27,0,14.14,0.00,'$417.94','$0.00',23,0),
    ('B07KY3N9SF','B07KY3N9SF','Ancient Minerals Inflatable Foot Bath Kit with Single-Use Magnesium Chloride Flakes Pouch - Great for Travel or at-Home Spa',162,0.37,222,0.35,100,31,0,19.14,0.00,'$642.16','$0.00',25,0),
    ('B07MR2MDW8','B07MR2MDW8','Ancient Minerals Magnesium Bath Flakes Single-Use Magnesium Chloride Pouches (0.33lb Bag, Pack of 6)',115,0.26,147,0.23,99,19,0,16.52,0.00,'$374.67','$0.00',13,0),
    ('B082MVF7Y9','B082MSTTPX','Enviromedica Terraflora Women''s Daily SBO Probiotic + Prebiotic Supplement - a Soil Based Bacillus Spore Form Synbiotic with Organic Cranberry to Support and a Healthy Urinary Tract (60ct)',268,0.62,348,0.54,98,20,0,7.46,0.00,'$1,035.58','$0.00',17,0),
    ('B082MTG5KS','B082MTLLRH','Enviromedica Terraflora Advanced Care SBO Probiotic + Prebiotic Supplement - a Soil Based Shelf Stable Bacillus Spore Synbiotic with Patented PreforPro Phage Complex (60ct)',458,1.06,671,1.05,97,80,0,17.47,0.00,'$4,976.98','$0.00',64,0),
    ('B082XJVB9S','B082XJVB9S','Enviromedica Grass-Fed Organ Complex: Freeze-Dried Beef Liver, Kidney, Heart, and Pancreas (150ct)',355,0.82,551,0.86,98,71,0,20.00,0.00,'$2,206.56','$0.00',66,0);