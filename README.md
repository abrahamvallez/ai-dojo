# AI Dev Dojo

Un dojo de desarrollo con IA, en formato kata, para hacer en parejas.

## Qué es

Como una kata de TDD, pero para aprender a desarrollar con IA: un problema, parejas y muy poca guía.

Hay una diferencia importante. Para TDD existe una forma reconocida de hacerlo bien y la kata sirve para practicarla. Para desarrollar con IA no hay ningún estándar equivalente. Por eso no es un ejercicio de maestro y alumno: cada pareja resuelve el problema como lo haría en su trabajo y aprende de cómo lo hace la otra persona.

## El problema

**Dojo Paint**: un paint en el navegador donde se puede dibujar, borrar y guardar dibujos. Es lo bastante realista para que haya decisiones de verdad, y lo bastante pequeño para hacerlo en una hora y en cualquier ordenador: sin servicios externos y sin base de datos, solo un fichero JSON.

## Las variantes

Cada variante es una rama independiente con su propio README, que explica el ejercicio, la dinámica y las preguntas de retro.

| Rama               | Punto de partida                                                     | Dónde está el foco                                                        |
| ------------------ | -------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `greenfield`       | Nada construido. Un brief de una página.                             | Cómo se empieza desde cero con IA.                                        |
| `problem-solution` | La app ya hecha y una lista de peticiones de producto, en lenguaje natural. | Pasar de un texto de producto a código, sobre una base existente.         |
| `development`      | La misma app y specs con escenarios GIVEN/WHEN/THEN, en formato OpenSpec.   | Ejecutar con agentes: contexto, modos de trabajo, paralelismo, verificación. |

## Cómo usarlo

1. Elegid variante o variantes.
2. Cada pareja clona solo la rama que le toca:

   ```bash
   git clone --branch problem-solution --single-branch https://github.com/abrahamvallez/ai-dojo.git
   cd ai-dojo
   ```

3. Seguid el README de la rama.
4. Quien facilita tiene el guion en [`GUION.md`](./GUION.md).

## Requisitos

- Git y un navegador moderno.
- Una herramienta de IA para desarrollar. Cada persona usa la suya.
- Node.js 20.19 o superior en las ramas con app (`problem-solution` y `development`). En `greenfield` depende del stack que elija cada pareja.

## Estructura del repositorio

`main` solo contiene este README y el guion. Las tres ramas de ejercicio no comparten historial con `main`, para que quien participa no se encuentre las notas de facilitación. `problem-solution` y `development` comparten la misma app como punto de partida.
