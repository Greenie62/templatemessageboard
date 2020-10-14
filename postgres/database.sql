CREATE DATABASE whatsnewsdb;


CREATE TABLE clients(
    id SERIAL,
    username VARCHAR(255),
    password VARCHAR(255),
    interest VARCHAR(100)
);

CREATE TABLE comments(
    commentId SERIAL,
    comment VARCHAR(1000),
    rating INTEGER[],
    created_at VARCHAR(255)
);