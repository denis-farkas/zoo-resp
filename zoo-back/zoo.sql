-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 05 juil. 2024 à 14:56
-- Version du serveur : 8.3.0
-- Version de PHP : 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `zoo`
--

-- --------------------------------------------------------

--
-- Structure de la table `alimentation`
--

DROP TABLE IF EXISTS `alimentation`;
CREATE TABLE IF NOT EXISTS `alimentation` (
  `ID_alimentation` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) DEFAULT NULL,
  `DESCRIPTION` text,
  `QUANTITE` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`ID_alimentation`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `alimentation`
--

INSERT INTO `alimentation` (`ID_alimentation`, `NAME`, `DESCRIPTION`, `QUANTITE`) VALUES
(1, 'Carnivore', 'les animaux carnivores se nourrissent d\'aliments d\'origine animale.', '2 à 3 pourcent du poids de l\'animal.'),
(2, 'Végétarien', 'Les animaux végétariens se nourrissent de végétaux.', '10 pourcent du poids de l\'animal.'),
(3, 'Omnivore', 'Les animaux consomment à la fois des aliments d\'origine végétale et animale.', '5 pourcent du poids.');

-- --------------------------------------------------------

--
-- Structure de la table `animaux`
--

DROP TABLE IF EXISTS `animaux`;
CREATE TABLE IF NOT EXISTS `animaux` (
  `ID_animaux` int NOT NULL AUTO_INCREMENT,
  `IMG` varchar(150) DEFAULT NULL,
  `IMG2` varchar(150) DEFAULT NULL,
  `TITLE` varchar(50) DEFAULT NULL,
  `DESCRIPTION` text,
  `SANTE` varchar(250) DEFAULT NULL,
  `SOIN` text,
  `ID_alimentation` int NOT NULL,
  `id_habitat` int NOT NULL,
  PRIMARY KEY (`ID_animaux`),
  KEY `ID_alimentation` (`ID_alimentation`),
  KEY `id_habitat` (`id_habitat`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `animaux`
--

INSERT INTO `animaux` (`ID_animaux`, `IMG`, `IMG2`, `TITLE`, `DESCRIPTION`, `SANTE`, `SOIN`, `ID_alimentation`, `id_habitat`) VALUES
(1, 'image/lion.jpeg', 'image/lion2.jpeg', 'Lion', 'Simba le lion est un mammifère carnivore de la famille des félidés. Il est affecté à l\'habitat de la savane africaine.', NULL, NULL, 1, 1),
(2, 'image/gazelle.jpeg', 'image/gazelle2.jpeg', 'Gazelle', 'Léa la gazelle est un mammifère herbivore de la famille des bovidés. Elle est affectée à l\'habitat de la savane africaine.', NULL, NULL, 2, 1),
(3, 'image/elephant.jpeg', 'image/elephant2.jpeg', 'Elephant', 'Alphonse l\'éléphant est un mammifère herbivore de la famille des éléphantidés. Il est affecté à l\'habitat de la savane africaine.', NULL, NULL, 2, 1),
(4, 'image/girafe.jpeg', 'image/girafe2.jpeg', 'Girafe', 'Zara la girafe est un mammifère herbivore de la famille des girafidés. Elle est affectée à l\'habitat de la savane africaine.', NULL, NULL, 2, 1),
(5, 'image/zebre.jpeg', 'image/zebre2.jpeg', 'Zèbre', 'Rufus le zèbre est un mammifère herbivore de la famille des équidés. Il est affecté à l\'habitat de la savane africaine.', NULL, NULL, 2, 1),
(6, 'image/tigre.jpeg', 'image/tigre2.jpeg', 'Tigre', 'Léo le tigre est un mammifère carnivore de la famille des félidés. Il est affecté à l\'habitat de la forêt tropicale.', NULL, NULL, 1, 2),
(7, 'image/gorille.jpeg', 'image/gorille2.jpeg', 'Gorille', 'Léon le gorille est un mammifère herbivore de la famille des hominidés. Il est affecté à l\'habitat de la forêt tropicale.', NULL, NULL, 2, 2),
(8, 'image/peroquet.jpeg', 'image/peroquet2.jpeg', 'Perroquet', 'Cachou le perroquet est un oiseau de la famille des psittacidés. Il est affecté à l\'habitat de la forêt tropicale.', NULL, NULL, 3, 2),
(9, 'image/capybara.jpeg', 'image/capybara2.jpeg', 'Capybara', 'Félix le capybara est un rongeur. Il est affecté à l\'habitat de la forêt tropicale.', NULL, NULL, 2, 2),
(10, 'image/chameau.jpeg', 'image/chameau2.jpeg', 'Chameau', 'Bernard le chameau est un mammifère herbivore de la famille des camélidés. Il est affecté à l\'habitat du désert.', NULL, NULL, 2, 3),
(11, 'image/fennec.jpeg', 'image/fennec2.jpeg', 'Fennec', 'Futé le fennec est un mammifère carnivore de la famille des canidés. Il est affecté à l\'habitat du désert.', NULL, NULL, 1, 3),
(12, 'image/scorpion.jpeg', 'image/scorpion2.jpeg', 'Scorpion', '\"Pic Pic le scorpion est un arachnide. Il est affecté à l\'habitat du désert.', NULL, NULL, 1, 3),
(13, 'image/serpent.jpeg\r\n', 'image/serpent.jpeg\r\n', 'Serpent à sonnette', 'Grelot le serpent à sonnette est un reptile. Il est affecté à l\'habitat du désert.', NULL, NULL, 1, 3),
(14, 'image/leopard.jpeg', 'image/leopard2.jpeg', 'Léopard des neiges', 'Frileux le léopard des neiges est un mammifère carnivore de la famille des félidés. Il est affecté à l\'habitat des montagnes.', NULL, NULL, 1, 4),
(15, 'image/mouflon.jpeg', 'image/mouflon2.jpeg\r\n', 'Mouflon', 'Pato le mouflon est un mammifère herbivore de la famille des bovidés. Il est affecté à l\'habitat des montagnes.', NULL, NULL, 2, 4),
(16, 'image/lama.jpeg', 'image/lama2.jpeg', 'Lama', 'Têtu le lama est un mammifère herbivore de la famille des camélidés. Il est affecté à l\'habitat des montagnes.', NULL, NULL, 2, 4),
(17, 'image/pandaroux.jpeg', 'image/pandaroux2.jpeg', 'Panda roux', 'Tout doux le panda roux est un mammifère herbivore de la famille des ailuridés. Il est affecté à l\'habitat des montagnes.', NULL, NULL, 2, 4),
(18, 'image/manchotempereur.jpeg', 'image/manchotempereur.jpeg', 'Manchot empereur', 'Queue de pie le manchot empereur est un oiseau de la famille des sphéniscidés. Il est affecté à l\'habitat de l\'océan.', NULL, NULL, 3, 5),
(19, 'image/phoque.jpeg', 'image/phoque2.jpeg', 'Phoque', 'Paresseux le phoque est un mammifère carnivore de la famille des phocidés. Il est affecté à l\'habitat de l\'océan.', NULL, NULL, 3, 5),
(20, 'image/ourspolaire.jpeg', 'image/ourspolaire2.jpeg', 'Ours polaire', 'Flocon l\'ours polaire est un mammifère carnivore de la famille des ursidés. Il est affecté à l\'habitat de l\'océan.', NULL, NULL, 1, 5),
(21, 'image/renardesneiges.jpeg', 'image/renardesneiges2.jpeg', 'Renard polaire', 'Filou le renard polaire est un mammifère carnivore de la famille des canidés. Il est affecté à l\'habitat de l\'océan.', NULL, NULL, 1, 5),
(22, 'image/requinblanc.jpeg', 'image/requinblanc2.jpeg', 'Requin blanc', 'Adolphe  le requin blanc est un poisson de la famille des lamnidés. Il est affecté à l\'habitat de l\'océan.', NULL, NULL, 3, 6),
(23, 'image/dauphin.jpeg', 'image/dauphin2.jpeg', 'Dauphin', 'Joueur le dauphin est un mammifère marin de la famille des delphinidés. Il est affecté à l\'habitat de l\'océan.', NULL, NULL, 3, 6),
(24, 'image/raiemanta.jpeg', 'image/raiemanta2.jpeg', 'Raie manta', 'Elec la raie manta est un poisson de la famille des mobulidés. Elle est affectée à l\'habitat de l\'océan.', NULL, NULL, 3, 6),
(25, 'image/tortuedemer.jpeg', 'image/tortuedemer2.jpeg', 'Tortue de mer', 'Maéva la tortue de mer est un reptile. Elle est affectée à l\'habitat de l\'océan.', NULL, NULL, 3, 6);

-- --------------------------------------------------------

--
-- Structure de la table `care`
--

DROP TABLE IF EXISTS `care`;
CREATE TABLE IF NOT EXISTS `care` (
  `ID_animaux` int NOT NULL,
  `ID_user` int NOT NULL,
  PRIMARY KEY (`ID_animaux`,`ID_user`),
  KEY `ID_user` (`ID_user`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `habitat`
--

DROP TABLE IF EXISTS `habitat`;
CREATE TABLE IF NOT EXISTS `habitat` (
  `id_habitat` int NOT NULL AUTO_INCREMENT,
  `TITLE` varchar(100) DEFAULT NULL,
  `IMG` varchar(250) DEFAULT NULL,
  `IMG2` varchar(250) DEFAULT NULL,
  `DESCRIPTION` text,
  PRIMARY KEY (`id_habitat`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `habitat`
--

INSERT INTO `habitat` (`id_habitat`, `TITLE`, `IMG`, `IMG2`, `DESCRIPTION`) VALUES
(1, 'Savane africaine', 'image/savane.jpeg', 'image/savane2.jpeg', 'La savane est une sorte de vaste prairie de hautes herbes typique des régions tropicales à longue saison sèche. On y trouve des plantes herbacées type graminées, et plus ou moins d\'arbres (dont l\'Acacia et le Baobab) et arbustes, selon les savanes. En fonction de la densité des espèces qu\'elle recense, on parle de savane herbeuse ou de savane arborée  Les principales savanes se situent en Afrique orientale (Mali, Niger, Nord de la Côte d\'Ivoire, Kenya), en Inde centrale, en Amérique du Sud, aux Caraïbes (les llanos du Venezuela et le cerrado du Brésil sont considérés comme des types locaux de savane), et dans le Nord de l\'Australie.'),
(2, 'Forêt tropicale', 'image/foret.jpeg', 'image/foret2.jpg', 'La forêt tropicale est la forêt caractéristique des régions tropicales et équatoriales. Sous ce terme se cachent des réalités très différentes, des forêts tropophiles, composées d\'arbres assez épars poussant sous un climat tropical de savane, à la forêt dite tropicale humide dans des zones à climat équatorial, en passant par les forêts de nuages relativement froides.'),
(3, 'Désert', 'image/desert.jpeg', 'image/desert2.jpeg', '\"Un désert est une zone de terre qui reçoit très peu de précipitations. Les déserts peuvent être chauds ou froids. Les déserts chauds sont généralement situés près de l\'équateur, tandis que les déserts froids sont généralement situés près des pôles. Les déserts chauds ont tendance à être très secs, tandis que les déserts froids ont tendance à être très secs.'),
(4, 'Montagnes', 'image/montagne.jpeg', 'image/montagne2.jpeg', 'Une montagne est une forme de relief qui s\'élève au-dessus de la surface environnante dans un paysage. Les montagnes sont formées par des forces tectoniques, des éruptions volcaniques ou des érosions. Les montagnes peuvent être isolées ou former des chaînes de montagnes. Les montagnes peuvent être isolées ou former des chaînes de montagnes. Les montagnes peuvent être isolées ou former des chaînes de montagnes. Les montagnes peuvent être isolées ou former des chaînes de montagnes. Les montagnes peuvent être isolées ou former des chaînes de montagnes. Les montagnes peuvent être isolées ou former des chaînes de montagnes. Les montagnes peuvent être isolées ou former des chaînes de montagnes. Les montagnes peuvent être isolées ou former des chaînes de montagnes. Les montagnes peuvent être isolées ou former des chaînes de montagnes.'),
(5, 'Régions polaires', 'image/regionpolaire.jpeg', 'image/regionpolaire2.jpeg', 'Les régions polaires sont les régions de la Terre entourant les pôles. Les régions polaires sont les régions de la Terre entourant les pôles. Les régions polaires sont les régions de la Terre entourant les pôles. Les régions polaires sont les régions de la Terre entourant les pôles. Les régions polaires sont les régions de la Terre entourant les pôles. Les régions polaires sont les régions de la Terre entourant les pôles. Les régions polaires sont les régions de la Terre entourant les pôles. Les régions polaires sont les régions de la Terre entourant les pôles. Les régions polaires sont les régions de la Terre entourant les pôles.'),
(6, 'Océan', 'image/ocean.jpeg', 'image/ocean2.jpeg', 'Un océan est une vaste étendue d\'eau salée qui recouvre une grande partie de la surface de la Terre. Les océans sont divisés en cinq grands bassins : l\'océan Atlantique, l\'océan Pacifique, l\'océan Indien, l\'océan Arctique et l\'océan Antarctique. Les océans sont divisés en cinq grands bassins : l\'océan Atlantique, l\'océan Pacifique, l\'océan Indien, l\'océan Arctique et l\'océan Antarctique. Les océans sont divisés en cinq grands bassins : l\'océan Atlantique, l\'océan Pacifique, l\'océan Indien, l\'océan Arctique et l\'océan Antarctique. Les océans sont divisés en cinq grands bassins : l\'océan Atlantique, l\'océan Pacifique, l\'océan Indien, l\'océan Arctique et l\'océan Antarctique. Les océans sont divisés en cinq grands bassins : l\'océan Atlantique, l\'océan Pacifique, l\'océan Indien, l\'océan Arctique et l\'océan Antarctique.');

-- --------------------------------------------------------

--
-- Structure de la table `mission`
--

DROP TABLE IF EXISTS `mission`;
CREATE TABLE IF NOT EXISTS `mission` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) DEFAULT NULL,
  `LOGO` varchar(150) DEFAULT NULL,
  `DESCRIPTION` text,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `mission`
--

INSERT INTO `mission` (`ID`, `NAME`, `LOGO`, `DESCRIPTION`) VALUES
(1, 'Education', 'image/education.jpeg', '\"Venez apprendre le comportement des animaux et leur mode de vie.'),
(2, 'Conservation', 'image/conservation.jpeg', 'Programme de conservation des animaux.'),
(3, 'Recherche', 'image/recherche.jpeg', 'Recherche sur les animaux et leur habitat.');

-- --------------------------------------------------------

--
-- Structure de la table `prestation`
--

DROP TABLE IF EXISTS `prestation`;
CREATE TABLE IF NOT EXISTS `prestation` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) DEFAULT NULL,
  `LOGO` varchar(150) DEFAULT NULL,
  `DESCRIPTION` text,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `prestation`
--

INSERT INTO `prestation` (`ID`, `NAME`, `LOGO`, `DESCRIPTION`) VALUES
(1, 'Restaurant', 'image/restaurant.jpeg', 'Bienvenue au Restaurant du zoo qui vous propose une cuisine variée et équilibrée pour toute la famille.'),
(2, 'Visites guidées', 'image/visiteguidee.jpeg', 'Profitez de votre visite, accompagné par un de nos guides professionnels et découvrez la magie du monde animal d\'une manière plus scientifique '),
(3, 'Petit Train', 'image/petitrain.jpeg', 'Découvrez le zoo avec notre petit train électrique qui vous emmène à travers les différents habitats des animaux.');

-- --------------------------------------------------------

--
-- Structure de la table `_user`
--

DROP TABLE IF EXISTS `_user`;
CREATE TABLE IF NOT EXISTS `_user` (
  `ID_user` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(150) DEFAULT NULL,
  `ROLE` varchar(50) DEFAULT NULL,
  `EMAIL` varchar(150) DEFAULT NULL,
  `PASSWORD` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`ID_user`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
