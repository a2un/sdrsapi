DROP DATABASE IF EXISTS SPDR;


CREATE DATABASE SPDR;

USE SPDR;

CREATE TABLE ETFTickers 
(
  Holding_id int(10) AUTO_INCREMENT, 
  Holdings varchar(50),
  Country_Weights int(50),
  Sector_Weights int(50), 
  ETF_name varchar(50), 
  Fund_Descr varchar(50),
  PRIMARY KEY (Holding_id)
);

