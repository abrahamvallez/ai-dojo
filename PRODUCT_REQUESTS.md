# Peticiones de producto · Dojo Paint

**De:** Producto · **Para:** Equipo de desarrollo

Hola equipo,

Tras las primeras semanas con Dojo Paint, esto es lo que más nos piden y lo que más nos duele. Va ordenado por prioridad: primero lo que desbloquea el uso diario y después lo más ambicioso. No hace falta llegar al final: decidid vosotros cuánto abarcáis y con qué calidad.

Cada petición tiene un identificador para que podáis citarlo en commits y conversaciones.

**Cómo leerlo**

- **Problema:** qué le pasa hoy al usuario.
- **Qué esperamos:** el comportamiento que daríamos por bueno.
- **Decisiones ya tomadas:** reglas cerradas, no hace falta volver a preguntarlas.
- **Libertad del equipo:** lo que dejamos en vuestras manos.

---

## Ola 1 · Arreglos y herramientas básicas

### BUG-1 · Un clic en el lienzo no deja marca

**Problema:** "Hago clic una vez para poner un punto y no pasa nada. Tengo que arrastrar un poquito."

**Qué esperamos:** un clic (o un toque, en pantalla táctil) sin arrastrar dibuja un punto con el color y el grosor actuales.

### BUG-2 · Los nombres con símbolos se ven mal en la lista

**Problema:** "Guardé un dibujo llamado `Casa <b>grande</b>` y en la lista salió 'Casa grande' en negrita. Otro con un `&` se veía raro."

**Qué esperamos:** el nombre aparece en la lista exactamente como lo escribió la persona, sea cual sea su contenido.

**Decisiones ya tomadas:** los nombres siguen admitiendo cualquier carácter, hasta 60.

### PR-1 · Grosor del pincel

**Problema:** "El trazo siempre es igual de fino. Para detalles va bien, pero rellenar zonas grandes es eterno."

**Qué esperamos:** un control para elegir el grosor del trazo entre 1 y 40 píxeles.

**Decisiones ya tomadas:**

- El valor inicial es 4, como ahora.
- Se ve en todo momento qué grosor está elegido.
- Afecta a lo que se dibuje desde ese momento. No cambia lo ya dibujado.
- No se recuerda entre sesiones: al recargar la página vuelve a 4.

**Libertad del equipo:** el tipo de control.

### PR-2 · Goma de borrar

**Problema:** "Para borrar elijo el blanco. Funciona, pero no es nada evidente y no valdría si algún día el fondo cambia."

**Qué esperamos:** una herramienta Goma junto al Lápiz. Se alterna entre ambas y siempre se ve cuál está activa. La goma devuelve el fondo del lienzo y usa el grosor elegido.

**Decisiones ya tomadas:**

- El blanco sale de la paleta (quedan 7 colores).
- Si se elige un color con la goma activa, se vuelve al lápiz con ese color.
- Al volver al lápiz se mantiene el último color usado.

**Depende de:** PR-1.

---

## Ola 2 · Lo que cambia cómo se trabaja

### PR-3 · Deshacer y rehacer

**Problema:** "Un error y tengo que empezar de cero."

**Qué esperamos:** botones Deshacer y Rehacer, y atajos de teclado.

**Decisiones ya tomadas:**

- Atajos: Ctrl/Cmd+Z deshace. Ctrl/Cmd+Shift+Z y Ctrl+Y rehacen.
- Un paso es una acción completa de la persona: un trazo (de pulsar a soltar), un borrado con la goma, una forma (PR-4) o un Limpiar.
- El historial guarda como mínimo 30 pasos. Al superarlos se pierden los más antiguos.
- Si se deshace y luego se dibuja algo nuevo, lo que se podía rehacer se descarta.
- Los botones se ven deshabilitados cuando no hay nada que deshacer o rehacer.
- Abrir un dibujo guardado empieza un historial nuevo.
- Guardar no afecta al historial.

### PR-4 · Formas: línea, rectángulo y elipse

**Problema:** "Quiero hacer esquemas sencillos y a pulso no me salen rectas."

**Qué esperamos:** tres herramientas nuevas junto al Lápiz y la Goma. Se dibujan arrastrando: el punto donde se pulsa y el punto actual son los extremos de la línea, o las esquinas opuestas del rectángulo y de la elipse. Mientras se arrastra se ve cómo quedará y al soltar queda dibujada.

**Decisiones ya tomadas:**

- Usan el color y el grosor actuales.
- Opción "Relleno" para rectángulo y elipse: si está activa, se rellenan con el color actual.
- Con Shift pulsado: la línea se ajusta a múltiplos de 45°, el rectángulo pasa a ser un cuadrado y la elipse un círculo.
- Si el puntero sale del lienzo mientras se arrastra, la forma se cancela y no se dibuja nada.
- Pulsar y soltar en el mismo punto no dibuja ninguna forma.
- Cada forma es un único paso del historial (PR-3).

### PR-5 · Gestionar los dibujos guardados

**Problema:** "Guardo pruebas y la lista se llena. Y si retoco un dibujo y lo guardo otra vez con el mismo nombre, me salen duplicados."

**Qué esperamos:**

- Que se vea qué dibujo hay abierto, si hay alguno.
- Que Guardar, con un dibujo abierto, lo actualice en lugar de crear otro. Debe existir una segunda opción, Guardar como nuevo, que sí cree uno.
- Que cada dibujo de la lista se pueda renombrar y borrar.

**Decisiones ya tomadas:**

- Los nombres son únicos, sin distinguir mayúsculas de minúsculas. Si ya existe, se avisa y no se guarda nada.
- Borrar pide confirmación y no se puede deshacer.
- Si se borra el dibujo abierto, el lienzo se queda como está, pero ya no hay ningún dibujo abierto.
- Un dibujo recién guardado, ya sea con Guardar o con Guardar como nuevo, pasa a ser el dibujo abierto.
- Guardar un dibujo abierto no cambia su nombre. Para cambiarlo está Renombrar.
- Cada dibujo guarda también cuándo se modificó por última vez. La lista muestra esa fecha y va del más reciente al más antiguo según ella.
- Los dibujos que ya existen se tratan como si su última modificación fuese su creación.

**Libertad del equipo:** cómo se presenta todo esto en la interfaz.

---

## Reto

### PR-6 · Capas

**Problema:** "Quiero retocar un fondo sin cargarme lo que dibujé encima."

**Qué esperamos:** un panel de capas con lo básico: crear, seleccionar, mostrar u ocultar, reordenar y eliminar.

**Decisiones ya tomadas:**

- Entre 1 y 5 capas.
- Las capas son transparentes sobre el fondo blanco del lienzo, que no es una capa.
- La capa nueva se añade encima de todas, se llama "Capa N", donde N es la posición que ocupa al crearla, y pasa a ser la activa.
- Solo la capa activa recibe lo que se dibuja (lápiz, goma y formas). La goma deja transparente.
- Una capa oculta no se ve. El orden decide qué queda encima.
- Siempre queda al menos una capa. Al eliminar la activa, pasa a serlo la de debajo, o la de encima si era la inferior.
- Limpiar limpia solo la capa activa.
- Al guardar se conservan todas las capas (nombre, orden, visibilidad y contenido) y al abrir se restauran.
- Los dibujos guardados antes de que existieran las capas se abren con una única capa.
- Las acciones sobre capas (crear, eliminar, reordenar, mostrar u ocultar) también se pueden deshacer.

**Si no llegáis a todo,** este es el orden de prioridad: dibujar por capas, mostrar u ocultar, reordenar, guardar y abrir, deshacer.

---

## Fuera de alcance por ahora

Inicio de sesión, varios usuarios, exportar a PNG, zoom, colores personalizados. Lo que hoy funciona en pantalla táctil no debe empeorar.

## Criterios generales

- Funciona en una versión reciente de Chrome y de Firefox.
- Lo que ya funciona hoy no se rompe.
- La app sigue arrancando con `npm install && npm run dev`.
