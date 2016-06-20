CREATE DATABASE db_blog;

drop table if exists user;
drop table if exists role;
drop table if exists comment;
drop table if exists article;
drop table if exists category;

CREATE TABLE role(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50)
);

CREATE TABLE user(
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50),
  password VARCHAR(125),
  email VARCHAR(125),
  role_id INT,
  constraint role_id_FK foreign key(role_id) references role(id)
);

CREATE TABLE category(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50)
);

CREATE TABLE article(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(125),
  content TEXT,
  articleStatus INT,
  createTime BIGINT(20),
  deleted BIT(1),
  category_id INT,
  user_id INT,
  constraint category_id_FK foreign key(category_id) references category(id),
  constraint user_id_FK foreign key(user_id) references user(id)
);

CREATE TABLE comment(
  id INT PRIMARY KEY AUTO_INCREMENT,
  content TEXT,
  ip VARCHAR(64),
  username VARCHAR(50),
  email VARCHAR(125),
  createTime BIGINT(20),
  deleted BIT(1),
  article_id INT,
  constraint article_id_FK foreign key(article_id) references article(id)
);

insert into role (name) values ('admin');
insert into role (name) values ('guest');

insert into user (username, password, email, role_id) values ('admin', md5('admin'), '123@qq.com', 1);

