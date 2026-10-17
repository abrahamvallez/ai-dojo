# Delta for Saved Drawings

## ADDED Requirements

### Requirement: Dibujo abierto
El sistema DEBE indicar en la interfaz qué dibujo está abierto, si hay alguno, y DEBE considerar abierto el dibujo que acaba de guardarse.

#### Scenario: Sin dibujo abierto al empezar
- **WHEN** se abre la aplicación
- **THEN** no hay ningún dibujo abierto
- **AND** la interfaz no indica ninguno

#### Scenario: Dibujo recién guardado
- **GIVEN** un lienzo con un dibujo y el nombre "Casa" escrito
- **WHEN** la persona pulsa Guardar
- **THEN** "Casa" pasa a ser el dibujo abierto
- **AND** la interfaz lo indica

### Requirement: Renombrar un dibujo
El sistema DEBE permitir renombrar cualquier dibujo de la lista, aplicando las mismas reglas de nombre que al guardar.

#### Scenario: Renombrar
- **GIVEN** un dibujo guardado llamado "Casa"
- **WHEN** la persona lo renombra a "Casa grande"
- **THEN** la lista muestra "Casa grande"
- **AND** la imagen del dibujo no cambia

#### Scenario: Nombre repetido al renombrar
- **GIVEN** dibujos guardados llamados "Casa" y "Árbol"
- **WHEN** la persona intenta renombrar "Árbol" a "casa"
- **THEN** se avisa de que ya existe un dibujo con ese nombre
- **AND** no se cambia nada

### Requirement: Borrar un dibujo
El sistema DEBE permitir borrar un dibujo de la lista, pidiendo confirmación antes, y el borrado NO PUEDE deshacerse.

#### Scenario: Borrado confirmado
- **GIVEN** un dibujo guardado llamado "Casa"
- **WHEN** la persona pide borrarlo y confirma
- **THEN** "Casa" desaparece de la lista
- **AND** sigue sin aparecer tras recargar la página

#### Scenario: Borrado cancelado
- **GIVEN** un dibujo guardado llamado "Casa"
- **WHEN** la persona pide borrarlo y cancela la confirmación
- **THEN** "Casa" sigue en la lista

#### Scenario: Borrar el dibujo abierto
- **GIVEN** el dibujo "Casa" está abierto
- **WHEN** la persona lo borra y confirma
- **THEN** el lienzo se queda como está
- **AND** ya no hay ningún dibujo abierto

### Requirement: Dibujos anteriores a la fecha de modificación
El sistema DEBE tratar la fecha de creación como fecha de última modificación en los dibujos guardados antes de que existiera esta última.

#### Scenario: Dibujo ya existente
- **GIVEN** un dibujo guardado antes de este cambio, sin fecha de última modificación
- **WHEN** se muestra la lista
- **THEN** el dibujo muestra su fecha de creación como fecha de última modificación

## MODIFIED Requirements

### Requirement: Guardar un dibujo
El sistema DEBE permitir guardar el contenido actual del lienzo con un nombre obligatorio de hasta 60 caracteres, único sin distinguir mayúsculas de minúsculas, y persistirlo en el servidor. Si hay un dibujo abierto, Guardar DEBE actualizarlo en lugar de crear otro, y DEBE existir además la acción Guardar como nuevo, que crea un dibujo distinto.
(Antes: siempre creaba un dibujo nuevo y los nombres podían repetirse)

#### Scenario: Guardado correcto
- **GIVEN** un lienzo con un dibujo, un nombre escrito y ningún dibujo abierto
- **WHEN** la persona pulsa Guardar
- **THEN** el dibujo se guarda y aparece en la lista
- **AND** se muestra el mensaje "¡Guardado!" durante unos segundos
- **AND** el campo del nombre se vacía

#### Scenario: Nombre vacío
- **GIVEN** el campo del nombre está vacío y ningún dibujo abierto
- **WHEN** la persona pulsa Guardar
- **THEN** se avisa de que hace falta un nombre
- **AND** no se guarda nada

#### Scenario: Nombre demasiado largo
- **GIVEN** un nombre de más de 60 caracteres
- **WHEN** la persona pulsa Guardar
- **THEN** el servidor rechaza el guardado
- **AND** se informa del error

#### Scenario: Nombre repetido
- **GIVEN** un dibujo guardado llamado "Casa" y ningún dibujo abierto
- **WHEN** la persona intenta guardar otro dibujo con el nombre "casa"
- **THEN** se avisa de que ya existe un dibujo con ese nombre
- **AND** no se guarda nada

#### Scenario: Guardar un dibujo abierto
- **GIVEN** el dibujo "Casa" está abierto y la persona ha retocado el lienzo
- **WHEN** pulsa Guardar
- **THEN** se actualiza la imagen de "Casa", que mantiene su nombre
- **AND** se actualiza su fecha de última modificación
- **AND** no aparece ningún dibujo nuevo en la lista

#### Scenario: Guardar como nuevo
- **GIVEN** el dibujo "Casa" está abierto y se ha escrito el nombre "Casa 2"
- **WHEN** la persona pulsa Guardar como nuevo
- **THEN** se crea un dibujo nuevo llamado "Casa 2", que pasa a ser el abierto
- **AND** "Casa" queda sin cambios

### Requirement: Lista de dibujos guardados
El sistema DEBE mostrar los dibujos guardados con su nombre y su fecha de última modificación, del más reciente al más antiguo según esa fecha, y DEBE ofrecer en cada uno las acciones Renombrar y Borrar.
(Antes: fecha de creación y sin acciones por dibujo)

#### Scenario: Lista vacía
- **GIVEN** no hay dibujos guardados
- **WHEN** se abre la aplicación
- **THEN** se muestra "Todavía no hay dibujos"

#### Scenario: Orden de la lista
- **GIVEN** hay varios dibujos guardados
- **WHEN** se muestra la lista
- **THEN** el modificado más recientemente aparece primero

#### Scenario: Un dibujo actualizado sube al principio
- **GIVEN** una lista con "Antiguo" por debajo de "Reciente"
- **WHEN** la persona actualiza "Antiguo"
- **THEN** "Antiguo" aparece el primero de la lista

### Requirement: Abrir un dibujo guardado
El sistema DEBE permitir abrir un dibujo de la lista, sustituyendo el contenido actual del lienzo por la imagen guardada y dejándolo como dibujo abierto.
(Antes: no había noción de dibujo abierto)

#### Scenario: Abrir
- **GIVEN** hay un dibujo guardado
- **WHEN** la persona pulsa su nombre en la lista
- **THEN** el lienzo muestra la imagen guardada
- **AND** el título de la página incluye el nombre del dibujo
- **AND** ese dibujo pasa a ser el abierto
