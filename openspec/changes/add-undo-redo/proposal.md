# Proposal

## Why

Un error obliga a empezar de cero (PR-3).

## What Changes

- Acciones Deshacer y Rehacer, con botones y atajos de teclado.
- Un historial de al menos 30 pasos, donde cada acción completa de la persona es un paso.
- Abrir un dibujo guardado empieza un historial nuevo.

## Capabilities

### New Capabilities

- `history`: deshacer y rehacer las acciones sobre el lienzo.

### Modified Capabilities

Ninguna.

## Impact

- Frontend: estado del lienzo y barra de herramientas.
- Sin cambios en la API ni en los datos guardados.
- Las formas (`add-shape-tools`) y las acciones sobre capas (`add-layers`) cuentan como pasos del historial cuando existan.
