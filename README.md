# anestesys-web-1.0

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
## Ubicaciones de Archivos
- Archivo dotenv se ubica en la carpeta Anestesys_BackEnd junto a los json e index.ts se descarga de la carpeta de OneDrive D+D/Anestesys/AnestesysWeb

## Cambios

- Se da estructura a las carpetas y componentes del proyecto.

- Se esta trabajando en las vistas del modulo pre anestesico.

- Se dividen las carpetas con los proyectos para Front End y Back End.

- Cambios al Back End para funcionar con TypeScript.

- Agregada función para registrar usuarios en base de datos desde el front end.

- Corregido la funcion del boton de "Ingresar" en el login para acceder con un solo click.

### 08/03/2023 (LESB)
- Reubicación de las ventanas emergentes del login y del registro a user-store para que al finalizar el registro o inicio de sesión se activen.

- Redireccionamiento del las vistas desde user-store para realizarse al finalizar la acción del registro o inicio de sesión.

### 10/03/2023 (LESB)
- Cambios en la vista ID agregando modelado para la base de datos.

- Agregada la funcion en el link de salir en la barra de navegación.

- Creadas funciones para subir los datos capturados a la Base de Datos.
