# AI Dev Dojo

Un espacio abierto para experimentar, compartir y aprender juntos cómo desarrollar con IA.

> *We are uncovering better ways of developing software by doing it and helping others do it.*
>
> Manifiesto por el Desarrollo Ágil de Software, 2001

## Por qué existe

Hoy nadie sabe cuál es la mejor forma de desarrollar con IA. No hay prácticas consolidadas ni referentes que lo hayan resuelto. Hay personas probando cosas, y mucho ruido de opiniones, modas y demos que se parecen poco al trabajo real.

Es un momento parecido al de hace años, cuando nacieron prácticas como TDD o el propio movimiento ágil: incertidumbre, experimentos, errores y gente compartiendo lo que le funcionaba y lo que no. Necesitamos el mismo mindset: probar, contar lo que pasa, fallar a la vista de otras personas, crear comunidad y ser honestos con que nadie tiene ni idea todavía.

Este dojo es un sitio para eso. No enseña ninguna práctica ni busca que nadie llegue a dominar nada. Es un espacio para probar cosas y ver cómo las prueban otras personas.

## Cómo funciona

Se trabaja en parejas sobre un problema pequeño, con muy poca guía. Cada persona usa las herramientas con las que trabaja a diario, o prueba algo distinto que no se atreve a probar en el trabajo.

Lo importante no es el resultado. Es lo que se ve y se cuenta por el camino: cómo empieza cada persona, qué le pide a la IA, qué comprueba y dónde falla. No hay maestros, ni solución de referencia, ni ranking. Al final, una retro en común pone sobre la mesa lo que ha pasado en cada pareja.

## El problema

**Dojo Paint**: un paint en el navegador donde se puede dibujar, borrar y guardar dibujos. Es lo bastante realista para que haya decisiones de verdad, y lo bastante pequeño para trabajarlo en una hora y en cualquier ordenador: sin servicios externos y sin base de datos, solo un fichero JSON.

## Las variantes

Cada variante es una rama independiente con su propio README, que explica qué se va a probar, cómo nos organizamos y las preguntas de retro. Cambian el punto de partida para poder explorar formas distintas de trabajar.

| Rama               | Punto de partida                                                            | Qué se explora                                                               |
| ------------------ | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `greenfield`       | Nada construido. Un brief de una página.                                    | Cómo se empieza desde cero con IA.                                           |
| `problem-solution` | La app ya hecha y una lista de peticiones de producto, en lenguaje natural. | Cómo se pasa de un texto de producto a código, sobre una base existente.     |
| `development`      | La misma app y specs con escenarios GIVEN/WHEN/THEN, en formato OpenSpec.   | Cómo se ejecuta con agentes: contexto, modos de trabajo, paralelismo, verificación. |

## Cómo usarlo

1. Elegid variante o variantes.
2. Cada pareja clona solo la rama que le toca:

   ```bash
   git clone --branch problem-solution --single-branch https://github.com/abrahamvallez/ai-dojo.git
   cd ai-dojo
   ```

3. Seguid el README de la rama.
4. Quien facilita tiene el guion en [`GUION.md`](./GUION.md).

## Seguir probando

Las ramas son un punto de partida, no una receta. Cambiadlas, rompedlas, inventad variantes nuevas y contad lo que aprendáis.

## Requisitos

- Git y un navegador moderno.
- Una herramienta de IA para desarrollar. Cada persona usa la suya.
- Node.js 20.19 o superior en las ramas con app (`problem-solution` y `development`). En `greenfield` depende del stack que elija cada pareja.

## Estructura del repositorio

`main` solo contiene este README y el guion. Las tres ramas de variante no comparten historial con `main`, para que quien participa no se encuentre las notas de facilitación. `problem-solution` y `development` comparten la misma app como punto de partida.
