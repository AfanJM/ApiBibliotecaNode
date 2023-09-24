# ApiBibliotecaNode

En este proyecto se llevo a cabo una API para administrar una biblioteca con diferentes tablas: usarios,libros,detalles,multas y prestamos. Se han implementado los verbos HTTP  HTTP GET, POST, PATCH y DELETE para la creación, modificación y eliminación de datos.

## Instalacion

1. Clonar el repositorio:
git clone https://github.com/AfanJM/ApiBibliotecaNode.git

2. Instalar las dependencias:
npm i

3. Inicar el servidor:
npm run dev

## Uso:
La API tiene los siguientes endpoints:

- `/Biblioteca/usuarios`: Permite crear, obtener, actualizar y eliminar usuarios.
- `/Biblioteca/libro`: Permite crear, obtener, actualizar y eliminar libros.
- `/Biblioteca/detalle`: Permite crear, obtener, actualizar y eliminar detalles.
- `/Biblioteca/multa`: Permite crear, obtener, actualizar y eliminar multas.
- `/Biblioteca/prestamo`: Permite crear, obtener, actualizar y eliminar préstamos.

Se pueden realizar las siguientes acciones con los verbos HTTP:

- `GET`: Obtener información de un recurso o de una lista de recursos.
- `POST`: Crear un nuevo recurso.
- `PATCH`: Actualizar un recurso existente.
- `DELETE`: Eliminar un recurso existente.

# Documentacion: 
- `http://localhost:3080/biblioteca/api/v1/docs

