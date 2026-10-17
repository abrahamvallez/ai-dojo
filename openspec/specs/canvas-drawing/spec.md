# Canvas Drawing Specification

## Purpose

Dibujo a mano alzada sobre un lienzo de tamaño fijo, con ratón o con pantalla táctil.

## Requirements

### Requirement: Dibujo a mano alzada
El sistema DEBE permitir dibujar trazos continuos arrastrando el puntero sobre el lienzo, con el color seleccionado y un grosor fijo de 4 píxeles.

#### Scenario: Trazo con ratón
- **GIVEN** un lienzo en blanco
- **WHEN** la persona pulsa el botón del ratón sobre el lienzo, arrastra y suelta
- **THEN** se dibuja una línea continua con el color seleccionado

#### Scenario: Trazo táctil
- **GIVEN** un lienzo en blanco en una pantalla táctil
- **WHEN** la persona desliza el dedo sobre el lienzo
- **THEN** se dibuja una línea continua con el color seleccionado

#### Scenario: El puntero sale del lienzo
- **GIVEN** la persona está dibujando un trazo con el ratón
- **WHEN** el puntero sale del lienzo
- **THEN** el trazo termina
- **AND** no se dibuja nada más hasta una nueva pulsación

### Requirement: Lienzo y limpieza
El lienzo DEBE medir 800 × 500 píxeles y tener el fondo blanco. El sistema DEBE ofrecer una acción Limpiar que devuelva todo el lienzo al fondo blanco.

#### Scenario: Estado inicial
- **WHEN** se abre la aplicación
- **THEN** el lienzo está completamente en blanco

#### Scenario: Limpiar
- **GIVEN** un lienzo con trazos dibujados
- **WHEN** la persona pulsa Limpiar
- **THEN** el lienzo queda completamente en blanco
