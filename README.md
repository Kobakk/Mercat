# Mercat
Local Shop App 

### Proyecto TFC DAWº2

- Aplicación SPA, de comercio cuya plantilla ha sido desarrollada desde cero con CSS y HTML nativo.
- Backend, servidor **node** que maneja las peticiones del front a la base de datos.
- Base de datos MariaDB, XAMPP.

#### Tecnologias utilizadas
- Docker
- Node
- Express
- JWT
- Xampp

####  ¿Como desplegar FrontEnd?

1. Abrir `index.html` con la extensión de vscode **live server**. 
    Que abrira por defecto un servidor `localhost:5500`, poner esa dirección en cualquier navegador.

#### ¿Como desplegar el BackEnd?
##### Requisitos previos
1. Tener instalado `docker` en la maquina.
2. Tener instalado `git`.
3. Tener instalado `npm`.
4. Crear una imagen `node` en la maquina.
##### Estructura del proyecto
```
backend/
├── controllers/     # Controladores para la lógica de negocio
├── middlewares/    # Middlewares personalizados
├── models/         # Modelos de datos MongoDB
├── routes/         # Rutas de la API
├── services/       # Servicios para lógica compleja
└── static/         # Archivos estáticos
    └── images/     # Imágenes del proyecto
```
