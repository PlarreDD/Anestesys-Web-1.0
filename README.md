# Anestesys Web

Anestesys es un software que permite realizar el registro anestésico quirurgico de manera digital e impresa, permite al anestesiologo orientar su completa atención al paciente mediante la monitorización automática de los parametros de signos vitales provenientes del Monitor de Signos Vitales.

## IDE Recomendado para actualización y desarrollo

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Node
Es importante tener en el computador instalada la version **18.15.0** de NodeJS
Para descargar esta version dirigirse a la página oficial de [NodeJS](https://nodejs.org/en)

## Tech Stack MEVN
- Mongo DB con Mongoose (v 6.8.3)
- Express (v 4.18.2)
- Vue3
- NodeJS (v.18.15.0)

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Reconstrucción del proyecto

```sh
npm install
```

### Compilación y Hot Reload

```sh
npm run dev
```

### Checkeo, compilación y build de la aplicación
```sh
Servidor
En Axios colocar en la baseURL la dirección IP de la PC servidor junto con el puerto donde se esta ejecutando el backend.
![Ip_Servidor](/Ip_Servidor.png)
![Puerto_Servidor](/Puerto_Servidor.png)

En el documento dotenv se coloca la dirección ORIGIN la dirección que marca en la que levantó el servidor.
![Dirección del Front End](/IP_PagWeb.png)

Los archivos deben quedar de la siguiente forma
![Ejemplo archivos dotenv y Axios](/Ejemplo.png)

```

```sh
Front End
 - npm run build
 - npm install -g serve
 - serve -s dist si no deja ejecutar el comando, ejecutar primero 'Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass'

Back End
 - Ejecutar 'tsc' si no deja ejecutar el comando, ejecutar primero 'Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass'
 - node build/index.js
```
## Infraestructura de la aplicación
![Captura de pantalla 2023-05-03 092427](https://user-images.githubusercontent.com/39073053/235962866-eff38bb6-d79a-40a5-8120-289089b469cc.png)

### Documentación adicional
- [Sitemap.pdf](https://github.com/PlarreDD/Anestesys-Web-1.0/files/11384320/Sitemap.pdf)
- [Estudio_UI-UX.docx](https://github.com/PlarreDD/Anestesys-Web-1.0/files/11384339/Estudio_UI-UX.docx)
- [Casos de Uso Anestesys.pdf](https://github.com/PlarreDD/Anestesys-Web-1.0/files/11384325/Casos.de.Uso.Anestesys.pdf)


