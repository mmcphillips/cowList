DROP DATABASE cows;
CREATE DATABASE cows;

USE cows;

CREATE TABLE cowdesc (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description varchar(250) NOT NULL,
  PRIMARY KEY (id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
	use.exe
 *  to create the database and the tables.*/

