# Dojo Paint

Una app web sencilla para dibujar y guardar dibujos. Es el punto de partida del dojo.

## Requisitos

- Node.js 20.19 o superior (recomendado 22)
- Un navegador moderno

## Arrancar

```bash
npm install
npm run dev
```

Abre <http://localhost:5173>.

## Scripts

| Comando             | Qué hace                                       |
| ------------------- | ---------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo (frontend + API)        |
| `npm run build`     | Comprueba tipos y genera `dist/`               |
| `npm run preview`   | Sirve el build (también con API)               |
| `npm run typecheck` | Comprueba tipos con TypeScript                 |
| `npm test`          | Ejecuta los tests (Vitest)                     |

## Qué hace hoy

- Dibujar a mano alzada, con ratón o táctil
- Elegir entre 8 colores
- Limpiar el lienzo
- Guardar el dibujo con un nombre y volver a abrirlo desde "Mis dibujos"

## Estructura

```text
index.html                    Página única
src/main.ts                   Lienzo, herramientas y panel de dibujos
src/api.ts                    Cliente HTTP de la API
src/types.ts                  Tipos compartidos del frontend
server/api-plugin.ts          API REST montada sobre el servidor de Vite
server/drawing-store.ts       Persistencia en data/drawings.json
server/drawing-store.test.ts  Tests de la persistencia
data/                         drawings.json se crea al guardar el primer dibujo
```

## API

| Método y ruta          | Descripción                                             |
| ---------------------- | ------------------------------------------------------- |
| `GET /api/drawings`     | Lista los dibujos (sin imagen), del más reciente al más antiguo |
| `GET /api/drawings/:id` | Devuelve un dibujo con su imagen (PNG en data URL)      |
| `POST /api/drawings`    | Crea un dibujo. Cuerpo: `{ "name": string, "dataUrl": string }` |

## Tests

`npm test` cubre la capa de persistencia del servidor. El frontend no tiene tests.
