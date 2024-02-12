-- Table Me
CREATE TABLE Me (   
    id INT PRIMARY KEY NOT NULL,
    firstname VARCHAR(100), 
    lastname VARCHAR(100), 
    email VARCHAR(100),
    phone VARCHAR(100),
    address VARCHAR(255), 
    city VARCHAR(100),
    country VARCHAR(100), 
    birthdate DATE, 
    description VARCHAR(255)
);

-- Table Project
CREATE TABLE Project (
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(255), 
    description VARCHAR(255), 
    picture VARCHAR(255), 
    date_created DATE, 
    date_update DATE, 
    enabled BOOLEAN
);

