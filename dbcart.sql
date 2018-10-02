create database dbcart;

use dbcart;

create table products (
	prod_id int primary key auto_increment,
	prod_name varchar(25) not null,
	prod_description varchar(250) not null,
	prod_price int
);

create table order_status (
	orst_id int primary key,
	orst_name varchar(25)
);

insert into order_status(orst_id, orst_name) values 
	(0, 'Waiting'),
	(1, 'Success'),
	(2, 'In process'),
	(3, 'Cancelled');

create table customers (
	cust_id int primary key auto_increment,
	cust_rut varchar(10) not null,
	cust_rut_dv varchar(1) not null,
	cust_name varchar(100) not null
);

insert into customers(cust_rut, cust_rut_dv, cust_name) values 
	('11111111', '1', 'Default User');

create table orders (
	orde_id int primary key auto_increment,
	orst_id int,
	cust_id int,
	orde_fec_ini datetime,
	orde_fec_end datetime
);

alter table orders
add foreign key (orst_id) references order_status(orst_id),
add foreign key (cust_id) references customers(cust_id);

create table rel_orde_prod (
	orde_id int,
	prod_id int
);

alter table rel_orde_prod
add foreign key (orde_id) references orders(orde_id),
add foreign key (prod_id) references products(prod_id),
add primary key (orde_id, prod_id);

create table messages (
	mssg_id int primary key auto_increment,
	mssg_user varchar(100),
	mssg_message varchar(500),
	mssg_date datetime,
	orde_id int
);

alter table messages
add foreign key (orde_id) references orders(orde_id);