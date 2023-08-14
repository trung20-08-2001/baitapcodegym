drop database Thi_thuc_hanh_Md3; 
create database Thi_thuc_hanh_Md3;
use Thi_thuc_hanh_Md3;

create table Student(
idStudent int auto_increment primary key,
idClass int ,
nameStudent varchar(50),
address varchar(50),
birthday date,
email varchar(50),
phone varchar(50),
foreign key(idclass) references class(idclass)
);

create table class(
idclass int primary key,
nameclass varchar(20)
);


insert into class values
(1,"C0323H1") ,
(2,"C0423H1") ,
(3,"C0523H1") ,
(4,"C0623H1") ;



insert into student(idClass,namestudent,address,birthday,email,phone) values
(1,"A","Hà Nội","2001-08-12","A@gmail.com","123456789"),
(1,"B","Hà Nội","2001-08-12","B@gmail.com","123456789"),
(1,"C","Hà Nội","2001-08-12","C@gmail.com","123456789"),
(2,"A","Hà Nội","2001-08-12","A@gmail.com","123456789"),
(2,"B","Hà Nội","2001-08-12","B@gmail.com","123456789"),
(2,"C","Hà Nội","2001-08-12","C@gmail.com","123456789"),
(3,"A","Hà Nội","2001-08-12","A@gmail.com","123456789"),
(3,"B","Hà Nội","2001-08-12","B@gmail.com","123456789"),
(3,"C","Hà Nội","2001-08-12","C@gmail.com","123456789"),
(4,"A","Hà Nội","2001-08-12","A@gmail.com","123456789"),
(4,"B","Hà Nội","2001-08-12","B@gmail.com","123456789"),
(4,"C","Hà Nội","2001-08-12","C@gmail.com","123456789");
SELECT * FROM Student  JOIN class on Student.idClass=class.idClass           WHERE  nameStudent like "%a%"; 



