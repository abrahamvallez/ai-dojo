# Delta for Canvas Drawing

## MODIFIED Requirements

### Requirement: Dibujo a mano alzada
El sistema DEBE permitir dibujar trazos continuos arrastrando el puntero sobre el lienzo, con el color seleccionado y el grosor elegido en el selector de grosor.
(Antes: grosor fijo de 4 píxeles)

#### Scenario: Trazo con ratón
- **GIVEN** un lienzo en blanco
- **WHEN** la persona pulsa el botón del ratón sobre el lienzo, arrastra y suelta
- **THEN** se dibuja una línea continua con el color seleccionado y el grosor elegido

#### Scenario: Trazo táctil
- **GIVEN** un lienzo en blanco en una pantalla táctil
- **WHEN** la persona desliza el dedo sobre el lienzo
- **THEN** se dibuja una línea continua con el color seleccionado y el grosor elegido

#### Scenario: El puntero sale del lienzo
- **GIVEN** la persona está dibujando un trazo con el ratón
- **WHEN** el puntero sale del lienzo
- **THEN** el trazo termina
- **AND** no se dibuja nada más hasta una nueva pulsación
