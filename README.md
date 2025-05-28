# AdoptaMe
AdoptaMe es una aplicación web para gestionar la adopción de mascotas, permitiendo a los usuarios registrar, buscar y adoptar mascotas, así como gestionar usuarios y sesiones.

## Características

- Registro y autenticación de usuarios (con JWT y cookies)
- Gestión de mascotas (CRUD, carga de imágenes)
- Gestión de adopciones (asignación de mascotas a usuarios)
- Mock de datos para pruebas
- Documentación de API con Swagger

## DockerHub
https://hub.docker.com/r/rodrigohw/proyecto-final

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/Rodrigo92HW/Entrega--Final
   cd Entrega--Final
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Configura la base de datos MongoDB en `src/app.js` si es necesario.

## Uso

- Inicia el servidor:
  ```sh
  npm start
  ```
  El servidor correrá en `http://localhost:8080`.

- Documentación de la API disponible en:  
  [http://localhost:8080/apidocs](http://localhost:8080/apidocs)

## Endpoints principales

- `/api/users` - Gestión de usuarios
- `/api/pets` - Gestión de mascotas
- `/api/adoptions` - Gestión de adopciones
- `/api/sessions` - Registro y login de usuarios
- `/api/mocks` - Generación de datos mock

## Testing

Para ejecutar los tests:
```sh
npm test
```

## Estructura del proyecto

```
src/
  app.js
  controllers/
  dao/
  dto/
  public/
  repository/
  routes/
  services/
  utils/
test/
```

## Docker

Puedes correr la aplicación con Docker:
```sh
docker build -t adoptame .
docker run -p 8080:8080 adoptame
```

## Autor

- Proyecto para CoderHouse - Rodrigo Harispe
