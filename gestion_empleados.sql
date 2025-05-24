-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3333
-- Generation Time: May 24, 2025 at 03:51 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gestion_empleados`
--

-- --------------------------------------------------------

--
-- Table structure for table `asistencias`
--

CREATE TABLE `asistencias` (
  `id` int(11) NOT NULL,
  `empleado_id` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `presente` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `asistencias`
--

INSERT INTO `asistencias` (`id`, `empleado_id`, `fecha`, `presente`) VALUES
(1, 4, '2025-05-23', 1),
(2, 9, '2025-05-23', 1),
(3, 10, '2025-05-23', 1),
(4, 11, '2025-05-23', 1),
(5, 13, '2025-05-23', 1),
(6, 14, '2025-05-23', 1),
(7, 25, '2025-05-23', 1),
(8, 30, '2025-05-23', 1),
(9, 20, '2025-05-23', 1),
(10, 15, '2025-05-23', 0),
(11, 16, '2025-05-23', 1),
(12, 17, '2025-05-23', 1),
(13, 18, '2025-05-23', 1),
(14, 19, '2025-05-23', 1),
(15, 21, '2025-05-23', 1),
(16, 22, '2025-05-23', 1),
(17, 23, '2025-05-23', 1),
(18, 24, '2025-05-23', 1),
(19, 26, '2025-05-23', 1),
(20, 27, '2025-05-23', 1),
(21, 28, '2025-05-23', 1),
(22, 29, '2025-05-23', 1),
(23, 31, '2025-05-23', 1),
(24, 32, '2025-05-23', 1),
(25, 33, '2025-05-23', 1),
(27, 20, '2025-05-24', 0),
(29, 4, '2025-05-24', 1),
(30, 9, '2025-05-24', 1),
(31, 10, '2025-05-24', 1),
(32, 11, '2025-05-24', 1),
(33, 13, '2025-05-24', 1),
(34, 14, '2025-05-24', 1),
(35, 15, '2025-05-24', 1),
(36, 16, '2025-05-24', 1),
(37, 17, '2025-05-24', 1),
(38, 18, '2025-05-24', 1),
(39, 19, '2025-05-24', 1),
(40, 21, '2025-05-24', 1),
(41, 22, '2025-05-24', 1),
(42, 23, '2025-05-24', 1),
(43, 24, '2025-05-24', 1),
(44, 25, '2025-05-24', 1),
(45, 26, '2025-05-24', 1),
(46, 27, '2025-05-24', 1),
(47, 28, '2025-05-24', 1),
(48, 29, '2025-05-24', 1),
(49, 30, '2025-05-24', 1),
(50, 31, '2025-05-24', 1),
(51, 32, '2025-05-24', 1),
(52, 33, '2025-05-24', 1);

-- --------------------------------------------------------

--
-- Table structure for table `beneficios`
--

CREATE TABLE `beneficios` (
  `id` int(11) NOT NULL,
  `empleado_id` int(11) DEFAULT NULL,
  `mes` int(11) DEFAULT NULL,
  `anio` int(11) DEFAULT NULL,
  `porcentaje_asistencia` decimal(5,2) DEFAULT NULL,
  `bono` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `beneficios`
--

INSERT INTO `beneficios` (`id`, `empleado_id`, `mes`, `anio`, `porcentaje_asistencia`, `bono`) VALUES
(1, 17, 5, 2024, 100.00, 500.00),
(2, 20, 5, 2024, 95.00, 300.00),
(3, 20, 5, 2024, 100.00, 700.00),
(4, 29, 5, 2024, 100.00, 1000.00),
(5, 30, 5, 2024, 98.00, 200.00);

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `curp` varchar(18) DEFAULT NULL,
  `rfc` varchar(13) DEFAULT NULL,
  `horario` varchar(50) DEFAULT NULL,
  `sueldo` decimal(10,2) DEFAULT NULL,
  `puesto` varchar(100) DEFAULT NULL,
  `antiguedad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `nombre`, `apellidos`, `telefono`, `correo`, `direccion`, `fecha_nacimiento`, `curp`, `rfc`, `horario`, `sueldo`, `puesto`, `antiguedad`) VALUES
(4, 'Pablo', 'Lopez Gonzalez', '4421236325', 'lgpablo@hotmail.com', 'C. Granado 33, Arboledas', '1997-10-19', 'LOGPKRME334IGHK2M3', 'LOGPKRME3', '07:00 - 13:00', 15000.00, 'Área administrativa', 6),
(9, 'Javier Adrián', 'Puebla Díaz', '4421522251', 'pdjavier@gmail.com', 'Ft. de San Juan de Ulua #204 El Vergel', '2005-09-16', 'PUDJ19VMSCJAS1QI2', 'PUDJ19VM', '13:00 - 21:00', 9000.00, 'Área administrativa', 2),
(10, 'Diego César', 'Gómez Santana', '4420192848', 'gsdiego@gmail.com', 'Jesús Arriaga 167, Amalia Solorzano', '2005-03-17', 'GOSD91KCDOAKE32UJ1', 'GOSD91KC', '12:00 - 20:00', 12000.00, 'Área impacto vial', 5),
(11, 'Milton Uzziel', 'Chablé Pérez', '4421829098', 'cpmilton@gmail.com', 'C. De la Nieve 111, Lomas de Satelite', '1990-06-06', 'CHPMAJ234KD20S1KMS', 'CHPMAJ23', '13:00 - 21:00', 1500.00, 'Coordinacion de Proteccion Civil', 4),
(13, 'Francisco Hugo', 'Tovar Torres', '4421920393', 'ttfran@gmail.com', 'Cerro de Pathé 246, Las Americas', '1979-04-20', 'TOTFKSMWI2P0FG984K', 'TOTFKSMWI2P0F', '11:00 - 18:00', 12000.00, 'Área Auxiliar', 10),
(14, 'Carlos', 'Trejo Gomez', '4421829464', 'tgcarlos@gmail.com', 'Choles 304, Cerrito Colorado', '1999-08-14', 'TRGCWIFJ19QWDSA9EJ', 'TRGCWIFJ19QWD', '07:00 - 15:00', 20000.00, 'Departamento de Energías Renovables', 3),
(15, 'Juan', 'Pérez López', '4421234567', 'juan.perez@email.com', 'Calle 1 #123', '1980-01-01', 'PEPJ800101HQTLLL01', 'PEPJ800101XXX', '9:00-17:00', 8500.00, 'Departamento de Energías Renovables', 5),
(16, 'María', 'García Torres', '4422345678', 'maria.garcia@email.com', 'Calle 2 #234', '1985-02-02', 'GATM850202MDFRRR02', 'GATM850202XXX', '8:00-16:00', 9000.00, 'Departamento de Energías Renovables', 4),
(17, 'Luis', 'Martínez Díaz', '4423456789', 'luis.martinez@email.com', 'Calle 3 #345', '1990-03-03', 'MADL900303HQTLLL03', 'MADL900303XXX', '10:00-18:00', 9500.00, 'Área Auxiliar', 3),
(18, 'Ana', 'Sánchez Ruiz', '4424567890', 'ana.sanchez@email.com', 'Calle 4 #456', '1992-04-04', 'SARA920404MDFRRR04', 'SARA920404XXX', '7:00-15:00', 8700.00, 'Área Auxiliar', 2),
(19, 'Carlos', 'Hernández Gómez', '4425678901', 'carlos.hernandez@email.com', 'Calle 5 #567', '1988-05-05', 'HEGC880505HQTLLL05', 'HEGC880505XXX', '11:00-19:00', 10000.00, 'Departamento Juridico', 6),
(20, 'Laura', 'Ramírez Castro', '4426789012', 'laura.ramirez@email.com', 'Calle 6 #678', '1995-06-06', 'RACL950606MDFRRR06', 'RACL950606XXX', '8:00-16:00', 9300.00, 'Departamento Juridico', 2),
(21, 'Miguel', 'Flores Vela', '4427890123', 'miguel.flores@email.com', 'Calle 7 #789', '1987-07-07', 'FOVM870707HQTLLL07', 'FOVM870707XXX', '9:00-17:00', 8800.00, 'Obra Civil', 7),
(22, 'Patricia', 'Morales Soto', '4428901234', 'patricia.morales@email.com', 'Calle 8 #890', '1991-08-08', 'MOSP910808MDFRRR08', 'MOSP910808XXX', '10:00-18:00', 9100.00, 'Obra Civil', 3),
(23, 'Jorge', 'Vega Luna', '4429012345', 'jorge.vega@email.com', 'Calle 9 #901', '1983-09-09', 'VELJ830909HQTLLL09', 'VELJ830909XXX', '7:00-15:00', 9700.00, 'Coordinación de impacto ambiental', 8),
(24, 'Gabriela', 'Cruz Peña', '4420123456', 'gabriela.cruz@email.com', 'Calle 10 #012', '1994-10-10', 'CRPG941010MDFRRR10', 'CRPG941010XXX', '8:00-16:00', 9200.00, 'Área administrativa', 2),
(25, 'Ricardo', 'Navarro Ortiz', '4421234501', 'ricardo.navarro@email.com', 'Calle 11 #123', '1986-11-11', 'NARR861111HQTLLL11', 'NARR861111XXX', '9:00-17:00', 8700.00, 'Área administrativa', 5),
(26, 'Fernanda', 'Silva Ríos', '4422345602', 'fernanda.silva@email.com', 'Calle 12 #234', '1993-12-12', 'SIRF931212MDFRRR12', 'SIRF931212XXX', '10:00-18:00', 9400.00, 'Área contable', 3),
(27, 'Hugo', 'Castro León', '4423456703', 'hugo.castro@email.com', 'Calle 13 #345', '1989-01-13', 'CAOH890113HQTLLL13', 'CAOH890113XXX', '7:00-15:00', 9800.00, 'Área contable', 6),
(28, 'Paola', 'Mendoza Gil', '4424567804', 'paola.mendoza@email.com', 'Calle 14 #456', '1996-02-14', 'MEGP960214MDFRRR14', 'MEGP960214XXX', '8:00-16:00', 9100.00, 'Área de ingeniería y nuevos proyectos', 1),
(29, 'David', 'Reyes Bravo', '4425678905', 'david.reyes@email.com', 'Calle 15 #567', '1984-03-15', 'REBD840315HQTLLL15', 'REBD840315XXX', '9:00-17:00', 8700.00, 'Área de ingeniería y nuevos proyectos', 9),
(30, 'Sandra', 'López Figueroa', '4426789006', 'sandra.lopez@email.com', 'Calle 16 #678', '1992-04-16', 'LOFS920416MDFRRR16', 'LOFS920416XXX', '10:00-18:00', 9300.00, 'Coordinación de impacto ambiental', 2),
(31, 'Alejandro', 'Torres Salas', '4427890107', 'alejandro.torres@email.com', 'Calle 17 #789', '1985-05-17', 'TOSA850517HQTLLL17', 'TOSA850517XXX', '7:00-15:00', 9900.00, 'Área de impacto vial', 7),
(32, 'Monica', 'Gómez Díaz', '4428901208', 'monica.gomez@email.com', 'Calle 18 #890', '1991-06-18', 'GODM910618MDFRRR18', 'GODM910618XXX', '8:00-16:00', 9200.00, 'Área de impacto vial', 3),
(33, 'Sergio', 'Pineda Ramos', '4429012309', 'sergio.pineda@email.com', 'Calle 19 #901', '1987-07-19', 'PIRS870719HQTLLL19', 'PIRS870719XXX', '9:00-17:00', 8800.00, 'Área de medio ambiente y protección civil', 6);

-- --------------------------------------------------------

--
-- Table structure for table `nominas`
--

CREATE TABLE `nominas` (
  `id` int(11) NOT NULL,
  `empleado_id` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `salario_base` decimal(10,2) DEFAULT NULL,
  `bono` decimal(10,2) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nominas`
--

INSERT INTO `nominas` (`id`, `empleado_id`, `fecha`, `salario_base`, `bono`, `total`) VALUES
(1, 20, '2024-05-01', 9000.00, 500.00, 9500.00),
(2, 20, '2024-04-01', 9000.00, 0.00, 9000.00),
(3, 22, '2024-05-01', 8500.00, 300.00, 8800.00),
(4, 22, '2024-04-01', 8500.00, 0.00, 8500.00),
(5, 31, '2024-05-01', 9500.00, 700.00, 10200.00),
(6, 16, '2024-05-01', 8700.00, 0.00, 8700.00),
(7, 17, '2024-05-01', 10000.00, 1000.00, 11000.00),
(8, 18, '2024-05-01', 9300.00, 0.00, 9300.00),
(9, 27, '2024-05-01', 8800.00, 200.00, 9000.00),
(10, 28, '2024-05-01', 9100.00, 0.00, 9100.00),
(11, 4, '2025-05-01', 15000.00, 600.00, 15600.00),
(12, 9, '2025-05-01', 9000.00, 360.00, 9360.00),
(13, 10, '2025-05-01', 12000.00, 480.00, 12480.00),
(14, 11, '2025-05-01', 1500.00, 60.00, 1560.00),
(15, 13, '2025-05-01', 12000.00, 480.00, 12480.00),
(16, 14, '2025-05-01', 20000.00, 800.00, 20800.00),
(17, 15, '2025-05-01', 8500.00, 340.00, 8840.00),
(18, 16, '2025-05-01', 9000.00, 360.00, 9360.00),
(19, 17, '2025-05-01', 9500.00, 380.00, 9880.00),
(20, 18, '2025-05-01', 8700.00, 348.00, 9048.00),
(21, 19, '2025-05-01', 10000.00, 400.00, 10400.00),
(22, 20, '2025-05-01', 9300.00, 372.00, 9672.00),
(23, 21, '2025-05-01', 8800.00, 352.00, 9152.00),
(24, 22, '2025-05-01', 9100.00, 364.00, 9464.00),
(25, 23, '2025-05-01', 9700.00, 388.00, 10088.00),
(26, 24, '2025-05-01', 9200.00, 368.00, 9568.00),
(27, 25, '2025-05-01', 8600.00, 344.00, 8944.00),
(28, 26, '2025-05-01', 9400.00, 376.00, 9776.00),
(29, 27, '2025-05-01', 9800.00, 392.00, 10192.00),
(30, 28, '2025-05-01', 9100.00, 364.00, 9464.00),
(31, 29, '2025-05-01', 8700.00, 348.00, 9048.00),
(32, 30, '2025-05-01', 9300.00, 372.00, 9672.00),
(33, 31, '2025-05-01', 9900.00, 396.00, 10296.00),
(34, 32, '2025-05-01', 9200.00, 368.00, 9568.00),
(35, 33, '2025-05-01', 8800.00, 352.00, 9152.00),
(37, 4, '2025-05-01', 15000.00, 600.00, 15600.00),
(38, 20, '2025-05-01', 9300.00, 372.00, 9672.00),
(39, 4, '2025-05-01', 15000.00, 600.00, 15600.00);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'AdminRH', '$2b$10$tVirpbXhX0osE42iyjmGueMUThIq4i.Q63tgO8dlBfbQDx81NV70u'),
(7, 'administrador01', '$2b$10$CcO.kpGCrw/PQVJAwddmae.xITV.U309SQbbAK1r6vpT4KlGDQiw.'),
(8, 'RecursosHumanosPro', '$2b$10$o3D8Bs0lAGkOwXk4MInOUuG6ku4FM4drtM.lxM0wQ.Ky9JFhhZq3G'),
(9, 'tecnicos', '$2b$10$Jx0svVAPeXztfjcm52nHTOXxp4nA5s7/IMNUjTp6heZU0jJC9jmsO');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `asistencias`
--
ALTER TABLE `asistencias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `asistencias_ibfk_1` (`empleado_id`);

--
-- Indexes for table `beneficios`
--
ALTER TABLE `beneficios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nominas`
--
ALTER TABLE `nominas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nominas_ibfk_1` (`empleado_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `asistencias`
--
ALTER TABLE `asistencias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `beneficios`
--
ALTER TABLE `beneficios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `nominas`
--
ALTER TABLE `nominas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `asistencias`
--
ALTER TABLE `asistencias`
  ADD CONSTRAINT `asistencias_ibfk_1` FOREIGN KEY (`empleado_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `nominas`
--
ALTER TABLE `nominas`
  ADD CONSTRAINT `nominas_ibfk_1` FOREIGN KEY (`empleado_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
