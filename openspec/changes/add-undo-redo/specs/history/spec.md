# Delta for History

## Purpose

Deshacer y rehacer las acciones que la persona realiza sobre el lienzo.

## ADDED Requirements

### Requirement: Deshacer y rehacer
El sistema DEBE ofrecer las acciones Deshacer y Rehacer mediante botones y atajos de teclado: Ctrl/Cmd+Z para deshacer y Ctrl/Cmd+Shift+Z o Ctrl+Y para rehacer.

#### Scenario: Deshacer un trazo
- **GIVEN** la persona ha dibujado dos trazos
- **WHEN** pulsa Deshacer
- **THEN** desaparece el último trazo
- **AND** el primero se mantiene

#### Scenario: Rehacer un trazo
- **GIVEN** la persona ha deshecho un trazo
- **WHEN** pulsa Rehacer
- **THEN** el trazo vuelve a aparecer

#### Scenario: Atajos de teclado
- **WHEN** la persona pulsa Ctrl/Cmd+Z
- **THEN** se deshace el último paso
- **AND** al pulsar Ctrl/Cmd+Shift+Z o Ctrl+Y se rehace

#### Scenario: Botones deshabilitados
- **GIVEN** no hay ningún paso que deshacer
- **WHEN** se muestra la barra de herramientas
- **THEN** el botón Deshacer está deshabilitado
- **AND** el botón Rehacer está deshabilitado si tampoco hay nada que rehacer

### Requirement: Qué cuenta como un paso
El sistema DEBE tratar como un único paso cada acción completa de la persona: un trazo (de pulsar a soltar), un borrado con la goma, una forma o un Limpiar.

#### Scenario: Un trazo es un paso
- **GIVEN** la persona dibuja un trazo largo que cruza todo el lienzo
- **WHEN** pulsa Deshacer una vez
- **THEN** desaparece el trazo completo

#### Scenario: Limpiar se puede deshacer
- **GIVEN** un lienzo con trazos
- **WHEN** la persona pulsa Limpiar y después Deshacer
- **THEN** los trazos reaparecen

### Requirement: Tamaño y ramificación del historial
El sistema DEBE conservar al menos 30 pasos, descartando los más antiguos al superarlos, y DEBE descartar los pasos rehacibles cuando, tras deshacer, la persona dibuja algo nuevo.

#### Scenario: Más de 30 pasos
- **GIVEN** la persona ha dibujado 40 trazos
- **WHEN** deshace tantas veces como puede
- **THEN** ha podido deshacer al menos 30 trazos

#### Scenario: Dibujar tras deshacer
- **GIVEN** la persona ha deshecho un trazo
- **WHEN** dibuja un trazo nuevo
- **THEN** el botón Rehacer queda deshabilitado

### Requirement: Historial y dibujos guardados
El sistema DEBE empezar un historial nuevo al abrir un dibujo guardado y NO DEBE modificar el historial al guardar.

#### Scenario: Abrir un dibujo
- **GIVEN** hay pasos en el historial
- **WHEN** la persona abre un dibujo guardado
- **THEN** Deshacer y Rehacer quedan deshabilitados

#### Scenario: Guardar un dibujo
- **GIVEN** hay pasos que se pueden deshacer
- **WHEN** la persona guarda el dibujo
- **THEN** los pasos siguen pudiendo deshacerse
