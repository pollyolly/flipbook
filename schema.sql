DROP TABLE IF EXISTS tbl_logs;
create table tbl_logs (
id int AUTO_INCREMENT PRIMARY KEY,
ip_address varchar(50),
username varchar(50),
log_date date,
activity varchar(200)
);
DROP TABLE IF EXISTS tbl_ldap;
create table tbl_ldap (
id int AUTO_INCREMENT PRIMARY KEY,
host varchar(50),
port char(3),
filter_by date,
country char(2)
);
DROP TABLE IF EXISTS tbl_flipbook;
create table tbl_flipbook (
id int AUTO_INCREMENT PRIMARY KEY,
user_id int,
filname varchar(500),
public_link varchar(500),
date_upload date,
status varchar(20)
);
DROP TABLE IF EXISTS tbl_template;
create table tbl_template (
id int AUTO_INCREMENT PRIMARY KEY,
title varchar(500),
abstract varchar(500),
flipbooklink varchar(500),
flipbook_title varchar(500),
college_abbrevation varchar(500),
department varchar(500),
years varchar(500),
subject_field varchar(1000),
subject_sub_field varchar(1000)
);
