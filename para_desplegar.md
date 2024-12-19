### Para desplegar

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
docker-compose up -d
# Para parar
docker-compose down
# Para ver los logs -f SERVICE, los errores si hay.
docker-compose logs -f node_app
```
4. Una vez instalado todo y configurado.
- `docker-compose up -d` para iniciar.
- `docker-compose down` para parar
