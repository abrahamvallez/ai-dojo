# Delta for Shapes

## Purpose

Dibujar líneas, rectángulos y elipses arrastrando sobre el lienzo.

## ADDED Requirements

### Requirement: Herramientas de forma
El sistema DEBE ofrecer las herramientas Línea, Rectángulo y Elipse junto al Lápiz y la Goma, y DEBE mostrar en todo momento cuál está activa.

#### Scenario: Elegir una forma
- **GIVEN** el Lápiz está activo
- **WHEN** la persona elige la herramienta Rectángulo
- **THEN** el Rectángulo pasa a estar activo y deja de estarlo el Lápiz

### Requirement: Dibujar una forma arrastrando
El sistema DEBE tomar el punto de pulsación y el punto actual como extremos de la línea o como esquinas opuestas del rectángulo y de la elipse, mostrar una vista previa mientras se arrastra y dibujar la forma al soltar, con el color y el grosor actuales.

#### Scenario: Rectángulo
- **GIVEN** la herramienta Rectángulo activa
- **WHEN** la persona pulsa en un punto, arrastra a otro y suelta
- **THEN** queda dibujado un rectángulo cuyas esquinas opuestas son esos dos puntos
- **AND** usa el color y el grosor actuales

#### Scenario: Línea
- **GIVEN** la herramienta Línea activa
- **WHEN** la persona pulsa en un punto, arrastra a otro y suelta
- **THEN** queda dibujada una línea recta entre esos dos puntos

#### Scenario: Elipse
- **GIVEN** la herramienta Elipse activa
- **WHEN** la persona pulsa en un punto, arrastra a otro y suelta
- **THEN** queda dibujada una elipse inscrita en el rectángulo cuyas esquinas opuestas son esos dos puntos

#### Scenario: Vista previa
- **GIVEN** una herramienta de forma activa
- **WHEN** la persona arrastra sin soltar
- **THEN** se ve cómo quedará la forma
- **AND** las posiciones intermedias no dejan marcas en el lienzo

### Requirement: Relleno
El sistema DEBE ofrecer una opción Relleno que, cuando está activa, rellena los rectángulos y las elipses con el color actual.

#### Scenario: Rectángulo relleno
- **GIVEN** la opción Relleno activa y la herramienta Rectángulo
- **WHEN** la persona dibuja un rectángulo
- **THEN** el interior del rectángulo se rellena con el color actual

#### Scenario: Sin relleno
- **GIVEN** la opción Relleno desactivada y la herramienta Elipse
- **WHEN** la persona dibuja una elipse
- **THEN** solo se dibuja el contorno

#### Scenario: La línea no se rellena
- **GIVEN** la opción Relleno activa y la herramienta Línea
- **WHEN** la persona dibuja una línea
- **THEN** se dibuja una línea normal

### Requirement: Ajuste con Shift
El sistema DEBE ajustar la forma mientras la persona mantiene pulsada la tecla Shift durante el arrastre: la línea a múltiplos de 45°, el rectángulo a un cuadrado y la elipse a un círculo.

#### Scenario: Línea a 45°
- **GIVEN** la herramienta Línea activa y Shift pulsado
- **WHEN** la persona arrastra en una dirección cercana a la diagonal
- **THEN** la línea se ajusta a la dirección múltiplo de 45° más cercana

#### Scenario: Cuadrado
- **GIVEN** la herramienta Rectángulo activa y Shift pulsado
- **WHEN** la persona arrastra
- **THEN** el rectángulo resultante tiene los cuatro lados iguales

#### Scenario: Círculo
- **GIVEN** la herramienta Elipse activa y Shift pulsado
- **WHEN** la persona arrastra
- **THEN** la elipse resultante es un círculo

### Requirement: Casos límite
El sistema DEBE cancelar la forma si el puntero sale del lienzo durante el arrastre y NO DEBE dibujar ninguna forma si se pulsa y se suelta en el mismo punto.

#### Scenario: El puntero sale del lienzo
- **GIVEN** la persona está arrastrando una forma
- **WHEN** el puntero sale del lienzo
- **THEN** la forma se cancela
- **AND** no se dibuja nada

#### Scenario: Forma sin tamaño
- **GIVEN** una herramienta de forma activa
- **WHEN** la persona pulsa y suelta en el mismo punto
- **THEN** no se dibuja ninguna forma
