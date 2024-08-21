WoWiki est un site wikipédia qui présente les différentes classes sur le jeu World of Warcraft.
Il permet aux utilisateurs de commenter les différents personnage afin d'apported leurs jugements, leurs avis, leurs expérience et pouvoir échanger avec les autres utilisateurs pour échanger leurs savoirs et astuces.

3 Comptes sont disponibles actuellement :

1- Administrateur :
email : administrateur1@gmail.com
mot de passe : Motdepasse123#

2- Utilisateur :
email : utilisateur1@gmail.com
mot de passe : Motdepasse123#

3- Utilisateur banni :
email : banni1@gmail.com
mot de passe : Motdepasse123#

Base de données :

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 21 août 2024 à 15:38
-- Version du serveur : 8.3.0
-- Version de PHP : 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/_!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT _/;
/_!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS _/;
/_!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION _/;
/_!40101 SET NAMES utf8mb4 _/;

--
-- Base de données : `wowiki`
--

---

--
-- Structure de la table `alert`
--

DROP TABLE IF EXISTS `alert`;
CREATE TABLE IF NOT EXISTS `alert` (
`id` int NOT NULL AUTO_INCREMENT,
`alert_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`status` int NOT NULL DEFAULT '0',
`comment_id` int NOT NULL,
`user_id` int NOT NULL,
PRIMARY KEY (`id`),
KEY `fk_user_id` (`user_id`),
KEY `fk_comment_id` (`comment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

---

--
-- Structure de la table `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
`id` int NOT NULL AUTO_INCREMENT,
`content` text NOT NULL,
`publish_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`status` int NOT NULL DEFAULT '0',
`user_id` int NOT NULL,
`person_id` int NOT NULL,
PRIMARY KEY (`id`),
KEY `fk_person_id` (`person_id`) USING BTREE,
KEY `fk2_user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

---

--
-- Structure de la table `person`
--

DROP TABLE IF EXISTS `person`;
CREATE TABLE IF NOT EXISTS `person` (
`id` int NOT NULL AUTO_INCREMENT,
`person_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
`image` varchar(30) NOT NULL,
`description` text NOT NULL,
`alt` varchar(255) NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `person`
--

INSERT INTO `person` (`id`, `person_name`, `image`, `description`, `alt`) VALUES
(1, 'Guerrier', 'Warrior.webp', 'Les guerriers sont des combattants aguerris et polyvalents, capables de manier diverses armes pour affronter leurs ennemis en combat rapproché. Ils se distinguent par leur force brute, leur endurance et leur capacité à inspirer leurs alliés sur le champ de bataille. Les guerriers génèrent de la rage au fur et à mesure qu\'ils subissent et infligent des dégâts, qu\'ils utilisent ensuite pour exécuter des attaques puissantes.', 'a venir'),
(2, 'Paladin', 'Paladin.webp', 'Les paladins sont des champions de la lumière, alliant prouesses martiales et magie sacrée pour combattre le mal. Ils sont dévoués à la protection de leurs alliés et à la destruction des forces obscures. Les paladins peuvent guérir et ressusciter les morts, bénir leurs compagnons d\'armes et se lancer dans la bataille avec une foi inébranlable.', 'a venir'),
(3, 'Moine', 'Moine.webp', 'Les moines sont des combattants agiles et polyvalents, maîtrisant les arts martiaux pour infliger des dégâts, guérir leurs alliés et encaisser les coups. Ils utilisent la force intérieure du chi pour amplifier leurs attaques et leurs techniques de guérison.', 'test'),
(4, 'Druid', 'Druid.webp', 'Les druides sont des métamorphes capables de se transformer en diverses formes animales pour remplir différents rôles en combat. Ils sont en harmonie avec la nature et peuvent soigner, infliger des dégâts ou encaisser des coups en fonction de leur forme.', 'test'),
(5, 'Chasseur de Démons', 'ChasseurDeDémons.webp', 'Les chasseurs de démons sont des guerriers agiles et redoutables ayant sacrifié une partie de leur humanité pour obtenir des pouvoirs démoniaques. Ils se spécialisent dans la chasse et la destruction des démons, utilisant leur agilité et leurs pouvoirs surnaturels pour infliger des dégâts et éviter les attaques.', 'test'),
(6, 'Chasseur', 'Chasseur.webp', 'Les chasseurs sont des maîtres des bêtes et de la nature, capables d\'infliger des dégâts à distance tout en utilisant des pièges et des animaux de compagnie pour contrôler le champ de bataille. Ils sont experts en survie en milieu sauvage et peuvent traquer et dompter une grande variété de créatures.', 'a venir'),
(7, 'Évocateur', 'Évocateur.webp', 'Les évocateurs sont des combattants draconiques, issus des Dracthyrs, une race draconique dotée de pouvoirs ancestraux. Ils combinent la puissance des dragons et la magie pour infliger des dégâts, soigner leurs alliés et contrôler le champ de bataille. En tant qu\'évocateurs, ils ont la capacité unique de manipuler les énergies des vols draconiques pour libérer des sorts dévastateurs et des effets bénéfiques.', 'test'),
(8, 'Voleur', 'Voleur.webp', 'Les voleurs sont des maîtres de la furtivité et de l\'assassinat, capables de se faufiler derrière leurs ennemis pour infliger des attaques mortelles. Ils utilisent des poisons, des techniques de dissimulation et des attaques rapides pour éliminer leurs cibles avant même qu\'elles ne sachent ce qui les a frappées.', 'a venir'),
(9, 'Prêtre', 'Prêtre.webp', 'Les prêtres sont des guérisseurs et des soutiens spirituels, utilisant des pouvoirs sacrés et des ombres pour protéger et renforcer leurs alliés tout en affaiblissant leurs ennemis. Ils peuvent appeler la lumière pour guérir et protéger ou invoquer des forces sombres pour infliger des dégâts mentaux.', 'a venir'),
(10, 'Chevalier de la Mort', 'ChevalierDeLaMort.webp', 'Les chevaliers de la mort sont des combattants ressuscités utilisant des pouvoirs nécromantiques pour détruire leurs ennemis et se renforcer. Ils manipulent la magie de la mort et du givre pour infliger des dégâts et se protéger.', 'a venir'),
(11, 'Chaman', 'Chaman.webp', 'Les chamans sont des maîtres des éléments, utilisant la puissance de la terre, de l\'air, du feu et de l\'eau pour soigner, protéger et infliger des dégâts. Ils sont les intermédiaires entre le monde physique et les esprits, appelant les forces élémentaires pour les assister.', 'a venir'),
(12, 'Mage', 'Mage.webp', 'Les mages sont des maîtres des arcanes, utilisant des sorts puissants pour infliger des dégâts massifs et contrôler le champ de bataille. Ils peuvent invoquer des flammes, de la glace ou des forces arcanes pour anéantir leurs ennemis.', 'a venir'),
(13, 'Démoniste', 'Démoniste.webp', 'Les démonistes sont des maîtres des ténèbres et de la démonologie, utilisant des sorts maléfiques pour infliger des dégâts et invoquer des démons pour les aider en combat. Ils se nourrissent de la souffrance de leurs ennemis et peuvent drainer la vie et la mana de leurs adversaires.', 'test');

---

--
-- Structure de la table `person_skills`
--

DROP TABLE IF EXISTS `person_skills`;
CREATE TABLE IF NOT EXISTS `person_skills` (
`id` int NOT NULL AUTO_INCREMENT,
`tdh_id` int NOT NULL,
`specialization_id` int NOT NULL,
`person_id` int NOT NULL,
PRIMARY KEY (`id`),
KEY `fk2_person_id` (`person_id`) USING BTREE,
KEY `fk2_tdh_id` (`tdh_id`) USING BTREE,
KEY `fk_specialization_id` (`specialization_id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `person_skills`
--

INSERT INTO `person_skills` (`id`, `tdh_id`, `specialization_id`, `person_id`) VALUES
(15, 6, 6, 1),
(16, 6, 7, 1),
(17, 3, 8, 1),
(18, 3, 10, 2),
(19, 6, 11, 2),
(20, 5, 9, 2),
(21, 6, 12, 6),
(22, 6, 13, 6),
(23, 6, 14, 6),
(24, 6, 15, 8),
(25, 6, 16, 8),
(26, 6, 17, 8),
(27, 5, 18, 9),
(28, 5, 19, 9),
(29, 6, 20, 9),
(30, 3, 21, 10),
(31, 6, 22, 10),
(32, 6, 23, 10),
(33, 3, 24, 3),
(34, 6, 25, 3),
(35, 5, 26, 3),
(36, 6, 27, 13),
(37, 6, 28, 13),
(38, 6, 29, 13),
(39, 6, 30, 12),
(40, 6, 31, 12),
(41, 6, 32, 12),
(42, 6, 33, 11),
(43, 6, 34, 11),
(44, 5, 35, 11),
(45, 6, 36, 4),
(46, 6, 37, 4),
(47, 5, 38, 4),
(48, 3, 39, 4),
(49, 6, 40, 7),
(50, 5, 41, 7),
(51, 6, 42, 7),
(52, 3, 43, 5),
(53, 6, 44, 5);

---

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
`id` int NOT NULL AUTO_INCREMENT,
`role_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id`, `role_name`) VALUES
(1, 'utilisateur'),
(2, 'administrateur');

---

--
-- Structure de la table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
`session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
`expires` int UNSIGNED NOT NULL,
`data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

---

--
-- Structure de la table `specialization`
--

DROP TABLE IF EXISTS `specialization`;
CREATE TABLE IF NOT EXISTS `specialization` (
`id` int NOT NULL AUTO_INCREMENT,
`specialization_name` varchar(20) NOT NULL,
`description` text NOT NULL,
`image` varchar(30) NOT NULL,
`alt` varchar(255) NOT NULL,
`important_skills` text NOT NULL,
`skill1` text NOT NULL,
`skill2` text NOT NULL,
`tdh_id` int NOT NULL,
PRIMARY KEY (`id`),
KEY `fk2_tdh_id` (`tdh_id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `specialization`
--

INSERT INTO `specialization` (`id`, `specialization_name`, `description`, `image`, `alt`, `important_skills`, `skill1`, `skill2`, `tdh_id`) VALUES
(6, 'Armes', 'Les guerriers Armes se spécialisent dans l\'utilisation d\'armes à deux mains pour infliger des coups puissants et dévastateurs. Ils excellent dans le contrôle des foules et les attaques précises.', 'armswarrior.webp', 'Une ache représentant la spécialisation armes du guerrier', 'Capacités clés :', 'Frappe mortelle : Une attaque puissante réduisant les soins reçus par la cible.\r\n', 'Fulgurance : Une attaque rapide et brutale infligeant des dégâts supplémentaires si la cible est affectée par une blessure.', 6),
(7, 'Fureur', 'Les guerriers Fureur combattent avec une rage inextinguible, maniant deux armes à une main pour délivrer des attaques rapides et ininterrompues.', 'furywarrior.webp', 'Un symbole d\'une hache rouge, sur le corps d\'un oiseau avec des ailes et un fond enflammé représentant la spécialisation fureur du guerrier', 'Capacités clés :', 'Sanguinaire : Une attaque qui soigne le guerrier en fonction des dégâts infligés.', 'Tourbillon : Une attaque en rotation frappant tous les ennemis proches.', 6),
(8, 'Protection', 'Les guerriers Protection se spécialisent dans la défense, utilisant un bouclier et une arme à une main pour protéger leurs alliés et encaisser des coups.', 'protwarrior.webp', 'Un bouclier brillant robuste en métal sur un fond noir et bleu représentant la spécialisation protection du guerrier', 'Capacités clés :', 'Onde de choc : Une attaque de zone qui étourdit les ennemis proches.', 'Mur protecteur : Une capacité défensive réduisant considérablement les dégâts reçus.', 3),
(9, 'Sacré', 'Les paladins Sacré sont des guérisseurs, utilisant la Lumière pour soigner et protéger leurs alliés.', 'holypaladin.webp', 'Une lumière jaune entrain d\'exploser représentant la spécialisation sacré du paladin', 'Capacités clés :', 'Lumière sacrée : Un sort de soin direct puissant.', 'Gardien des anciens rois : Invoque un protecteur qui augmente les soins prodigués.', 5),
(10, 'Protection', 'Les paladins Protection sont des tanks robustes, utilisant la Lumière pour absorber les dégâts et défendre leurs alliés.', 'protpaladin.webp', 'Un casque en or sur un fond jaune et noir représentant la spécialisation protection du paladin', 'Capacités clés :', 'Bouclier du vengeur : Lance un bouclier infligeant des dégâts et silence les cibles.', 'Bouclier sacré : Augmente les chances de blocage et inflige des dégâts sacrés aux attaquants.', 3),
(11, 'Vindicte', 'Les paladins Vindicte sont des DPS de mêlée, infligeant des dégâts sacrés à leurs ennemis.', 'retripaladin.webp', 'Un puissant marteau avec des effets de lumière violet et blanc représentant la spécialisation vindicte du paladin', 'Capacités clés :', 'Tempête divine : Une attaque de zone infligeant des dégâts sacrés.', 'Courroux vengeur : Augmente la puissance d\'attaque et les chances de critique.', 6),
(12, 'Maîtrise des bêtes', 'Les chasseurs Maîtrise des bêtes se concentrent sur leurs compagnons, les renforçant pour infliger des dégâts considérables.', 'bmhunter.webp', 'La tête d\'un serpent, un loup et un guépard regardant la même direction représentant la spécialisation maîtrise des bêtes du chasseur', 'Capacités clés :', 'Courroux bestial : Augmente les dégâts infligés par le compagnon.', 'Ordre de tuer : Le compagnon attaque et inflige des dégâts importants.', 6),
(13, 'Précision', 'Les chasseurs Précision se spécialisent dans le tir à distance, infligeant des dégâts précis et dévastateurs.', 'mmhunter.webp', 'Une cible rouge et blanche avec des flèches pointés dedans représentant la spécialisation précision du chasseur', 'Capacités clés :', 'Visée : Une attaque puissante et précise.', 'Tir rapide : Une rafale de flèches infligeant des dégâts en série.', 6),
(14, 'Survie', 'Les chasseurs Survie utilisent un mélange de combat de mêlée et de pièges pour affronter leurs ennemis.', 'survihunter.webp', 'Un personnage féminin qui se dans la végétation représentant la spécialisation survie du chasseur', 'Capacités clés :', 'Morsure de mangouste : Une attaque de mêlée répétitive.', 'Piège explosif : Un piège qui explose au contact, infligeant des dégâts de feu.', 6),
(15, 'Assassinat', 'Les voleurs Assassinat utilisent des poisons et des attaques vicieuses pour infliger des dégâts sur la durée.', 'assarogue.webp', 'Deux poignards formant une croix remplies de poison représentant la spécialisation assassinat du voleur', 'Capacités clés :', 'Estropier : Inflige des dégâts et applique un poison.', 'Envenimer : Libère les poisons accumulés pour infliger des dégâts massifs.', 6),
(16, 'Hors-la-loi', 'Les voleurs Hors-la-loi utilisent des techniques de duel et des attaques rapides pour submerger leurs ennemis.', 'outlawrogue.webp', 'Une épée en métal représentant la spécialisation hors-la-loi du voleur', 'Capacités clés :', 'Débiter : Augmente la vitesse d\'attaque.', 'Poussée d\'adrénaline : Accroît la régénération d\'énergie et la vitesse d\'attaque.', 6),
(17, 'Finesse', 'Les voleurs Finesse se spécialisent dans les attaques furtives et les coups critiques, frappant depuis l\'ombre.', 'subrogue.webp', 'Un personnage masculin qui se dans la végétation représentant la spécialisation finesse du voleur', 'Capacités clés :', 'Embuscade : Une attaque furtive infligeant des dégâts élevés.', 'Danse de l\'ombre : Permet l\'utilisation de techniques furtives en combat.', 6),
(18, 'Discipline', 'Les prêtres Discipline équilibrent les soins et les dégâts, utilisant des sorts qui soignent les alliés lorsqu\'ils infligent des dégâts aux ennemis.', 'discipriest.webp', 'Une lumière représentant l\'équilibre entre soins et dégâts avec un bouclier au milieu représentant la spécialisation discipline du prêtre', 'Capacités clés :', 'Pénitence : Un sort canalisé infligeant des dégâts ou soignant un allié.', 'Suppression de la douleur : Réduit les dégâts subis par un allié.', 5),
(19, 'Sacré', 'Les prêtres Sacré sont des guérisseurs puissants, utilisant des sorts de soin directs et de zone pour protéger leurs alliés.', 'holypriest.webp', 'Un esprit avec des ailes représentant la spécialisation sacré du prêtre', 'Capacités clés :', 'Prière de guérison : Un sort de soin qui rebondit entre les alliés blessés.', 'Esprit gardien : Augmente les soins reçus par une cible et empêche la mort.', 5),
(20, 'Ombre', 'Les prêtres Ombre se spécialisent dans l\'infliger de dégâts psychiques et l\'affaiblissement des ennemis.', 'shadowpriest.webp', 'Un crâne noir avec un fond de feu représentant la spécialisation ombre du prêtre', 'Capacités clés :', 'Peste dévorante : Inflige des dégâts sur la durée et soigne le prêtre.', 'Forme du Vide : Augmente les dégâts infligés et permet l\'utilisation de sorts puissants.', 6),
(21, 'Sang', 'Les chevaliers de la mort Sang se concentrent sur la défense et la régénération de la santé, encaissant des dégâts tout en infligeant des dégâts modérés.', 'blooddk.webp', 'Un crâne rouge et noir représentant la spécialisation sang du chevalier de la mort', 'Capacités clés :', 'Frappe runique : Une attaque qui inflige des dégâts et restaure des points de vie.', 'Déflagration de sang : Un sort de zone infligeant des dégâts et renforçant les capacités défensives.', 3),
(22, 'Givre', 'Les chevaliers de la mort Givre infligent des dégâts de glace et utilisent des capacités pour contrôler leurs ennemis.', 'frostdk.webp', 'Un crâne bleu et noir représentant la spécialisation givre du chevalier de la mort', 'Capacités clés :', 'Souffle de givre : Inflige des dégâts de glace en zone.', 'Frappe de givre : Une attaque puissante infligeant des dégâts et ralentissant les ennemis.', 6),
(23, 'Impie', 'Les chevaliers de la mort Impie combinent des attaques de dégâts directs et des invocations pour affaiblir leurs ennemis.', 'unholydk.webp', 'Un crâne vert et noir représentant la spécialisation impie du chevalier de la mort', 'Capacités clés :', 'Frappe de peste : Inflige des dégâts et applique un poison.', 'Invocation de gargouille : Invoque un allié gargouille infligeant des dégâts aux ennemis.', 6),
(24, 'Maître brasseur', 'Les moines Maître brasseur se concentrent sur l\'utilisation de techniques de combat et de breuvages pour encaisser les dégâts et protéger leurs alliés.', 'brewmonk.webp', 'Un cheval marron avec une corne respirant du feu représentant la spécialisation maître brasseur du moine', 'Capacités clés :', 'Tempête de brume : Une attaque de zone infligeant des dégâts et augmentant les capacités défensives.', 'Bière de l\'immortelle : Une boisson qui restaure des points de vie et augmente la résistance.', 3),
(25, 'Eolien', 'Les moines Eolien se spécialisent dans les attaques rapides et les coups critiques, utilisant leurs compétences pour infliger des dégâts élevés.', 'windmonk.webp', 'Une tête blanche et bleu d\'un animal ressemblant à un lion représentant la spécialisation Eolien du moine', 'Capacités clés :', 'Danse des cieux : Une attaque de mêlée infligeant des dégâts en série.', 'Souffle du dragon : Une technique puissante infligeant des dégâts de zone.', 6),
(26, 'Tisse-brume', 'Les moines Tisse-brume sont des guérisseurs, utilisant des sorts et des techniques de méditation pour soigner leurs alliés.', 'mistmonk.webp', 'La tête d\'un dragon vert représentant la spécialisation tisse-brume du moine', 'Capacités clés :', 'Souffle de guérison : Un sort de soin puissant.', 'Bénédiction de la brume : Augmente les soins reçus et réduit les dégâts subis.', 5),
(27, 'Affliction', 'Les démonistes Affliction se spécialisent dans les sorts de dégâts sur la durée, infligeant des malédictions et des poisons à leurs ennemis.', 'affliwarlock.webp', 'Un crâne de profil, noir avec une fumée verte autour représentant la spécialisation affliction du démoniste', 'Capacités clés :', 'Dévoreur d\'âmes : Un sort infligeant des dégâts et régénérant les points de vie du démoniste.', 'Peste dévorante : Inflige des dégâts et applique un poison sur la cible.', 6),
(28, 'Démonologie', 'Les démonistes Démonologie invoquent des démons pour les assister dans le combat, infligeant des dégâts puissants et contrôlant le champ de bataille.', 'demowarlock.webp', 'Un démon avec les yeux rouges représentant la spécialisation démonologie du démoniste', 'Capacités clés :', 'Explosion de démon : Inflige des dégâts en zone en utilisant les pouvoirs du démon.', 'Invocation de démon : Invoque un démon pour combattre à vos côtés.', 6),
(29, 'Destruction', 'Les démonistes Destruction infligent des dégâts directs puissants à leurs ennemis en utilisant le feu et les ténèbres.', 'destrowarlock.webp', 'Des météorites tombantes en feu représentant la spécialisation destruction du démoniste', 'Capacités clés :', 'Chaos de feu : Une attaque infligeant des dégâts de feu massifs.', 'Pluie de feu : Inflige des dégâts en zone avec une pluie d\'éléments enflammés.', 6),
(30, 'Arcanes', 'Les mages Arcanes se spécialisent dans les sorts de magie pure, infligeant des dégâts puissants et utilisant des capacités pour régénérer leur mana.', 'arcanemage.webp', 'Un œil et des éclairs bleu provenant de l\'œil représentant la spécialisation arcane du mage', 'Capacités clés :', 'Éclair de givre : Inflige des dégâts et ralentit la cible.', 'Barrage des arcanes : Une attaque infligeant des dégâts arcanes en continu.', 6),
(31, 'Feu', 'Les mages Feu se concentrent sur les sorts de feu, infligeant des dégâts importants et brûlant leurs ennemis.', 'firemage.webp', 'Une comète en feu se dirigeant vers le haut représentant la spécialisation feu du mage', 'Capacités clés :', 'Comète incendiaire : Une attaque de zone infligeant des dégâts importants.', 'Boule de feu : Un sort infligeant des dégâts de feu massifs.', 6),
(32, 'Givre', 'Les mages Givre utilisent des sorts de glace pour infliger des dégâts tout en contrôlant les mouvements de leurs ennemis.', 'frostmage.webp', 'Un grand bout de glace bleu tombant représentant la spécialisation givre du mage', 'Capacités clés :', 'Nova de givre : Une explosion de glace infligeant des dégâts et gelant les ennemis proches.', 'Morsure de givre : Inflige des dégâts et ralentit la cible.', 6),
(33, 'Élémentaire', 'Les chamans Élémentaire invoquent les pouvoirs des éléments pour infliger des dégâts puissants à leurs ennemis.', 'eleshaman.webp', 'Un éclair bleu sur fond noir représentant la spécialisation élémentaire du chaman', 'Capacités clés :', 'Foudre : Un sort infligeant des dégâts électriques importants.', 'Éruption volcanique : Une attaque de zone infligeant des dégâts de feu.', 6),
(34, 'Amélioration', 'Les chamans Amélioration se concentrent sur le combat rapproché, utilisant des capacités pour améliorer leurs attaques physiques.', 'enhshaman.webp', 'Un totem ressemblant à un marteau représentant la spécialisation amélioration du chaman', 'Capacités clés :', 'Frappe-tempête : Une attaque infligeant des dégâts et augmentant la vitesse d\'attaque.', 'Totem de lézard : Invoque un totem augmentant les dégâts infligés.', 6),
(35, 'Restaurateur', 'Les chamans Restaurateurs utilisent les pouvoirs des éléments pour soigner et soutenir leurs alliés.', 'restoshaman.webp', 'Un totem vert représentant la spécialisation restaurateur du chaman', 'Capacités clés :', 'Guérison en chaîne : Un sort de soin rebondissant entre les alliés blessés.', 'Vague de soins : Un sort de soin direct puissant.', 5),
(36, 'Équilibre', 'Les druides Équilibre manipulent les forces de la nature pour infliger des dégâts magiques avec des sorts de lune et de soleil.', 'balancedruid.webp', 'Une lune tombante représentant la spécialisation équilibre du druide', 'Capacités clés :', 'Éruption stellaire : Un sort infligeant des dégâts de nature.', 'Implosion lunaire : Inflige des dégâts de zone en utilisant les pouvoirs lunaires.', 6),
(37, 'Farouche', 'Les druides Farouche se spécialisent dans le combat rapproché en forme de félin, infligeant des dégâts rapides et utilisant des techniques de discrétion.', 'feraldruid.webp', 'Une patte avec des griffes de félin représentant la spécialisation farouche du druide', 'Capacités clés :', 'Morsure féroce : Une attaque infligeant des dégâts et des saignements.', 'Déchirure : Inflige des dégâts sur la durée.', 6),
(38, 'Restauration', 'Les druides Restauration utilisent les pouvoirs de la nature pour soigner leurs alliés et les protéger.', 'restodruid.webp', 'Une feuille verte dégageant une lumière blanche autour représentant la spécialisation restauration du druide', 'Capacités clés :', 'Récupération : Un sort de soin sur la durée.', 'Tranquillité : Un sort de soin de zone puissant.', 5),
(39, 'Gardien', 'Les druides Gardien se spécialisent dans la défense en utilisant la forme d\'ours pour encaisser les dégâts et protéger leurs alliés.', 'guardruid.webp', 'Une patte d\'ours noir et bleu représentant la spécialisation gardien du druide', 'Capacités clés :', 'Rugissement d\'ours : Augmente la résistance et réduit les dégâts reçus.', 'Taunt d\'ours : Attire l\'attention des ennemis sur le druide.', 3),
(40, 'Dévastation', 'Les évocateurs Dévastation se spécialisent dans les dégâts magiques, utilisant les pouvoirs des dragons pour infliger des dégâts puissants et contrôler le champ de bataille.', 'devevoker.webp', 'Une tête de dragon entrain de souffler du feu représentant la spécialisation dévastation de l\'évocateur', 'Capacités clés :', 'Souffle du dragon : Une attaque infligeant des dégâts en ligne droite.', 'Explosion de lave : Inflige des dégâts en zone.', 6),
(41, 'Préservation', 'Les évocateurs Préservation utilisent les pouvoirs des dragons pour soigner et protéger leurs alliés, apportant un soutien précieux dans les combats.', 'preevoker.webp', 'Un trèfle à 5 feuilles représentant la spécialisation préservation de l\'évocateur', 'Capacités clés :', 'Souffle de vie : Un sort de soin en zone régénérant les points de vie des alliés.', 'Réparation du temps : Soigne et protège les alliés contre les dégâts.', 5),
(42, 'Augmentation', 'Les évocateurs Augmentation se concentrent sur le renforcement de leurs alliés et l’amélioration de leurs capacités, utilisant les pouvoirs des dragons pour augmenter les performances de groupe.', 'augevoker.webp', 'Une météorite entouré par une aura de dragon représentant la spécialisation augmentation de l\'évocateur', 'Capacités clés :', 'Amplification des pouvoirs : Augmente temporairement les capacités offensives et défensives des alliés.', 'Essor des dragons : Invoque des énergies draconiennes pour améliorer les compétences de combat de l’équipe.', 6),
(43, 'Vengeance', 'Les chasseurs de démons Vengeance se spécialisent dans la défense, utilisant leur agilité et leurs pouvoirs démoniaques pour encaisser les dégâts et protéger leurs alliés.', 'vengdh.webp', 'Une forme démoniaque verte et noir représentant la spécialisation vengeance du chasseur de démons', 'Capacités clés :', 'Métamorphose : Transforme le chasseur de démons en une forme démoniaque pour augmenter ses capacités défensives.', 'Flamme du Chaos : Inflige des dégâts de feu en zone.', 6),
(44, 'Dévastation', 'Les chasseurs de démons Havoc se concentrent sur les dégâts rapides et dévastateurs, utilisant leur agilité et leur magie démoniaque pour infliger des dégâts massifs à leurs ennemis.', 'havocdh.webp', 'La tête du chasseur de démons avec ses ailes en arrière plan représentant la spécialisation dévastation du chasseur de démons', 'Capacités clés :', 'Démon de chaos : Invoque un démon pour infliger des dégâts.', 'Eclat de Chaos : Une attaque infligeant des dégâts puissants.', 3);

---

--
-- Structure de la table `tdh`
--

DROP TABLE IF EXISTS `tdh`;
CREATE TABLE IF NOT EXISTS `tdh` (
`id` int NOT NULL AUTO_INCREMENT,
`tdh_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
`description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
`image` varchar(30) NOT NULL,
`alt` varchar(255) NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `tdh`
--

INSERT INTO `tdh` (`id`, `tdh_name`, `description`, `image`, `alt`) VALUES
(3, 'Tank', 'Les tanks sont les spécialisations qui absorbent et encaissent les dégâts des ennemis, protégeant ainsi les autres membres du groupe. Ils possèdent des capacités pour attirer l\'attention des ennemis (connue sous le nom d\'aggro ou de menace), des compétences de mitigation pour réduire les dégâts reçus, et des sorts de survie pour rester en vie dans des situations critiques. Des exemples de spécialisations de tank incluent le Guerrier Protection, le Paladin Protection, et le Chevalier de la Mort Sang.', 'tankk.webp', 'Un bouclier représentant les Tanks dans le jeu World of Warcraft'),
(5, 'Soigneur', 'Les spécialisations de soigneur ont pour mission principale de maintenir les alliés en vie en restaurant leur santé et en les protégeant contre les dégâts. Les soigneurs utilisent une variété de sorts de soins, des boucliers protecteurs et des sorts de réduction des dégâts. Des exemples de spécialisations de soin incluent le Prêtre Sacré, le Druide Restauration, et le Chaman Restauration.', 'heal.webp', 'Une croix représentant les Soigneurs dans le jeu World of Warcraft'),
(6, 'DPS', 'Les spécialisations DPS (Dégats Par Seconde) se concentrent sur l\'infligement de dégâts aux ennemis. Elles peuvent être divisées en deux sous-catégories : le DPS à distance, qui utilise des sorts ou des attaques à distance pour infliger des dégâts de manière sécurisée depuis l\'arrière du groupe, et le DPS corps à corps, qui se bat au cœur du combat en utilisant des armes de mêlée. Des exemples de spécialisations DPS incluent le Mage Feu, le Voleur Finesse, et le Chasseur Précision.', 'dps.webp', 'Une épée représentant les DPS (dégats par seconde) dans le jeu World of Warcraft');

---

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
`id` int NOT NULL AUTO_INCREMENT,
`nickname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
`email` varchar(100) NOT NULL,
`password` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`status` int NOT NULL DEFAULT '0',
`role_id` int NOT NULL DEFAULT '1',
PRIMARY KEY (`id`),
KEY `fk_role_id` (`role_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `nickname`, `email`, `password`, `created_at`, `status`, `role_id`) VALUES
(30, 'Administrateur1', 'administrateur1@gmail.com', '$2b$10$JT86LK2mOw43BJobAyOWLudP9Ak7oGihKWRsP6Mqb2M.jvjMvPVeO', '2024-08-21 17:22:49', 0, 2),
(31, 'utilisateur1', 'utilisateur1@gmail.com', '$2b$10$i5ow4skSvA11RarbS64W7Oz.zlSqNcK8beTkIMqSYPALSUEckErWm', '2024-08-21 17:36:52', 0, 1),
(32, 'Banni1', 'banni1@gmail.com', '$2b$10$YZ4NVRGCuqiFSpB5HXCDRO/khLlGpBJU3sHAPEsb.JPH55Gbvf/6O', '2024-08-21 17:37:32', 1, 1);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `alert`
--
ALTER TABLE `alert`
ADD CONSTRAINT `fk_comment_id` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `comment`
--
ALTER TABLE `comment`
ADD CONSTRAINT `fk2_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `fk_person_id` FOREIGN KEY (`person_id`) REFERENCES `person` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `person_skills`
--
ALTER TABLE `person_skills`
ADD CONSTRAINT `fk2_role_id` FOREIGN KEY (`tdh_id`) REFERENCES `tdh` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `fk_character_id` FOREIGN KEY (`person_id`) REFERENCES `person` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `fk_specialization_id` FOREIGN KEY (`specialization_id`) REFERENCES `specialization` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `specialization`
--
ALTER TABLE `specialization`
ADD CONSTRAINT `fk2_tdh_id` FOREIGN KEY (`tdh_id`) REFERENCES `tdh` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
ADD CONSTRAINT `fk_function_id` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
COMMIT;

/_!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT _/;
/_!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS _/;
/_!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION _/;
