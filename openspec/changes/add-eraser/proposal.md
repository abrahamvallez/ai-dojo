# Proposal

## Why

Para borrar, la gente elige el blanco. Funciona, pero no es evidente y dejaría de valer si algún día cambia el fondo (PR-2).

## What Changes

- Una herramienta Goma junto al Lápiz, con indicación visual de cuál está activa.
- La goma devuelve el fondo del lienzo y usa el grosor elegido.
- El blanco sale de la paleta, que pasa a tener 7 colores.
- Elegir un color con la goma activa vuelve al lápiz con ese color.

## Capabilities

### New Capabilities

- `eraser`: herramientas Lápiz y Goma, y comportamiento de borrado.

### Modified Capabilities

- `color-palette`: la paleta pierde el blanco.

## Impact

- Frontend: barra de herramientas, paleta y lienzo.
- Depende de `add-brush-size`, porque la goma usa el grosor elegido.
