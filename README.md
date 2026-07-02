# Gestión de Turnos NP

Sistema web para la gestión de turnos desarrollado como Challenge Técnico para Software Engineer Web.

## Descripción

La aplicación permite administrar un sistema de turnos con distintos perfiles de uso.

### Funcionalidades

* Inicio de sesión de operadores.
* Validación de empresa mediante código.
* Solicitud de turnos por parte del cliente.
* Colas independientes por tipo de trámite (A, B y C).
* Llamado de turnos desde el panel del operador.
* Pantalla pública que muestra el último turno llamado.
* Protección de rutas privadas.
* Persistencia de sesión mediante Context API y LocalStorage.

## Tecnologías utilizadas

### Frontend

* React
* React Router DOM
* Vite
* Context API
* CSS

### Backend

* Node.js
* Express
* CORS

### Base de datos

* Supabase

## Arquitectura

El proyecto se encuentra dividido en dos repositorios independientes:

### Frontend

Organizado por funcionalidades (Features):

* Home
* Usuario
* Operador
* Pantalla

Además incluye:

* Components reutilizables
* Services para comunicación con la API
* Context API para autenticación y empresa
* Routes protegidas mediante PrivateRoute

### Backend

API REST desarrollada con Express.

La lógica está separada en:

* Routes
* Controllers
* Configuración de Supabase

El backend expone endpoints para:

* Login
* Validación de empresa
* Creación de turnos
* Consulta de colas
* Llamado de turnos
* Pantalla pública

## Herramientas de IA utilizadas

Durante el desarrollo utilicé herramientas de Inteligencia Artificial como apoyo para acelerar el desarrollo y resolver problemas técnicos.

Principalmente:

* ChatGPT

La IA fue utilizada para:

* Diseño de arquitectura del proyecto.
* Refactorización de código.
* Organización de componentes.
* Integración entre frontend y backend.
* Resolución de errores.
* Consumo de APIs.
* Mejoras de interfaz.
* Optimización del flujo de desarrollo.

Todo el código generado fue revisado, adaptado y probado antes de incorporarlo al proyecto.

## Instalación

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
npm install
npm start
```

## Variables de entorno

Backend (.env)

```env
SUPABASE_URL= https://gdbhejjagxlhcyeuwuuy.supabase.co
SUPABASE_KEY= sb_publishable_7qgQ4H0kMPu7FDbt3Ll7Fg_90l2azc4
```

## Funcionalidades implementadas

* Login de operador.
* Validación de empresa.
* Generación de turnos.
* Colas independientes por trámite.
* Llamado de turnos.
* Pantalla pública en tiempo real.
* Protección de rutas.
* Persistencia de sesión.
* Integración con Supabase.

## Posibles mejoras

* Gestión completa de usuarios.
* Roles y permisos.
* Dashboard administrativo.
* Estadísticas.
* WebSockets para actualización en tiempo real.
* Notificaciones.
* Configuración completa del sistema.
* Docker.
* Tests unitarios.
* CI/CD.

## Repositorios

Frontend:
https://github.com/NahuelPalmieri/frontend_gestion_de_turnos.git

Backend:
https://github.com/NahuelPalmieri/backend_gestion_de_turnos.git

## Demo

Frontend:
https://frontend-gestion-turnos.netlify.app/

Backend:
https://backend-gestion-turnos.onrender.com

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Autor

Nahuel Palmieri
