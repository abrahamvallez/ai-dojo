# Greenfield

Un espacio para probar cómo se empieza de cero con IA. En esta rama no hay nada construido: solo un problema.

## Qué vamos a probar

Hay que construir un **paint en el navegador**. El problema está en [`BRIEF.md`](./BRIEF.md) y cabe en una página. No hay código, ni stack, ni estructura de partida: lo decidís todo vosotros, desde la primera línea.

Lo interesante no es el paint. Es **cómo empezáis desde cero con IA**: qué decidís primero, qué le pedís, cómo vais construyendo y cómo comprobáis que lo que sale está bien.

## Una premisa honesta

Nadie sabe todavía cuál es la mejor forma de desarrollar con IA: ni quien organiza esta sesión ni quien más la usa. No hay prácticas consolidadas. Es un momento parecido al de hace años, cuando nacieron prácticas como TDD o el movimiento ágil: incertidumbre, experimentos y gente compartiendo lo que le funcionaba y lo que no.

Por eso aquí no hay maestros ni alumnos, ni una forma correcta de hacerlo. Hay personas probando cosas, contando lo que les pasa y aprendiendo unas de otras. Como dice el Manifiesto Ágil, estamos descubriendo mejores formas de desarrollar software haciéndolo y ayudando a otros a hacerlo.

## Dinámica

- **Parejas.** Cada pareja trabaja con un único repo. Mejor si no trabajáis juntos a diario o si usáis herramientas distintas.
- **Tiempo.** 45-60 minutos de trabajo, 5 para preparar la retro y 30 de retro en común.
- **Qué hacéis.** Resolved el brief como lo haríais en el trabajo, o probad algo distinto que no os atrevéis a probar allí. No hay que acabar nada concreto, ni hay una solución de referencia ni un ranking.
- **Qué entregáis.** Nada. Lo que sale de la sesión es lo que veis, lo que probáis y lo que contáis en la retro.

### Acuerdos

1. Usad las herramientas con las que trabajáis a diario, o probad otras. Es un buen sitio para experimentar.
2. No hay expertos. Si la otra persona hace algo que vosotros no hacéis, no es ni mejor ni peor: preguntad y probadlo.
3. Pensad en voz alta: qué pedís, por qué lo pedís y qué comprobáis antes de aceptar lo que genera la IA.
4. Cambiad quién lleva el teclado cada 20 minutos aproximadamente.
5. Fallar vale. Si algo no funciona o la IA se equivoca, contadlo: lo que sale mal enseña tanto como lo que sale bien. Y acabar poco o mucho da igual.
6. Haced commits como en el trabajo.
7. Si os atascáis con el entorno (instalación, red), pedid ayuda. Con el problema, no.

## Para empezar

Esta carpeta ya es un repositorio git con la rama `greenfield`. Crear el proyecto aquí dentro es lo primero que tenéis que decidir.

Necesitáis un navegador moderno y lo que requiera el stack que elijáis. Si no tenéis preferencia, Vite con TypeScript arranca rápido y necesita Node.js 20.19 o superior.

## Retro

Dejad las preguntas para el final, para que no condicionen cómo trabajáis. Ninguna tiene una respuesta correcta y no hace falta responderlas todas.

### Antes de la retro (5 minutos)

Escribid, cada persona por su cuenta, tres cosas: lo que más os sorprendió, un momento en que la IA se equivocó y cómo os disteis cuenta, y algo que creíais saber y de lo que ya no estáis tan seguros.

### En pareja (10 minutos)

1. ¿Cómo empezasteis? ¿Quién propuso qué y por qué: el stack, la estructura, el primer paso?
2. ¿Qué le dijisteis a la IA al principio y qué contexto le fuisteis dando después? ¿Qué cambiaríais de ese primer mensaje?
3. ¿Cómo dividisteis el problema: en trozos pequeños o de golpe? ¿Qué os hizo cambiar de enfoque?
4. ¿En qué momento la IA se equivocó o se fue por las ramas? ¿Cómo os disteis cuenta?
5. ¿Cómo comprobabais que algo estaba bien antes de seguir: a mano, con tests, leyendo el código?
6. ¿Qué decisiones técnicas tomó la IA por su cuenta sin que se las pidierais? ¿Las revisasteis?
7. ¿Qué probasteis que no hacéis normalmente? ¿Funcionó?
8. ¿Qué hizo la otra persona que vosotros no hacéis? ¿Lo probasteis?
9. ¿Cuánto del código generado entendéis? ¿Qué parte no llevaríais a producción sin revisarla más?

### En grupo (20 minutos)

1. ¿Qué decisiones tomaron todas las parejas y cuáles fueron distintas: stack, orden de trabajo, tests?
2. ¿Cómo empezó cada pareja? ¿Qué diferencias hubo y qué consecuencias tuvieron?
3. ¿Qué prácticas aparecieron en varias parejas? ¿Y cuáles solo en una?
4. De lo que hemos visto, ¿qué os parece una buena práctica y qué os parece solo una impresión? ¿Cómo podríamos comprobarlo?
5. ¿Qué cosas que dábamos por sabidas han dejado de estar claras?
6. ¿Qué os ha sorprendido de la forma de trabajar de otra pareja?
7. ¿Qué hipótesis os lleváis para probar esta semana en el trabajo? ¿Cuándo la contaréis al grupo?
