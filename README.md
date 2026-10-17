# Kata · problem-solution

Dojo de desarrollo con IA, en parejas. En esta rama tenéis una app que ya funciona y una lista de peticiones de producto.

## El ejercicio

Tenéis **Dojo Paint**, una app web para dibujar y guardar dibujos, y un documento de producto con lo que hay que cambiarle: [`PRODUCT_REQUESTS.md`](./PRODUCT_REQUESTS.md).

El problema ya está descrito: dos bugs y seis peticiones, escritos como los escribiría alguien de producto, con sus reglas de negocio cerradas. No tenéis que descubrir qué construir. Lo interesante es **cómo vais desde ese texto hasta código funcionando** con IA: cómo lo entendéis, cómo se lo contáis a la IA, cómo entendéis el código que ya existe y cómo comprobáis que lo que sale está bien.

Para desarrollar con IA no hay un estándar de buenas prácticas como lo es TDD. Por eso esto no es un ejercicio de maestro y alumno: **nadie sabe cuál es la forma correcta**. Se trata de trabajar como lo haríais en vuestro día a día y de aprender de cómo lo hace la otra persona.

## Dinámica

- **Parejas.** Cada pareja trabaja con un único repo. Mejor si no trabajáis juntos a diario o si usáis herramientas distintas.
- **Tiempo.** 60-75 minutos de trabajo, 5 para preparar la retro y 30 de retro en común.
- **Qué hacéis.** Elegid qué peticiones abarcáis, en qué orden y con qué calidad. No hay que llegar al final, ni hay una solución de referencia ni un ranking.
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

1. ¿Cómo pasasteis de `PRODUCT_REQUESTS.md` a instrucciones para la IA? ¿Las copiasteis tal cual, las reescribisteis, las dividisteis?
2. ¿Qué ambigüedades encontrasteis en las peticiones? ¿Qué hicisteis con ellas: asumir, decidirlo entre vosotros, preguntar a la IA? ¿Qué le habríais preguntado a producto?
3. ¿Cómo entendisteis el código existente antes de tocarlo? ¿Qué papel tuvo la IA en eso?
4. ¿Qué orden elegisteis y por qué? ¿Os afectó alguna dependencia entre peticiones?
5. Ante el código que ya era mejorable, ¿qué hicisteis: lo tocasteis, lo refactorizasteis, lo rodeasteis? ¿Cuándo lo decidisteis?
6. ¿Cómo protegisteis lo que ya funcionaba?
7. ¿Cómo diagnosticasteis los bugs? ¿Os llevó la IA directa a la causa o tuvisteis que guiarla?
8. ¿Cómo comprobabais que algo estaba bien antes de pasar a lo siguiente?
9. ¿Qué hizo la otra persona que vosotros no hacéis? ¿Lo probasteis?
10. ¿Qué parte del código generado no llevaríais a producción sin revisarla más?

### En grupo (20 minutos)

1. ¿Qué peticiones entendieron distinto las parejas? ¿Qué decisiones de producto tomó cada una por su cuenta?
2. ¿Dónde se notó más la calidad del código previo, para bien y para mal?
3. ¿Qué os habría gustado que viniera escrito en las peticiones para trabajar mejor con la IA?
4. ¿Qué prácticas aparecieron en varias parejas? ¿Y cuáles solo en una?
5. ¿Qué repetiríais mañana en el trabajo y qué descartaríais?
6. ¿Qué os ha sorprendido de la forma de trabajar de otra pareja?

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
```

### API

| Método y ruta           | Descripción                                                      |
| ----------------------- | ---------------------------------------------------------------- |
| `GET /api/drawings`     | Lista los dibujos (sin imagen), del más reciente al más antiguo  |
| `GET /api/drawings/:id` | Devuelve un dibujo con su imagen (PNG en data URL)               |
| `POST /api/drawings`    | Crea un dibujo. Cuerpo: `{ "name": string, "dataUrl": string }`  |

### Tests

`npm test` cubre la capa de persistencia del servidor. El frontend no tiene tests.
