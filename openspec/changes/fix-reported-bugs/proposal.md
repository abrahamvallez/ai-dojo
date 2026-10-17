# Proposal

## Why

Dos fallos reportados por personas usuarias: un clic sin arrastrar no deja ninguna marca en el lienzo (BUG-1) y los nombres de dibujo con símbolos se interpretan como HTML en la lista (BUG-2).

## What Changes

- Un clic o un toque sin arrastrar dibuja un punto.
- Los nombres de los dibujos se muestran siempre tal cual los escribió la persona.

## Capabilities

### New Capabilities

Ninguna.

### Modified Capabilities

- `canvas-drawing`: nuevo requisito para el punto de un solo clic.
- `saved-drawings`: nuevo requisito para mostrar los nombres como texto.

## Impact

- Frontend: lienzo y lista de dibujos.
- Sin cambios en la API ni en los datos guardados.
