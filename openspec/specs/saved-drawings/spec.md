# Saved Drawings Specification

## Purpose

Guardar dibujos en el servidor con un nombre, listarlos y volver a abrirlos.

## Requirements

### Requirement: Guardar un dibujo
El sistema DEBE permitir guardar el contenido actual del lienzo con un nombre obligatorio de hasta 60 caracteres y persistirlo en el servidor.

#### Scenario: Guardado correcto
- **GIVEN** un lienzo con un dibujo y un nombre escrito
- **WHEN** la persona pulsa Guardar
- **THEN** el dibujo se guarda y aparece en la lista
- **AND** se muestra el mensaje "¡Guardado!" durante unos segundos
- **AND** el campo del nombre se vacía

#### Scenario: Nombre vacío
- **GIVEN** el campo del nombre está vacío
- **WHEN** la persona pulsa Guardar
- **THEN** se avisa de que hace falta un nombre
- **AND** no se guarda nada

#### Scenario: Nombre demasiado largo
- **GIVEN** un nombre de más de 60 caracteres
- **WHEN** la persona pulsa Guardar
- **THEN** el servidor rechaza el guardado
- **AND** se informa del error

### Requirement: Lista de dibujos guardados
El sistema DEBE mostrar los dibujos guardados con su nombre y su fecha de creación, del más reciente al más antiguo.

#### Scenario: Lista vacía
- **GIVEN** no hay dibujos guardados
- **WHEN** se abre la aplicación
- **THEN** se muestra "Todavía no hay dibujos"

#### Scenario: Orden de la lista
- **GIVEN** hay varios dibujos guardados
- **WHEN** se muestra la lista
- **THEN** el más reciente aparece primero

### Requirement: Abrir un dibujo guardado
El sistema DEBE permitir abrir un dibujo de la lista, sustituyendo el contenido actual del lienzo por la imagen guardada.

#### Scenario: Abrir
- **GIVEN** hay un dibujo guardado
- **WHEN** la persona pulsa su nombre en la lista
- **THEN** el lienzo muestra la imagen guardada
- **AND** el título de la página incluye el nombre del dibujo

### Requirement: Persistencia
El sistema DEBE conservar los dibujos guardados al recargar la página y al reiniciar el servidor.

#### Scenario: Recarga
- **GIVEN** hay dibujos guardados
- **WHEN** se recarga la página
- **THEN** la lista muestra los mismos dibujos
