-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: NICEPLANET
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `monitoramentos`
--

DROP TABLE IF EXISTS `monitoramentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `monitoramentos` (
  `idMonitoramento` int NOT NULL AUTO_INCREMENT,
  `dataMonitoramento` datetime NOT NULL,
  `analista` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `resultado` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `parecerAnalise` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `idVinculo` int DEFAULT NULL,
  PRIMARY KEY (`idMonitoramento`),
  KEY `idMonitoramento` (`idMonitoramento`),
  KEY `monitoramentos_FK` (`idVinculo`),
  CONSTRAINT `monitoramentos_FK` FOREIGN KEY (`idVinculo`) REFERENCES `vinculo` (`idVinculo`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monitoramentos`
--

LOCK TABLES `monitoramentos` WRITE;
/*!40000 ALTER TABLE `monitoramentos` DISABLE KEYS */;
INSERT INTO `monitoramentos` VALUES (1,'2022-12-10 10:22:34','Celio Gomes','Bloqueado','O perímetro do SICAR QQ-0001559-47ABABC582DD473BBAABCD145F51E567 possui sobreposição superior a 10% a outros perímetros de propriedades rurais. Solicitar ao proprietário procurar soluções junto a SEMA. Favor encaminhar documentos oficiais, tais como; georreferenciamento, matricula da propriedade, memorial descritivo da propriedade registrado em cartório, protocolado no INCRA e outros documentos oficiais da propriedade.\nPor meio da documentação em anexo não é possível confirmar a posse informada no cadastro em análise. Desta forma, a análise em questão se atenta as informações disponibilizadas no cadastro e nos dados geográficos do CAR anexado.',1),(2,'2022-12-11 10:22:34','Elias Ribeiro','Liberado','O perímetro foi confeccionado a partir das informações apresentadas no Recibo de Inscrição do Imóvel Rural no SICAR Nacional QQ-0001559-47ABABC582DD473BBAABCD145F51E567, tendo como base de informação as coordenadas geográficas apresentadas neste documento',2),(3,'2022-12-12 10:22:34','Denys Fernandes','Bloqueado','O perímetro do CAR em análise faz divisa a outra propriedade do mesmo fornecedor, CAR XQ-0001559-47ABABCQWERD473BBAABCD145F51E567, e este possui sobreposição a polígonos PRODES 2013. Por se caracterizar a mesma unidade produtiva, o CAR em análise herda os passivos ambientais.\nNota-se uma possível alteração no perímetro do CAR  XQ-0001559-47ABABCQWERD473BBAABCD145F51E741 em função dos polígonos detectados, deslocando os limites da propriedade para a não identificação dos PRODES 2012, 2019, 2021. Sendo assim a propriedade ficará bloqueada.\nO perímetro do SICAR XX-0001559-47ABABCQWERD473BBAABCD145F51E567 possui sobreposição superior a 10% a outros perímetros de propriedades rurais. Solicitar ao proprietário procurar soluções junto a SEMA. Favor encaminhar documentos oficiais, tais como; georreferenciamento, matricula da propriedade, memorial descritivo da propriedade registrado em cartório, protocolado no INCRA e outros documentos oficiais da propriedade.\nO perímetro foi confeccionado a partir das informações apresentadas no Recibo de Inscrição do Imóvel Rural no SICAR Nacional XX-0001559-47ABABCQWERD473BBAABCD145F51E567, tendo como base de informação as coordenadas geográficas apresentadas neste documento.',4),(4,'2022-12-13 10:22:34','João Celino','Liberado','O perímetro do CAR em análise faz divisa a outra propriedade do mesmo fornecedor, CAR ZX-8881559-47ABABCQWERD473BBAABCD145F51E567, e este possui sobreposição a polígonos PRODES 2011 e EMBARGO IBAMA. Por se caracterizar a mesma unidade produtiva, o CAR em análise herda os passivos ambientais.',5),(5,'2022-12-14 10:22:34','João Celino','Liberado','O perímetro foi confeccionado a partir das informações do XX-0001559-47ABABCQW1234D473BBAABCD145F51E567, apresentadas no demonstrativo do SIMCAR, tendo como base de informações as coordenadas geográficas apresentadas neste documento. Nota-se uma possível alteração no perímetro do CAR  PP-0001559-123BABCQWER1273BBAABCD145F51E567 em função dos polígonos detectados, deslocando os limites da propriedade para a não identificação dos EMBARGO IBAMA. Sendo assim a propriedade ficará bloqueada',3),(6,'2022-12-15 10:22:34','Denys Fernandes','Liberado','Conforme o demonstrativo do CAR anexado, o perímetro da propriedade não possui área consolidada. No entanto, através de análise das imagens de satélite nota-se área produtiva dentro dos limites da propriedade. Logo, a área útil foi calculada com base da estimativa da % de área total da propriedade, observados os seguintes percentuais mínimos em relação à área do imóvel de acordo como disposto no Código Florestal em seu Art. 12. O perímetro foi confeccionado a partir das informações apresentadas no Recibo de Inscrição do Imóvel Rural no SICAR Nacional XX-9991559-47ABABC271234D473BBAABCD1ABCDEE567, tendo como base de informação as coordenadas geográficas apresentadas neste documento.',4),(7,'2022-12-16 10:22:34','Elias Ribeiro','Liberado','De acordo com a análise de imagens mais atuais de satélite foi possível identificar que o perímetro do CAR encontra-se deslocado, fora dos limites visuais da fazenda. Aconselha-se que o produtor retifique o recibo do CAR afim de georreferenciar os limites propriedade corretamente.',6),(8,'2022-12-16 10:22:34','Celio Gomes','Liberado','De acordo com a análise de imagens mais atuais de satélite foi possível identificar que o perímetro do CAR encontra-se deslocado, fora dos limites visuais da fazenda. Aconselha-se que o produtor retifique o recibo do CAR afim de georreferenciar os limites propriedade corretamente.',1);
/*!40000 ALTER TABLE `monitoramentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtores`
--

DROP TABLE IF EXISTS `produtores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtores` (
  `idprodutor` int NOT NULL AUTO_INCREMENT,
  `nomeProdutor` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `cpfProdutor` varchar(14) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`idprodutor`),
  KEY `idprodutor` (`idprodutor`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtores`
--

LOCK TABLES `produtores` WRITE;
/*!40000 ALTER TABLE `produtores` DISABLE KEYS */;
INSERT INTO `produtores` VALUES (1,'Carlos Braga','882.259.670-62'),(2,'Joaquim Maia','693.074.850-11'),(3,'Antonio Castro','447.720.650-08'),(4,'João Ferreira','661.334.400-15'),(5,'Mario Gomes','457.653.790-36'),(6,'Pedro Souza','951.759.830-08');
/*!40000 ALTER TABLE `produtores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `propriedades`
--

DROP TABLE IF EXISTS `propriedades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `propriedades` (
  `idPropriedade` int NOT NULL AUTO_INCREMENT,
  `nomePropriedade` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `numeroCadastroRural` varchar(43) COLLATE utf8mb4_general_ci NOT NULL,
  `tipoPropriedade` varchar(15) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`idPropriedade`),
  KEY `idPropriedade` (`idPropriedade`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `propriedades`
--

LOCK TABLES `propriedades` WRITE;
/*!40000 ALTER TABLE `propriedades` DISABLE KEYS */;
INSERT INTO `propriedades` VALUES (1,'Fazenda da Serra','O66666666666666666666',NULL),(2,'Princesinha do Lago','PAkinbdgbvksjb254656263','Confinamento'),(3,'3 Irmão','GO93865665621hfdjhbg','Rural'),(4,'Céu Azul','MA9658669855jhgfdcvbn','Rural'),(5,'Prosperidade','MTsdfghj98423652ertyu','Rural'),(6,'Fortuna','AM862486ugvbnkiuytrf',NULL);
/*!40000 ALTER TABLE `propriedades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vinculo`
--

DROP TABLE IF EXISTS `vinculo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vinculo` (
  `idVinculo` int NOT NULL AUTO_INCREMENT,
  `idProdutor` int NOT NULL,
  `tipoVinculoProdutor` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`idVinculo`),
  KEY `idVinculo` (`idVinculo`),
  KEY `vinculo_FK` (`idProdutor`),
  CONSTRAINT `vinculo_FK` FOREIGN KEY (`idProdutor`) REFERENCES `produtores` (`idprodutor`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vinculo`
--

LOCK TABLES `vinculo` WRITE;
/*!40000 ALTER TABLE `vinculo` DISABLE KEYS */;
INSERT INTO `vinculo` VALUES (1,1,'proprietario'),(2,2,NULL),(3,3,'socio'),(4,4,'proprietario'),(5,5,NULL),(6,6,'proprietario');
/*!40000 ALTER TABLE `vinculo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'NICEPLANET'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-23 12:54:22
