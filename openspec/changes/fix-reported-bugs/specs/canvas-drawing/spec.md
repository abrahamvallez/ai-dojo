# Delta for Canvas Drawing

## ADDED Requirements

### Requirement: Punto con un solo clic
El sistema DEBE dibujar un punto con el color y el grosor actuales cuando la persona pulsa y suelta sin arrastrar.

#### Scenario: Clic con el ratón
- **GIVEN** un lienzo en blanco
- **WHEN** la persona pulsa y suelta el ratón en el mismo punto sin moverlo
- **THEN** se dibuja un punto en esa posición con el color seleccionado

#### Scenario: Toque en pantalla táctil
- **GIVEN** un lienzo en blanco en una pantalla táctil
- **WHEN** la persona toca el lienzo sin deslizar el dedo
- **THEN** se dibuja un punto en esa posición con el color seleccionado
