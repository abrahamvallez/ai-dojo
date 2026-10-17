# Delta for Brush Size

## Purpose

Elección del grosor con el que se dibujan los trazos, entre 1 y 40 píxeles.

## ADDED Requirements

### Requirement: Selector de grosor
El sistema DEBE ofrecer un control para elegir el grosor del trazo entre 1 y 40 píxeles, con 4 como valor inicial, y DEBE mostrar en todo momento el grosor elegido.

#### Scenario: Valor inicial
- **WHEN** se abre la aplicación
- **THEN** el grosor elegido es 4
- **AND** se ve en el control

#### Scenario: Cambiar el grosor
- **GIVEN** el grosor elegido es 4
- **WHEN** la persona elige 20
- **THEN** el control muestra 20

#### Scenario: Límites
- **WHEN** la persona intenta elegir un grosor menor que 1 o mayor que 40
- **THEN** el grosor queda en 1 o en 40, respectivamente

### Requirement: El grosor afecta solo a lo que se dibuja después
El sistema DEBE aplicar el grosor elegido únicamente a lo que se dibuje tras el cambio, sin modificar lo ya dibujado, y NO DEBE recordarlo entre sesiones.

#### Scenario: Lo ya dibujado no cambia
- **GIVEN** un trazo dibujado con grosor 4
- **WHEN** la persona cambia el grosor a 30
- **THEN** el trazo existente mantiene su grosor de 4

#### Scenario: Nueva sesión
- **GIVEN** la persona eligió grosor 30 y recarga la página
- **WHEN** se vuelve a abrir la aplicación
- **THEN** el grosor elegido es 4
