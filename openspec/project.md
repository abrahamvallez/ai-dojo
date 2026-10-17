# Contexto del proyecto

Dojo Paint es una aplicación web de dibujo que se ejecuta en local y no tiene autenticación.

## Stack

- Frontend: TypeScript (modo estricto) con Vite, sin framework. Un único lienzo `<canvas>`.
- Backend: API REST montada como plugin del servidor de Vite (`server/`), con persistencia en `data/drawings.json`.
- Tests: Vitest (`npm test`). Comprobación de tipos: `npm run typecheck`.

## Convenciones

- Código y nombres en inglés. Textos de la interfaz en español.
- `npm run typecheck`, `npm test` y `npm run build` deben pasar antes de dar un cambio por terminado.
- La lógica del servidor lleva tests. Para la interfaz, los que el equipo considere razonables.

## Cómo se organizan las specs

- `openspec/specs/` describe el comportamiento actual de la aplicación, por capacidad.
- `openspec/changes/<cambio>/` describe un cambio pendiente: la propuesta (`proposal.md`), las specs delta con lo que se añade o se modifica (`specs/`) y las tareas (`tasks.md`).
- Los cambios de esta carpeta son independientes entre sí, salvo donde la propuesta indica una dependencia.
