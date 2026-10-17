# Delta for Saved Drawings

## ADDED Requirements

### Requirement: Nombres mostrados como texto
El sistema DEBE mostrar el nombre de cada dibujo exactamente como lo escribió la persona, sin interpretar su contenido como HTML.

#### Scenario: Nombre con etiquetas HTML
- **GIVEN** un dibujo guardado con el nombre `Casa <b>grande</b>`
- **WHEN** se muestra la lista de dibujos
- **THEN** la lista muestra literalmente `Casa <b>grande</b>`
- **AND** no se aplica ningún formato ni se ejecuta ningún código

#### Scenario: Nombre con caracteres especiales
- **GIVEN** un dibujo guardado con el nombre `Tom & "Jerry"`
- **WHEN** se muestra la lista de dibujos
- **THEN** la lista muestra literalmente `Tom & "Jerry"`
