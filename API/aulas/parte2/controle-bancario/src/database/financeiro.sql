
/*tabela banco*/
CREATE  TABLE financeiro.tbl_banco ( 
	id                   INT  NOT NULL   AUTO_INCREMENT  PRIMARY KEY,
	codigo               CHAR(4)  NOT NULL     ,
	nome                 VARCHAR(50)  NOT NULL     
 );

ALTER TABLE financeiro.tbl_banco MODIFY id INT  NOT NULL  AUTO_INCREMENT COMMENT 'Idenficador sequencial';
ALTER TABLE financeiro.tbl_banco MODIFY codigo CHAR(4)  NOT NULL   COMMENT 'Codigo do banco junto ao banco central';
ALTER TABLE financeiro.tbl_banco MODIFY nome VARCHAR(50)  NOT NULL   COMMENT 'Nome do banco';

/* tabela Agencia */
CREATE TABLE `tbl_agencia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigo` varchar(4) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `endereco` varchar(100) NOT NULL,
  `id_banco` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tbl_agencia_FK` (`id_banco`),
  CONSTRAINT `tbl_agencia_FK` FOREIGN KEY (`id_banco`) REFERENCES `tbl_banco` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



/*tabela usuario*/
CREATE TABLE `tbl_usuario` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Identificador numério',
  `nome_completo` varchar(100) NOT NULL,
  `login` varchar(30) NOT NULL COMMENT 'nome do usuario para acessar o sistema',
  `password` varchar(15) NOT NULL DEFAULT (_utf8mb4'banco1234') COMMENT 'senha do usuário para acessar o sistema',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Define as pessoas que poderão utilizar o sistema';


/* tabela correntista */
CREATE TABLE `tbl_correntista` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome_completo` varchar(100) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `estado_civil` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Armazena os correntista do sistema bancário';


/* tabela conta */
CREATE TABLE `tbl_conta` (
  `numero` varchar(10) NOT NULL COMMENT 'Número da conta perante o banco',
  `saldo` decimal(10,0) DEFAULT '0' COMMENT 'Armazena o saldo da conta de um correntista',
  `limite_especial` decimal(10,0) DEFAULT '0' COMMENT 'Armazena o valor do limite extra do correntista',
  `id_correntista` int NOT NULL COMMENT 'Correntista ao qual a conta está vinculada',
  `id_agencia` int NOT NULL COMMENT 'Agencia a qual a conta está vinculada',
  PRIMARY KEY (`id_correntista`,`id_agencia`),
  KEY `tbl_conta_FK` (`id_agencia`),
  CONSTRAINT `tbl_conta_FK` FOREIGN KEY (`id_agencia`) REFERENCES `tbl_agencia` (`id`),
  CONSTRAINT `tbl_conta_FK_Correntista` FOREIGN KEY (`id_correntista`) REFERENCES `tbl_correntista` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Armazena as contas bancárias de um correntista';