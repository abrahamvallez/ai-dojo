# Delta for Eraser

## Purpose

Alternar entre dibujar con el lápiz y borrar con la goma, usando el mismo grosor.

## ADDED Requirements

### Requirement: Herramientas Lápiz y Goma
El sistema DEBE ofrecer las herramientas Lápiz y Goma, con el Lápiz activo al empezar, y DEBE mostrar en todo momento cuál está activa.

#### Scenario: Herramienta inicial
- **WHEN** se abre la aplicación
- **THEN** el Lápiz está activo
- **AND** se distingue visualmente de la Goma

#### Scenario: Cambiar a la goma
- **GIVEN** el Lápiz está activo
- **WHEN** la persona elige la Goma
- **THEN** la Goma pasa a estar activa y deja de estarlo el Lápiz

### Requirement: La goma devuelve el fondo
El sistema DEBE devolver el fondo del lienzo en las zonas por las que se arrastra con la Goma activa, usando el grosor elegido.

#### Scenario: Borrar un trazo
- **GIVEN** un trazo negro dibujado y la Goma activa
- **WHEN** la persona arrastra la goma sobre el trazo
- **THEN** la zona recorrida vuelve a mostrar el fondo del lienzo

#### Scenario: Grosor de la goma
- **GIVEN** la Goma activa y el grosor elegido en 20
- **WHEN** la persona arrastra la goma en línea recta
- **THEN** se borra una franja de 20 píxeles de ancho

### Requirement: Elegir un color vuelve al lápiz
El sistema DEBE activar el Lápiz con el color elegido cuando la persona elige un color de la paleta con la Goma activa, y DEBE mantener el último color usado al volver al Lápiz sin elegir otro.

#### Scenario: Elegir un color con la goma activa
- **GIVEN** la Goma activa
- **WHEN** la persona pulsa el color rojo
- **THEN** el Lápiz pasa a estar activo con el color rojo

#### Scenario: Volver al lápiz
- **GIVEN** el último color usado fue el azul y la Goma activa
- **WHEN** la persona elige el Lápiz
- **THEN** el Lápiz queda activo con el color azul
