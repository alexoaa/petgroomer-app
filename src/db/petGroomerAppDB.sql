CREATE DATABASE petGroomerApp;
USE petGroomerApp;

CREATE TABLE cliente (
	id_CL INT AUTO_INCREMENT PRIMARY KEY,
	nombre_CL VARCHAR(50) NOT NULL,
    nombre_mascota_CL VARCHAR (50) NOT NULL,
    raza_mascota_CL VARCHAR (60) NOT NULL,
    email_CL VARCHAR(50) NOT NULL,
    numero_telefono_CL INT NOT NULL,
    segundo_num_tel_CL INT
);
DROP TABLE cita;
DROP TABLE cliente;

CREATE TABLE cita (
	id_cita_C INT AUTO_INCREMENT PRIMARY KEY,
	nombre_cliente_C VARCHAR(50) NOT NULL,
    nombre_mascota_C VARCHAR (50) NOT NULL,
    raza_mascota_C VARCHAR (60) NOT NULL,
    tamano_mascota_C VARCHAR (50) NOT NULL,
    numero_telefono_C INT NOT NULL,
    segundo_num_tel_C INT,
    servicio_C VARCHAR (60) NOT NULL,
    fecha_C DATE NOT NULL,
    hora_C TIME NOT NULL,
    precio_C INT NOT NULL
);

CREATE TABLE cita (
	id_cita_C INT AUTO_INCREMENT PRIMARY KEY,
	nombre_cliente_C VARCHAR(50) NOT NULL,
    nombre_mascota_C VARCHAR (50) NOT NULL,
    raza_mascota_C VARCHAR (60) NOT NULL,
    tamano_mascota_C VARCHAR (50) NOT NULL,
    numero_telefono_C INTEGER NOT NULL
);

DESCRIBE cita;

SELECT * FROM cita;

INSERT INTO cita (
	nombre_cliente_C,
    nombre_mascota_C,
    raza_mascota_C,
    tamano_mascota_C,
    numero_telefono_C
    ) 
VALUES ( 'Kakas', 'Hashi', 'ChowChow', 'Mediano', 551048);