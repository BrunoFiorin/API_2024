create database atividade;

use atividade;

CREATE TABLE cidades (
	id INT NOT NULL ,
	nome VARCHAR(50) NOT NULL,
    PRIMARY KEY ( id ) 
);

CREATE TABLE clientes (
	id INT NOT NULL ,
	nome VARCHAR(100) NOT NULL,
    altura DOUBLE,
    nascimento DATE,
    cidade_id INT,
    PRIMARY KEY(id),    
    FOREIGN KEY (cidade_id) REFERENCES cidades(id)
);

drop TABLE clientes;


CREATE TABLE pedidos (
	id INT NOT NULL ,
    horario DATETIME,
	cliente_id INT,  
    PRIMARY KEY(id),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);


CREATE TABLE pedidos_produtos (
	pedido_id INT,
    produto_id INT,
    preco DOUBLE,
	quantidade DOUBLE,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

CREATE TABLE produtos (
	id INT,
    nome VARCHAR(100),
    preco DOUBLE,
    quantidade DOUBLE,
    categoria_id INT,  
    PRIMARY KEY(id),
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

CREATE TABLE categorias (
	id INT,
    nome VARCHAR(100),
	PRIMARY KEY(id)
    );

CREATE TABLE produto (
	idProduto INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL ,
    preco DOUBLE ,
    quantidade DOUBLE ,
    codCategoria INT NOT NULL,
    PRIMARY KEY ( idProduto ) ,
    FOREIGN KEY (codCategoria) REFERENCES categoria(idCategoria)
);