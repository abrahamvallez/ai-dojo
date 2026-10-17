# Guion de facilitación

Para quien dinamiza la sesión. Las ramas de cada variante no incluyen este documento a propósito: contiene notas que no deben ver las parejas.

## Tu papel

No eres un experto ni se espera que lo seas: nadie lo es. Tu trabajo es cuidar un espacio donde sea fácil probar cosas, fallar y contar lo que pasa, y eso te incluye a ti. Si tienes opiniones sobre cómo trabajar con IA, ofrécelas como hipótesis, no como respuestas.

## Antes de la sesión

- Elegid variante o variantes y formato de sesión (más abajo).
- Comprobad que cada ordenador tiene Node 20.19 o superior (`node -v`), git, un navegador moderno y su herramienta de IA funcionando.
- Haced una vez `git clone`, `npm install` y `npm run dev` en un ordenador de la sala. La instalación es lo que más falla (red, proxy).
- Preparad un tablero compartido para la retro, con las columnas de la sección de retro.
- Tened un cronómetro visible.

## Formatos de sesión

### A. Una variante (2 horas)

| Minutos | Qué                              |
| ------- | -------------------------------- |
| 0-10    | Intro                            |
| 10-15   | Parejas y arranque               |
| 15-90   | Sesión de trabajo (75 min)       |
| 90-95   | Preparar la retro                |
| 95-125  | Retro                            |

### B. Dos variantes con cambio de pareja (3 horas)

Es el más recomendable: cambiar de pareja entre rondas multiplica lo que se aprende de cómo trabaja cada persona. Primero `greenfield` y después `problem-solution` o `development`.

| Minutos | Qué                                            |
| ------- | ---------------------------------------------- |
| 0-10    | Intro                                          |
| 10-15   | Parejas y arranque                             |
| 15-65   | Ronda 1: `greenfield` (50 min)                 |
| 65-75   | Pausa y parejas nuevas                         |
| 75-135  | Ronda 2: `problem-solution` o `development`    |
| 135-140 | Preparar la retro                              |
| 140-175 | Retro                                          |

Hacer las tres variantes en una sola sesión no es realista.

## Intro (10 minutos)

Qué contar:

1. **Qué es:** un espacio para probar cosas y compartir cómo desarrollamos con IA. Parejas, un problema pequeño y poca guía.
2. **Por qué existe:** nadie sabe todavía cuál es la mejor forma de desarrollar con IA. Estamos como hace años, cuando nacieron prácticas como TDD o el movimiento ágil: experimentando, compartiendo y equivocándonos. Podéis leer la frase con la que empieza el Manifiesto Ágil: *We are uncovering better ways of developing software by doing it and helping others do it.*
3. **Qué esperamos:** que probéis, que penséis en voz alta y que contéis lo que pasa, también cuando sale mal. Es un buen momento para probar algo que no os atrevéis a probar en el trabajo.
4. **Qué no hay:** expertos, solución de referencia, ranking, evaluación ni demo final.
5. **Los acuerdos:** leerlos del README de la rama.
6. **Qué haré yo:** no ayudar con el cómo, sí con el entorno. Pasaré por las parejas a observar y a preguntar por qué hacéis lo que hacéis. Y también estoy experimentando: no sé más que vosotros.
7. **Tiempos y retro:** cuándo acaba y cómo será la retro.

## Durante la sesión

**Qué hacer:**

- Observar y anotar qué hace cada pareja y cuándo.
- Preguntar sin dirigir: "¿por qué le habéis pedido eso?", "¿cómo sabéis que está bien?".
- Avisar del tiempo: a la mitad, a 10 minutos y a 5.
- Recordar el cambio de teclado cada 20 minutos.
- Compartir lo que vayas descubriendo, como una observación más y no como una corrección.

**Qué no hacer:** sugerir herramientas, corregir enfoques o decir "eso no se hace así". Nadie sabe todavía cómo se hace.

**Cuándo intervenir:**

- Problemas de entorno: siempre.
- Una pareja lleva más de 10 minutos bloqueada: con una pregunta, no con la solución.
- Una persona acapara el teclado: recordar el acuerdo.

### Qué observar

- **Contexto:** qué le dan a la IA (brief, reglas del proyecto, specs), cuándo y cómo lo actualizan.
- **Planificación:** si planifican antes de ejecutar o van directos.
- **Granularidad:** si piden cosas grandes o pequeñas.
- **Verificación:** si prueban a mano, con tests, leyendo el diff o pidiendo una revisión a la IA.
- **Cuando falla:** cómo lo detectan y qué hacen (repetir, reformular, escribirlo a mano).
- **Código existente** (ramas con app): cómo lo entienden y si refactorizan o lo rodean.
- **Reparto en la pareja:** quién teclea, quién piensa, si hablan, si usan IA a la vez.
- **Experimentos:** si prueban algo que no hacen normalmente y qué pasa.
- **Commits:** tamaño y ritmo.

Apuntad frases literales: dan mucho juego en la retro.

## Retro (30-35 minutos)

1. **5 minutos, en solitario:** las tres cosas del README.
2. **10 minutos, en pareja:** las preguntas del README de su rama. No hace falta responderlas todas.
3. **20 minutos, en grupo:** en el tablero, con estas columnas. Cada pareja pega una o dos notas por columna, se agrupan y se comenta lo que más se repite y lo que más diverge.

   - Cómo empezamos
   - Qué contexto dimos a la IA
   - Dónde falló
   - Cómo verificamos
   - Lo que me llevo de mi pareja
   - Lo que probaré esta semana

Cierre: cada persona nombra una hipótesis que va a probar esta semana en el trabajo, y se acuerda cómo y cuándo se contará al grupo (un canal, la siguiente sesión).

Consejos: pedid ejemplos concretos, evitad hablar de "lo correcto" y buscad las diferencias entre parejas. Las preguntas de grupo están en el README de cada rama.

## Después de la sesión

Recoged lo aprendido (fotos del tablero, notas, frases literales) y compartidlo con quienes participaron. Lo que se aprende aquí vale más si se acumula y se contrasta: si alguien prueba su hipótesis, que la cuente. Y si a alguien se le ocurre una variante nueva del problema, que la proponga.

## Notas por rama

### `greenfield`

- El brief es mínimo a propósito y no da criterios técnicos: el stack lo eligen ellas.
- Si piden aclaraciones, devolved la pregunta: "¿qué asumiríais?".
- El ritmo varía mucho entre parejas. Es normal que unas lleguen a guardar y otras no.

### `problem-solution` y `development`: la base

Las dos ramas parten de la misma app, con partes sanas y partes mejorables a propósito.

**Sano:** `server/` (almacén con 14 tests y API con validación), `src/api.ts` y `src/types.ts`.

**Mejorable a propósito, en `src/main.ts`:**

- Estado global mutable.
- Una función `init()` larga que construye el DOM y registra eventos.
- Manejadores de ratón y táctil duplicados.
- Números mágicos (800, 500, 4) y estilos en línea.
- `alert` para errores y sin gestión de errores al abrir un dibujo.
- `any`, código comentado y un TODO.
- Sin tests de frontend.

**Bugs reales** (son BUG-1 y BUG-2 de las peticiones): un clic sin arrastrar no dibuja, y los nombres se pintan con `innerHTML` sin escapar, lo que permite inyectar HTML.

**Trampas intencionadas:**

- El estado del lienzo es el propio bitmap, sin modelo de trazos. Deshacer, la vista previa de las formas y las capas obligan a decidir cómo se representa el dibujo.
- El blanco es un color de la paleta y es lo que se usa para borrar.
- La API solo crea y lee. Actualizar, renombrar, borrar y los nombres únicos tocan servidor y datos, y hay que tratar los dibujos ya existentes.
- Lo guardado es un único PNG. Guardar capas obliga a cambiar el formato y a migrar.

**Dependencias entre peticiones:** PR-2 usa el grosor de PR-1. PR-4 usa las herramientas de PR-2 y el grosor de PR-1. PR-3 cuenta las formas (PR-4) y las capas (PR-6). PR-6 toca casi todo y es un reto: no se espera que nadie lo termine en una sesión.

**Comprobado:** la base se probó en un navegador real (dibujar, cambiar de color, limpiar, guardar, recargar y reabrir). `npm run typecheck`, `npm test` (14 tests) y `npm run build` pasan.

### `problem-solution` frente a `development`

Las decisiones de producto son las mismas en los dos formatos (`PRODUCT_REQUESTS.md` y `openspec/changes/`). Cambia cuánto está formalizado: en `development` ya hay escenarios y tareas, y no queda ambigüedad. Si un grupo hace las dos, es buen material para la retro: qué cambió al pasar de un texto de producto a specs.

**Sobre el formato OpenSpec:**

- La estructura imita la de OpenSpec: `specs/` para el comportamiento actual y `changes/` con propuesta, specs delta (`ADDED` y `MODIFIED`) y tareas.
- No hay `design.md`, que en OpenSpec es opcional, ni ficheros de instrucciones de ninguna herramienta. Es a propósito: que cada pareja prepare su propio contexto.
- La estructura se ha comprobado con un script propio, no con la CLI de OpenSpec.
- OpenSpec pide SHALL o MUST. Aquí se usa DEBE para mantener el español. Si queréis usar la CLI, sustituidlo y revisad lo que genere.

## Reiniciar y reutilizar

- Para repetir con otra pareja, clonad de nuevo. Si repetís en el mismo clon, borrad `data/drawings.json` para vaciar los dibujos guardados.
- Si cambiáis la base, aplicad el cambio en las dos ramas con app: comparten el commit inicial.

## Variantes que faltan

Quedan dos por construir, que pueden ser ramas nuevas con el mismo esquema:

- **`discovery`:** pensar la funcionalidad y escribir las specs. Las de `development` sirven de referencia para comparar.
- **`autopilot`:** automatizar el desarrollo por completo, de las specs al código con la menor intervención posible.
