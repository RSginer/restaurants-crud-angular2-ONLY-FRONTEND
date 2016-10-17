CREATE DATABASE IF NOT EXISTS webapp;
USE webapp;

CREATE TABLE restaurantes(
id       int(255) auto_increment not null,
nombre   varchar(255),
direccion  TEXT,
descripcion TEXT,
imagen   varchar(255),
precio  varchar(255),
CONSTRAINT pk_restaurantes PRIMARY KEY(id)
)ENGINE=InnoDb;