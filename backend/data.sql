-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: dev2qa
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(5) DEFAULT NULL,
  `client_full_name` varchar(45) DEFAULT NULL,
  `client_first_name` varchar(45) DEFAULT NULL,
  `client_last_name` varchar(45) DEFAULT NULL,
  `client_intials` varchar(45) DEFAULT NULL,
  `client_type` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `street_address` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `assi_therapist_full_name` varchar(45) DEFAULT NULL,
  `assi_therapist_first` varchar(45) DEFAULT NULL,
  `assi_therapist_last` varchar(45) DEFAULT NULL,
  `facility` varchar(45) DEFAULT NULL,
  `session_type` varchar(45) DEFAULT NULL,
  `session_cost` double DEFAULT NULL,
  `session_length` int(11) DEFAULT NULL,
  `bday` varchar(45) DEFAULT NULL,
  `password` varchar(75) DEFAULT NULL,
  `notes` varchar(300) DEFAULT NULL,
  `primary_location` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `zip` varchar(45) DEFAULT NULL,
  `contact_title` varchar(45) DEFAULT NULL,
  `contact_first_name` varchar(45) DEFAULT NULL,
  `contact_last_name` varchar(45) DEFAULT NULL,
  `contact_street_address` varchar(45) DEFAULT NULL,
  `contact_city` varchar(45) DEFAULT NULL,
  `contact_state` varchar(45) DEFAULT NULL,
  `contact_zip` varchar(45) DEFAULT NULL,
  `contact_email` varchar(45) DEFAULT NULL,
  `contact_phone` varchar(45) DEFAULT NULL,
  `billing_first_name` varchar(45) DEFAULT NULL,
  `billing_last_name` varchar(45) DEFAULT NULL,
  `payment_type` varchar(45) DEFAULT NULL,
  `card_type` varchar(45) DEFAULT NULL,
  `card_num` varchar(45) DEFAULT NULL,
  `card_exp_date` varchar(45) DEFAULT NULL,
  `cvv` varchar(45) DEFAULT NULL,
  `billing_street_address` varchar(45) DEFAULT NULL,
  `name_on_card` varchar(45) DEFAULT NULL,
  `billing_city` varchar(45) DEFAULT NULL,
  `billing_state` varchar(45) DEFAULT NULL,
  `billing_phone` varchar(45) DEFAULT NULL,
  `billing_zip` varchar(45) DEFAULT NULL,
  `contact_title_2` varchar(45) DEFAULT NULL,
  `contact_first_name_2` varchar(45) DEFAULT NULL,
  `contact_last_name_2` varchar(45) DEFAULT NULL,
  `contact_street_address_2` varchar(45) DEFAULT NULL,
  `contact_city_2` varchar(45) DEFAULT NULL,
  `contact_state_2` varchar(45) DEFAULT NULL,
  `contact_zip_2` varchar(45) DEFAULT NULL,
  `contact_email_2` varchar(45) DEFAULT NULL,
  `contact_phone_2` varchar(45) DEFAULT NULL,
  `contact_title_3` varchar(45) DEFAULT NULL,
  `contact_first_name_3` varchar(45) DEFAULT NULL,
  `contact_last_name_3` varchar(45) DEFAULT NULL,
  `contact_street_address_3` varchar(45) DEFAULT NULL,
  `contact_city_3` varchar(45) DEFAULT NULL,
  `contact_state_3` varchar(45) DEFAULT NULL,
  `contact_zip_3` varchar(45) DEFAULT NULL,
  `contact_email_3` varchar(45) DEFAULT NULL,
  `contact_phone_3` varchar(45) DEFAULT NULL,
  `active` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,'Mr.','Billy Joe','Billy','Joe','BJ','Individual','123-444-5555','123 Fake Street','bjoe@mail.com','Harry Potter','Harry','Potter',NULL,NULL,20,30,'8/1/01',NULL,NULL,NULL,'Plano','TX','75023','Mr.','Bob','Joe','123 Fake Street','Plano','TX','75023','bobjoe@mail.com','123-222-2222','Bob','Joe','Card','Visa','11111111111','10/25','123','123 Fake Street','Bob Joe','Plano','TX','123-222-2222','75023',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1),(2,NULL,'Sarah Silver','Sarah','Silver',NULL,NULL,'123-222-3333',NULL,'ssilver@mail.com','Lisa Simpson','Lisa','Simpson','Clark High School','Lessons',1,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1),(3,NULL,'Jaren Jones','Jaren','Jones',NULL,NULL,'123-111-2232',NULL,'jjones@mail.com',NULL,NULL,NULL,NULL,'Therapy',0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1),(4,NULL,'Ian Stark','Ian','Stark',NULL,NULL,'122-232-4444',NULL,'istark@mail.com','Jake Jakerson','Jake','riff',NULL,'Lessons',7,8,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1),(5,NULL,'John Jackson','Johnny','Jackson',NULL,NULL,'122-222-1111',NULL,'jjackson@mail.com','Hermione Granger','Hermione','Granger','Thomas Elementary','Lessons',1,11,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1),(70,NULL,'Joe Jackson','Joe','Jackson',NULL,NULL,'122-222-1111',NULL,'joejack@mail.com','Hermione Granger','Hermione','Granger','Thomas Elementary','Lessons',1,11,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1);
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `member_full_name` varchar(45) DEFAULT NULL,
  `member_first_name` varchar(45) DEFAULT NULL,
  `member_last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `street_address` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `zip` varchar(45) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `bday` varchar(45) DEFAULT NULL,
  `npi` varchar(45) DEFAULT NULL,
  `pass` varchar(75) DEFAULT NULL,
  `notes` varchar(45) DEFAULT NULL,
  `active` tinyint(4) DEFAULT NULL,
  `admin` tinyint(4) DEFAULT NULL,
  `therapist` tinyint(4) DEFAULT NULL,
  `intern` tinyint(4) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (1,'Mr.','Harry Potter','Harry','Potter','hpotter@gmail.com','123-456-1111','713 Hogwarts Lane','London','77777','Diagon Alley',NULL,'731890','test123',NULL,1,NULL,NULL,NULL,'Therapist'),(2,'Ms.','Hermione Grainger','Hermione','Grainger','email@mail.com','123-333-3333','123 Fake Street','Plano','75023','Wherever',NULL,'2213414','pass',NULL,1,NULL,NULL,NULL,'Therapist'),(3,'Mr.','Joe Bob','Joe','Bob','jbob@mail.com','222-223-3333','123 Street Lane','Frisco','12345','Nowhere',NULL,'2223324','ooo',NULL,1,NULL,NULL,NULL,'Therapist'),(4,'Miss','Jennifer Robinson','Jennifer','Robinson','jrob@mail.com','122-222-2222','222 Nowhere','Allen','12333','Somewhere',NULL,'123214','ooee',NULL,1,NULL,NULL,NULL,'Admin Assistant'),(5,'Dr','Lisa Simpson','Lisa','Simpson','lsimpson@mail.com','111-222-2222','222 Evergreen Terrace','Springfield','22244','Everywhere',NULL,'345221','simp',NULL,1,NULL,NULL,NULL,'Therapist'),(38,'Mr.','Jake Jakerson','Jake','Jakerson','jake@mail.com','233-333-3333','123 Jake Street','Jaketopia','33333','Main Building',NULL,'323232','$2b$10$BpKBvvhOsAn93bCLODGOV.bmuHtdTmNp3FIQ7CjgNM8iQwxH.8md2','Jake has notes',1,NULL,NULL,NULL,'Therapist');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-11 17:44:20
