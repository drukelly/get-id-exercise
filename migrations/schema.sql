create database if not exists nba_players;
use nba_players;
create table if not exists players (id int not null auto_increment, name char(30) not null, jersey_number varchar(10), image text not null, primary key (id));