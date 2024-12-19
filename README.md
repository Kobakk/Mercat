# Mercat
Comercio online sobre productos tecnologicos de segunda mano. 

### Proyecto TFC DAWº2

- Aplicación SPA, de comercio cuya plantilla ha sido desarrollada desde cero con CSS y HTML nativo.
- Backend, servidor **node** que maneja las peticiones del front a la base de datos.
- Base de datos MariaDB e interfaz grafica phpmyadmin.
- Todo el proyecto se encuentra dockerizado asi que puede desplegarse en cualquier SO, siempre que tenga instalado docker.

#### Tecnologias utilizadas
- Docker
- Node
- Express
- JWT
- Xampp

###  ¿Como desplegar el proyecto?

1. Abrir `index.html` con la extensión de vscode **live server**. 
    Que abrira por defecto un servidor `localhost:5500`, poner esa dirección en cualquier navegador.

### ¿Como desplegar el BackEnd?
#### Requisitos previos
1. Tener instalado `docker` en la maquina.
2. Tener instalado `git`.
#### Para desplegar

1. Se necesita ejecutar el siguiente comando: 
```bash
docker-compose up -d --build
```
- `up`: levanta los servicios.
- `--build` : fuerza la construcción de las imagenes.

2. Solo se necesita hacer el `--build`.
- La primera vez.
- Cuando cambiemos de Dockerfile.
- Cuando se actualicen dependencias del package.json.

3. Comandos para el día a día:
```bash
# Para iniciar
docker-compose up 
# Para parar
docker-compose down
# Para ver los logs -f SERVICE, los errores si hay.
docker-compose logs -f node_app
```
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
