# Color Palette Specification

## Purpose

Selección del color con el que se dibuja.

## Requirements

### Requirement: Paleta de colores
El sistema DEBE ofrecer una paleta de 8 colores (negro, blanco, rojo, naranja, amarillo, verde azulado, azul y violeta), con el negro seleccionado al empezar, y DEBE distinguir visualmente el color seleccionado.

#### Scenario: Color inicial
- **WHEN** se abre la aplicación
- **THEN** el negro está seleccionado

#### Scenario: Elegir un color
- **WHEN** la persona pulsa un color de la paleta
- **THEN** ese color queda marcado como seleccionado y deja de estarlo el anterior
- **AND** los trazos siguientes se dibujan con ese color
