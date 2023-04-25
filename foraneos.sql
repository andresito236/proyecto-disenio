-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-04-2023 a las 01:48:37
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `foraneos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `egreso`
--

CREATE TABLE `egreso` (
  `EgresoID` int(11) NOT NULL,
  `Monto` decimal(11,2) NOT NULL,
  `Descripcion` text NOT NULL,
  `Fecha` date NOT NULL,
  `TipoID` int(11) NOT NULL,
  `Confirmacion` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `egreso`
--

INSERT INTO `egreso` (`EgresoID`, `Monto`, `Descripcion`, `Fecha`, `TipoID`, `Confirmacion`) VALUES
(2, '500.00', 'Salida al cine con mis hermanos', '2023-04-17', 2, b'1'),
(3, '6000.00', 'Compra de un televisor', '2023-04-18', 3, b'1'),
(46, '200.00', 'Compra de una refrigeradora', '2023-04-23', 3, b'1'),
(47, '150.00', 'Compra de almuerzo', '2023-04-23', 1, b'1'),
(71, '500.00', 'Salida a jugar futbol', '2023-04-25', 2, b'0'),
(72, '1000.00', 'Salida a comer con mi familia', '2023-04-25', 1, b'0');

--
-- Disparadores `egreso`
--
DELIMITER $$
CREATE TRIGGER `actualizar_tabla` BEFORE UPDATE ON `egreso` FOR EACH ROW BEGIN
    IF NEW.Fecha > NOW() THEN
        SET NEW.Confirmacion = 0;
    END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `actualizar_tabla_confirmacion` BEFORE UPDATE ON `egreso` FOR EACH ROW BEGIN
    IF NEW.fecha <= NOW() THEN
        SET NEW.Confirmacion = 1;
    END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `ins_confirm_egr` BEFORE INSERT ON `egreso` FOR EACH ROW BEGIN
		IF NEW.Fecha > CURDATE() THEN
			SET NEW.confirmacion = 0;
		END IF;
	END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingreso`
--

CREATE TABLE `ingreso` (
  `IngresoID` int(11) NOT NULL,
  `Monto` decimal(11,2) NOT NULL,
  `Descripcion` text NOT NULL,
  `Fecha` date NOT NULL,
  `TipoID` int(11) NOT NULL,
  `Confirmacion` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `ingreso`
--

INSERT INTO `ingreso` (`IngresoID`, `Monto`, `Descripcion`, `Fecha`, `TipoID`, `Confirmacion`) VALUES
(1, '15500.00', 'Pago de salario quincenal', '2023-04-20', 1, b'1'),
(4, '50000.00', 'Pago de salario mensual', '2023-04-19', 1, NULL),
(8, '500.00', 'Regalo de navidad', '2023-04-24', 2, NULL),
(14, '10000.00', 'Pago de salario mensual', '2023-04-25', 1, b'0'),
(15, '15000.00', 'Bonificación del trabajo', '2023-04-25', 2, b'0');

--
-- Disparadores `ingreso`
--
DELIMITER $$
CREATE TRIGGER `actualizar_ingreso_tabla` BEFORE UPDATE ON `ingreso` FOR EACH ROW BEGIN
    IF NEW.fecha > NOW() THEN
        SET NEW.Confirmacion = 0;
    END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `actualizar_ingresos_tabla_confirmacion` BEFORE UPDATE ON `ingreso` FOR EACH ROW BEGIN
    IF NEW.fecha <= NOW() THEN
        SET NEW.Confirmacion = 1;
    END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `ins_confirm_ing` BEFORE INSERT ON `ingreso` FOR EACH ROW BEGIN
		IF NEW.Fecha > CURDATE() THEN
			SET NEW.confirmacion = 0;
		END IF;
	END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoegreso`
--

CREATE TABLE `tipoegreso` (
  `TipoID` int(11) NOT NULL,
  `Nombre` enum('Comida','Impuestos','Ocio','Mantenimiento de hogar','Otras personas') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tipoegreso`
--

INSERT INTO `tipoegreso` (`TipoID`, `Nombre`) VALUES
(1, 'Comida'),
(2, 'Ocio'),
(3, 'Mantenimiento de hogar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoingreso`
--

CREATE TABLE `tipoingreso` (
  `TipoID` int(11) NOT NULL,
  `Nombre` enum('Salario','Intereses','Regalos') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tipoingreso`
--

INSERT INTO `tipoingreso` (`TipoID`, `Nombre`) VALUES
(1, 'Salario'),
(2, 'Regalos');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `egreso`
--
ALTER TABLE `egreso`
  ADD PRIMARY KEY (`EgresoID`),
  ADD KEY `fkTipoEgreso` (`TipoID`);

--
-- Indices de la tabla `ingreso`
--
ALTER TABLE `ingreso`
  ADD PRIMARY KEY (`IngresoID`),
  ADD KEY `fkTipoIngreso` (`TipoID`);

--
-- Indices de la tabla `tipoegreso`
--
ALTER TABLE `tipoegreso`
  ADD PRIMARY KEY (`TipoID`);

--
-- Indices de la tabla `tipoingreso`
--
ALTER TABLE `tipoingreso`
  ADD PRIMARY KEY (`TipoID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `egreso`
--
ALTER TABLE `egreso`
  MODIFY `EgresoID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT de la tabla `ingreso`
--
ALTER TABLE `ingreso`
  MODIFY `IngresoID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `egreso`
--
ALTER TABLE `egreso`
  ADD CONSTRAINT `fkTipoEgreso` FOREIGN KEY (`TipoID`) REFERENCES `tipoegreso` (`TipoID`);

--
-- Filtros para la tabla `ingreso`
--
ALTER TABLE `ingreso`
  ADD CONSTRAINT `fkTipoIngreso` FOREIGN KEY (`TipoID`) REFERENCES `tipoingreso` (`TipoID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
