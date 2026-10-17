# Proposal

## Why

Retocar un fondo sin cargarse lo que se dibujó encima no es posible con un único lienzo (PR-6).

## What Changes

- Un panel de capas: crear, seleccionar, mostrar u ocultar, reordenar y eliminar, entre 1 y 5 capas.
- Lo que se dibuja (lápiz, goma y formas) afecta solo a la capa activa.
- Limpiar limpia solo la capa activa.
- Guardar conserva todas las capas y abrir las restaura. Los dibujos anteriores se abren con una única capa.
- Las acciones sobre capas se pueden deshacer.

## Capabilities

### New Capabilities

- `layers`: pila de capas transparentes sobre el fondo del lienzo.

### Modified Capabilities

- `canvas-drawing`: Limpiar pasa a actuar solo sobre la capa activa.

## Impact

- Es el cambio más amplio: afecta al lienzo, a la barra de herramientas, a la API y a los datos guardados.
- Interactúa con `add-eraser` (la goma deja transparente), `add-shape-tools` (las formas van a la capa activa), `add-undo-redo` (las acciones sobre capas son pasos del historial) y `manage-saved-drawings` (qué se guarda y cómo se abre un dibujo).
- Los dibujos que ya existen deben seguir abriéndose.

## Prioridad si no hay tiempo para todo

Dibujar por capas, mostrar u ocultar, reordenar, guardar y abrir, deshacer.
