create table tbl_log(
id int primary key auto_increment,
    ip_address varchar(15),
    log_date varchar(50),
    activity varchar(100),
    user_id int
);

create table tbl_ldap(
id int primary key auto_increment,
    host varchar(50),
    port int,
    filter_by varchar(50),
    organization varchar(100),
    country char(3)
);

create table tbl_user(
id int primary key AUTO_INCREMENT,
    username varchar(50),
    department varchar(50),
    type varchar(20),
    user_status varchar(10)
);

create table tbl_flipbook(
id int PRIMARY key AUTO_INCREMENT,
    filename varchar(100),
    public_link varchar(100),
    date_uploaded varchar(50),
    flipbook_status varchar(20),
    user_id int
);