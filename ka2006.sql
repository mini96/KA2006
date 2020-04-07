-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 07, 2020 at 05:04 AM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ka2006`
--

-- --------------------------------------------------------

--
-- Table structure for table `CalculationTable`
--

CREATE TABLE `CalculationTable` (
  `user_ID` int(11) NOT NULL,
  `Optical u` varchar(10) NOT NULL,
  `Optical g` varchar(10) NOT NULL,
  `Optical r` varchar(10) NOT NULL,
  `Optical i` varchar(10) NOT NULL,
  `Optical z` varchar(10) NOT NULL,
  `Infrared 3.6` varchar(10) NOT NULL,
  `Infrared 4.5` varchar(10) NOT NULL,
  `Infrared 5.8` varchar(10) NOT NULL,
  `Infrared 8.0` varchar(10) NOT NULL,
  `Infrared J` varchar(10) NOT NULL,
  `Infrared K` varchar(10) NOT NULL,
  `Radio 1.4GHz` varchar(10) NOT NULL,
  `date` datetime(6) NOT NULL,
  `fileInput` varchar(1000) NOT NULL,
  `redshift_Result` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `userID` int(11) NOT NULL COMMENT 'UserId unique to every user',
  `user_name` varchar(30) NOT NULL COMMENT 'name or email of person',
  `hash_password` varchar(15) NOT NULL COMMENT 'password of user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`userID`, `user_name`, `hash_password`) VALUES
(1, 'Tanzila', 'pass1234'),
(2, 'Harry', 'Ha2345');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `CalculationTable`
--
ALTER TABLE `CalculationTable`
  ADD PRIMARY KEY (`user_ID`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`userID`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `CalculationTable`
--
ALTER TABLE `CalculationTable`
  MODIFY `user_ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'UserId unique to every user', AUTO_INCREMENT=3;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
