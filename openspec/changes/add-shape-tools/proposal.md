# Proposal

## Why

Para hacer esquemas sencillos, a pulso no salen rectas (PR-4).

## What Changes

- Tres herramientas nuevas: Línea, Rectángulo y Elipse.
- Se dibujan arrastrando, con vista previa mientras se arrastra.
- Opción Relleno para rectángulo y elipse.
- La tecla Shift ajusta la forma (45°, cuadrado, círculo).

## Capabilities

### New Capabilities

- `shapes`: dibujo de líneas, rectángulos y elipses.

### Modified Capabilities

Ninguna.

## Impact

- Frontend: barra de herramientas y lienzo.
- Depende de `add-brush-size` y de `add-eraser` (selección de herramienta junto al Lápiz y la Goma).
- Con `add-undo-redo`, cada forma es un único paso del historial.
