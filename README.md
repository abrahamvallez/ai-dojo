# Kata · development

Dojo de desarrollo con IA, en parejas. En esta rama tenéis una app que ya funciona y los cambios que hay que hacerle, ya especificados.

## El ejercicio

Tenéis **Dojo Paint**, una app web para dibujar y guardar dibujos. Lo que hay que cambiarle está especificado en [`openspec/changes/`](./openspec/changes), y cómo se comporta hoy, en [`openspec/specs/`](./openspec/specs).

Las specs ya están hechas, con escenarios concretos. No tenéis que pensar qué construir ni describirlo. Lo interesante es **cómo preparáis y ejecutáis ese trabajo con agentes**: qué contexto les dais, cómo dividís el trabajo, qué modo de ejecución elegís y cómo comprobáis el resultado.

Para desarrollar con IA no hay un estándar de buenas prácticas como lo es TDD. Por eso esto no es un ejercicio de maestro y alumno: **nadie sabe cuál es la forma correcta**. Se trata de trabajar como lo haríais en vuestro día a día y de aprender de cómo lo hace la otra persona.

## Cómo leer `openspec/`

La estructura está inspirada en OpenSpec.

- `openspec/project.md`: contexto y convenciones del proyecto.
- `openspec/specs/<capacidad>/spec.md`: el comportamiento actual de la app, en requisitos con escenarios.
- `openspec/changes/<cambio>/`: un cambio pendiente.
  - `proposal.md`: por qué se hace, qué cambia y qué impacto tiene.
  - `specs/<capacidad>/spec.md`: los requisitos que se añaden (`ADDED`) o se modifican (`MODIFIED`), con escenarios GIVEN/WHEN/THEN.
  - `tasks.md`: lista de tareas del cambio.

### Los cambios

| Ola     | Cambio                    | Qué hace                                             | Depende de                                |
| ------- | ------------------------- | ---------------------------------------------------- | ----------------------------------------- |
| 1       | `fix-reported-bugs`       | Punto con un clic y nombres mostrados como texto     | -                                         |
| 1       | `add-brush-size`          | Grosor del pincel de 1 a 40                          | -                                         |
| 1       | `add-eraser`              | Goma de borrar y paleta sin blanco                   | `add-brush-size`                          |
| 2       | `add-undo-redo`           | Deshacer y rehacer                                   | -                                         |
| 2       | `add-shape-tools`         | Línea, rectángulo y elipse                           | `add-brush-size`, `add-eraser`            |
| 2       | `manage-saved-drawings`   | Actualizar, renombrar y borrar dibujos guardados     | -                                         |
| Reto    | `add-layers`              | Capas                                                | Interactúa con casi todos los anteriores  |

## Dinámica

- **Parejas.** Cada pareja trabaja con un único repo. Mejor si no trabajáis juntos a diario o si usáis herramientas distintas.
- **Tiempo.** 60-75 minutos de trabajo, 5 para preparar la retro y 30 de retro en común.
- **Qué hacéis.** Elegid qué cambios abarcáis, en qué orden y con qué calidad. No hay que llegar al final, ni hay una solución de referencia ni un ranking.
- **Qué entregáis.** Nada. Lo que sale de la kata es lo que aprendéis y lo que contáis en la retro.

### Reglas

1. Cada persona usa las herramientas con las que trabaja a diario y las usa como lo haría un martes cualquiera.
2. No hay maestro ni alumno. Si la otra persona hace algo que vosotros no hacéis, preguntad y probadlo.
3. Pensad en voz alta: qué pedís, por qué lo pedís y qué comprobáis antes de aceptar lo que genera la IA.
4. Cambiad quién lleva el teclado cada 20 minutos aproximadamente.
5. Acabar menos y mejor es una decisión tan válida como acabar más.
6. Haced commits como en el trabajo.
7. Si os atascáis con el entorno (Node, red, instalación), pedid ayuda. Con el problema, no.

## Para empezar

Necesitáis Node.js 20.19 o superior (recomendado 22) y un navegador moderno.

```bash
npm install
npm run dev
```

Se abre en <http://localhost:5173>.

## Retro

Dejad las preguntas para el final, para que no condicionen cómo trabajáis. Ninguna tiene una respuesta correcta.

### Antes de la retro (5 minutos)

Escribid, cada persona por su cuenta, tres cosas: lo que más os sorprendió, un momento en que la IA se equivocó y cómo os disteis cuenta, y algo que haríais distinto si empezarais ahora.

### En pareja (10 minutos)

1. ¿Cómo le disteis las specs a los agentes: enteras, un cambio cada vez, un escenario cada vez? ¿Por qué?
2. ¿Trabajasteis en serie o en paralelo, con varios agentes a la vez? ¿Qué ventajas y problemas tuvo?
3. ¿Qué contexto adicional preparasteis (reglas del proyecto, instrucciones, comandos de verificación)? ¿Qué os faltó?
4. ¿Qué modo de ejecución usasteis (planificar antes, automático, paso a paso con revisión)? ¿Qué os hizo elegirlo?
5. ¿Cómo comprobabais que se cumplían los escenarios: a mano, con tests, pidiendo a la IA que revisara contra la spec?
6. ¿Encontrasteis ambigüedades, huecos o contradicciones en las specs? ¿Qué hicisteis con ellos?
7. ¿Qué pasó cuando el código existente no encajaba con lo que decía la spec?
8. ¿Qué papel tuvo `tasks.md`? ¿Lo seguisteis, lo ignorasteis, lo reescribisteis?
9. ¿Qué hizo la otra persona que vosotros no hacéis? ¿Lo probasteis?
10. ¿Qué parte de este trabajo no delegaríais en un agente?

### En grupo (20 minutos)

1. ¿Cuántos cambios cerró cada pareja y cuánto os fiáis de lo que cerró? ¿Rapidez frente a confianza?
2. ¿Qué diferencias de proceso hubo entre parejas (planificación, paralelismo, revisión)?
3. Con las specs ya escritas, ¿en qué se fue el tiempo?
4. ¿Las specs ayudaron o limitaron? ¿Qué echasteis en falta en ellas?
5. Si habéis hecho también `problem-solution`, ¿qué cambia entre trabajar desde specs y trabajar desde un texto de producto?
6. ¿Qué repetiríais mañana en el trabajo y qué descartaríais?

## Sobre la app

### Qué hace hoy

- Dibujar a mano alzada, con ratón o táctil
- Elegir entre 8 colores
- Limpiar el lienzo
- Guardar el dibujo con un nombre y volver a abrirlo desde "Mis dibujos"

### Scripts

| Comando             | Qué hace                                |
| ------------------- | --------------------------------------- |
| `npm run dev`       | Servidor de desarrollo (frontend + API) |
| `npm run build`     | Comprueba tipos y genera `dist/`        |
| `npm run preview`   | Sirve el build (también con API)        |
| `npm run typecheck` | Comprueba tipos con TypeScript          |
| `npm test`          | Ejecuta los tests (Vitest)              |

### Estructura

```text
index.html                    Página única
src/main.ts                   Lienzo, herramientas y panel de dibujos
src/api.ts                    Cliente HTTP de la API
src/types.ts                  Tipos compartidos del frontend
server/api-plugin.ts          API REST montada sobre el servidor de Vite
server/drawing-store.ts       Persistencia en data/drawings.json
server/drawing-store.test.ts  Tests de la persistencia
data/                         drawings.json se crea al guardar el primer dibujo
openspec/                     Specs del comportamiento actual y de los cambios pendientes
```

### API

| Método y ruta           | Descripción                                                      |
| ----------------------- | ---------------------------------------------------------------- |
| `GET /api/drawings`     | Lista los dibujos (sin imagen), del más reciente al más antiguo  |
| `GET /api/drawings/:id` | Devuelve un dibujo con su imagen (PNG en data URL)               |
| `POST /api/drawings`    | Crea un dibujo. Cuerpo: `{ "name": string, "dataUrl": string }`  |

### Tests

`npm test` cubre la capa de persistencia del servidor. El frontend no tiene tests.
