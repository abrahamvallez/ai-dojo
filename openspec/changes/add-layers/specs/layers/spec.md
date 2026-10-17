# Delta for Layers

## Purpose

Organizar el dibujo en una pila de capas transparentes sobre el fondo blanco del lienzo, que no es una capa.

## ADDED Requirements

### Requirement: Panel de capas
El sistema DEBE ofrecer un panel de capas con entre 1 y 5 capas transparentes sobre el fondo blanco del lienzo, que no es una capa. Al empezar DEBE haber una única capa, activa.

#### Scenario: Estado inicial
- **WHEN** se abre la aplicación
- **THEN** hay una única capa llamada "Capa 1"
- **AND** es la capa activa

#### Scenario: Límite de capas
- **GIVEN** ya existen 5 capas
- **WHEN** la persona intenta crear otra
- **THEN** no se crea ninguna capa nueva

### Requirement: Crear una capa
El sistema DEBE añadir la capa nueva encima de todas, llamarla "Capa N", donde N es la posición que ocupa al crearla, y hacerla la capa activa.

#### Scenario: Crear una capa
- **GIVEN** existe una única capa
- **WHEN** la persona crea una capa
- **THEN** hay dos capas y la nueva, llamada "Capa 2", está encima
- **AND** la nueva es la capa activa

### Requirement: Dibujar en la capa activa
El sistema DEBE aplicar lo que se dibuja (lápiz, goma y formas) únicamente a la capa activa, y la goma DEBE dejar transparentes las zonas que borra.

#### Scenario: Dibujar en la capa activa
- **GIVEN** dos capas y la capa 2 activa
- **WHEN** la persona dibuja un trazo
- **THEN** el trazo pertenece a la capa 2
- **AND** la capa 1 no cambia

#### Scenario: Borrar solo en la capa activa
- **GIVEN** un trazo en la capa 1 y otro en la capa 2 que se cruzan, con la capa 2 activa
- **WHEN** la persona pasa la goma sobre el cruce
- **THEN** se borra la parte del trazo de la capa 2
- **AND** el trazo de la capa 1 sigue visible por debajo

### Requirement: Orden y visibilidad
El sistema DEBE permitir mostrar u ocultar cada capa y subirla o bajarla de posición. El orden DEBE decidir qué queda encima y una capa oculta NO DEBE verse.

#### Scenario: Ocultar una capa
- **GIVEN** una capa con un trazo visible
- **WHEN** la persona la oculta
- **THEN** el trazo deja de verse
- **AND** el trazo no se pierde: reaparece al volver a mostrar la capa

#### Scenario: Reordenar capas
- **GIVEN** un trazo rojo en la capa 1 y otro azul en la capa 2 que se cruzan
- **WHEN** la persona sube la capa 1 por encima de la capa 2
- **THEN** en el cruce se ve el rojo por encima del azul

### Requirement: Eliminar una capa
El sistema DEBE dejar siempre al menos una capa. Al eliminar la capa activa, DEBE pasar a ser activa la capa inmediatamente inferior o, si era la inferior, la inmediatamente superior.

#### Scenario: Eliminar la capa activa
- **GIVEN** tres capas y la capa 2 activa
- **WHEN** la persona elimina la capa 2
- **THEN** quedan dos capas
- **AND** la capa activa es la que estaba debajo de la eliminada

#### Scenario: Eliminar la capa inferior activa
- **GIVEN** dos capas y la capa inferior activa
- **WHEN** la persona elimina la capa inferior
- **THEN** la capa activa es la que estaba justo encima

#### Scenario: Eliminar la única capa
- **GIVEN** existe una única capa
- **WHEN** la persona intenta eliminarla
- **THEN** no se elimina

### Requirement: Guardar y abrir con capas
El sistema DEBE conservar todas las capas (nombre, orden, visibilidad y contenido) al guardar y restaurarlas al abrir, y DEBE abrir con una única capa los dibujos guardados antes de que existieran las capas.

#### Scenario: Guardar y abrir conserva las capas
- **GIVEN** un dibujo con tres capas, una de ellas oculta
- **WHEN** la persona lo guarda, recarga la página y lo abre
- **THEN** aparecen las tres capas con su nombre, su orden y su visibilidad
- **AND** cada capa conserva su contenido

#### Scenario: Dibujo anterior a las capas
- **GIVEN** un dibujo guardado antes de que existieran las capas
- **WHEN** la persona lo abre
- **THEN** el dibujo aparece en una única capa

### Requirement: Historial de acciones sobre capas
El sistema DEBE permitir deshacer y rehacer crear, eliminar, reordenar y mostrar u ocultar capas.

#### Scenario: Deshacer crear una capa
- **GIVEN** la persona acaba de crear una capa
- **WHEN** pulsa Deshacer
- **THEN** la capa desaparece

#### Scenario: Deshacer eliminar una capa
- **GIVEN** la persona acaba de eliminar una capa con contenido
- **WHEN** pulsa Deshacer
- **THEN** la capa reaparece con su contenido y en su posición
