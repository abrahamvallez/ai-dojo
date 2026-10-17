# Proposal

## Why

El trazo tiene siempre 4 píxeles: sirve para detalles, pero rellenar zonas grandes es muy lento (PR-1).

## What Changes

- Un control para elegir el grosor del trazo entre 1 y 40 píxeles, con 4 como valor inicial.
- El lápiz dibuja con el grosor elegido en lugar de uno fijo.

## Capabilities

### New Capabilities

- `brush-size`: elección del grosor del trazo.

### Modified Capabilities

- `canvas-drawing`: el grosor del trazo deja de ser fijo.

## Impact

- Frontend: barra de herramientas y lienzo.
- Sin cambios en la API ni en los datos guardados.
