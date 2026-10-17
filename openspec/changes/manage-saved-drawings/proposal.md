# Proposal

## Why

La lista de dibujos se llena de pruebas y, si se retoca un dibujo y se guarda otra vez con el mismo nombre, aparecen duplicados (PR-5).

## What Changes

- Se indica qué dibujo está abierto, y un dibujo recién guardado pasa a ser el abierto.
- Guardar con un dibujo abierto lo actualiza. Nueva acción Guardar como nuevo.
- Los nombres son únicos, sin distinguir mayúsculas de minúsculas.
- Cada dibujo de la lista se puede renombrar y borrar (con confirmación).
- Cada dibujo guarda su fecha de última modificación, que la lista muestra y usa para ordenar.

## Capabilities

### New Capabilities

Ninguna.

### Modified Capabilities

- `saved-drawings`: guardar, listar y abrir cambian, y se añaden renombrar, borrar y el dibujo abierto.

## Impact

- Frontend: panel de dibujos guardados.
- API y persistencia: nuevas operaciones (actualizar, renombrar y borrar), validación de nombres únicos y un campo nuevo en los datos.
- Los dibujos que ya existen deben seguir funcionando.
