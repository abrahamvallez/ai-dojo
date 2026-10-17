# Delta for Canvas Drawing

## MODIFIED Requirements

### Requirement: Lienzo y limpieza
El lienzo DEBE medir 800 × 500 píxeles y tener el fondo blanco. El sistema DEBE ofrecer una acción Limpiar que deje transparente la capa activa sin modificar las demás.
(Antes: Limpiar devolvía todo el lienzo al fondo blanco)

#### Scenario: Estado inicial
- **WHEN** se abre la aplicación
- **THEN** el lienzo está completamente en blanco

#### Scenario: Limpiar la capa activa
- **GIVEN** dos capas con trazos y la capa 2 activa
- **WHEN** la persona pulsa Limpiar
- **THEN** la capa 2 queda vacía
- **AND** la capa 1 mantiene sus trazos
