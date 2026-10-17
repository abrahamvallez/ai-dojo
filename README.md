# Problem-solution

Un espacio para probar cómo se pasa de un texto de producto a código, sobre una base existente. En esta rama tenéis una app que ya funciona y una lista de peticiones de producto.

## Qué vamos a probar

Tenéis **Dojo Paint**, una app web para dibujar y guardar dibujos, y un documento de producto con lo que hay que cambiarle: [`PRODUCT_REQUESTS.md`](./PRODUCT_REQUESTS.md).

El problema ya está descrito: dos bugs y seis peticiones, escritos como los escribiría alguien de producto, con sus reglas de negocio cerradas. No tenéis que descubrir qué construir. Lo interesante es **cómo vais desde ese texto hasta código funcionando** con IA: cómo lo entendéis, cómo se lo contáis a la IA, cómo entendéis el código que ya existe y cómo comprobáis que lo que sale está bien.

## Una premisa honesta

Nadie sabe todavía cuál es la mejor forma de desarrollar con IA: ni quien organiza esta sesión ni quien más la usa. No hay prácticas consolidadas. Es un momento parecido al de hace años, cuando nacieron prácticas como TDD o el movimiento ágil: incertidumbre, experimentos y gente compartiendo lo que le funcionaba y lo que no.

Por eso aquí no hay maestros ni alumnos, ni una forma correcta de hacerlo. Hay personas probando cosas, contando lo que les pasa y aprendiendo unas de otras. Como dice el Manifiesto Ágil, estamos descubriendo mejores formas de desarrollar software haciéndolo y ayudando a otros a hacerlo.

## Dinámica

- **Parejas.** Cada pareja trabaja con un único repo. Mejor si no trabajáis juntos a diario o si usáis herramientas distintas.
- **Tiempo.** 60-75 minutos de trabajo, 5 para preparar la retro y 30 de retro en común.
- **Qué hacéis.** Elegid qué peticiones abarcáis, en qué orden y con qué calidad, trabajando como lo haríais en el trabajo o probando algo distinto que no os atrevéis a probar allí. No hay que llegar al final, ni hay una solución de referencia ni un ranking.
- **Qué entregáis.** Nada. Lo que sale de la sesión es lo que veis, lo que probáis y lo que contáis en la retro.

### Acuerdos

1. Usad las herramientas con las que trabajáis a diario, o probad otras. Es un buen sitio para experimentar.
2. No hay expertos. Si la otra persona hace algo que vosotros no hacéis, no es ni mejor ni peor: preguntad y probadlo.
3. Pensad en voz alta: qué pedís, por qué lo pedís y qué comprobáis antes de aceptar lo que genera la IA.
4. Cambiad quién lleva el teclado cada 20 minutos aproximadamente.
5. Fallar vale. Si algo no funciona o la IA se equivoca, contadlo: lo que sale mal enseña tanto como lo que sale bien. Y acabar poco o mucho da igual.
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

Dejad las preguntas para el final, para que no condicionen cómo trabajáis. Ninguna tiene una respuesta correcta y no hace falta responderlas todas.

### Antes de la retro (5 minutos)

Escribid, cada persona por su cuenta, tres cosas: lo que más os sorprendió, un momento en que la IA se equivocó y cómo os disteis cuenta, y algo que creíais saber y de lo que ya no estáis tan seguros.

### En pareja (10 minutos)

1. ¿Cómo pasasteis de `PRODUCT_REQUESTS.md` a instrucciones para la IA? ¿Las copiasteis tal cual, las reescribisteis, las dividisteis?
2. ¿Qué ambigüedades encontrasteis en las peticiones? ¿Qué hicisteis con ellas: asumir, decidirlo entre vosotros, preguntar a la IA? ¿Qué le habríais preguntado a producto?
3. ¿Cómo entendisteis el código existente antes de tocarlo? ¿Qué papel tuvo la IA en eso?
4. ¿Qué orden elegisteis y por qué? ¿Os afectó alguna dependencia entre peticiones?
5. Ante el código que ya era mejorable, ¿qué hicisteis: lo tocasteis, lo refactorizasteis, lo rodeasteis? ¿Cuándo lo decidisteis?
6. ¿Cómo protegisteis lo que ya funcionaba?
7. ¿Cómo diagnosticasteis los bugs? ¿Os llevó la IA directa a la causa o tuvisteis que guiarla?
8. ¿Cómo comprobabais que algo estaba bien antes de pasar a lo siguiente?
9. ¿Qué probasteis que no hacéis normalmente? ¿Funcionó?
10. ¿Qué hizo la otra persona que vosotros no hacéis? ¿Lo probasteis?
11. ¿Qué parte del código generado no llevaríais a producción sin revisarla más?

### En grupo (20 minutos)

1. ¿Qué peticiones entendieron distinto las parejas? ¿Qué decisiones de producto tomó cada una por su cuenta?
2. ¿Dónde se notó más la calidad del código previo, para bien y para mal?
3. ¿Qué os habría gustado que viniera escrito en las peticiones para trabajar mejor con la IA?
4. ¿Qué prácticas aparecieron en varias parejas? ¿Y cuáles solo en una?
5. De lo que hemos visto, ¿qué os parece una buena práctica y qué os parece solo una impresión? ¿Cómo podríamos comprobarlo?
6. ¿Qué os ha sorprendido de la forma de trabajar de otra pareja?
7. ¿Qué hipótesis os lleváis para probar esta semana en el trabajo? ¿Cuándo la contaréis al grupo?

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
