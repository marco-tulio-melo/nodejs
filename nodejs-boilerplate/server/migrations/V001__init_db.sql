create database skywalker;
create user 'skywalker'@'localhost' identified by 'skywalker';
grant all privileges on * . * to 'skywalker'@'localhost';
flush privileges;
