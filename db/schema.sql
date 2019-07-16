-- SCHEMA
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id INT AUTO_INCREMENT NOT NULL ,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
    -- id 设置成 PRIMARY KEY 仍然需要再设 AUTO_INCREMENT !!

/*
主键 (primary key) 能够唯一标识表中某一行的属性或属性组。一个表只能有一个主键，但可以有多个候选索引。主键常常与外键构成参照完整性约束，防止出现数据不一致。主键可以保证记录的唯一和主键域非空，数据库管理系统对于主键自动生成唯一索引，所以主键也是一个特殊的索引。
外键（foreign key） 是用于建立和加强两个表数据之间的链接的一列或多列。外键约束主要用来维护两个表之间数据的一致性。简言之，表的外键就是另一表的主键，外键将两表联系起来。一般情况下，要删除一张表中的主键必须首先要确保其它表中的没有相同外键（即该表中的主键没有一个外键和它相关联）。
索引 (index) 是用来快速地寻找那些具有特定值的记录。主要是为了检索的方便，是为了加快访问速度， 按一定的规则创建的，一般起到排序作用。所谓 唯一性索引，这种索引和前面的 “普通索引” 基本相同，但有一个区别：索引列的所有值都只能出现一次，即必须唯一。
    总结：
1. 主键一定是唯一性索引，唯一性索引并不一定就是主键。
2. 一个表中可以有多个唯一性索引，但只能有一个主键。
3. 主键列不允许空值，而唯一性索引列允许空值。
4. 主键可以被其他字段作外键引用，而索引不能作为外键引用。
*/