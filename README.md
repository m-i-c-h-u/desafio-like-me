# 📸 Like Me — Desafío Node y Express

Aplicación web fullstack desarrollada como parte del bootcamp de **Desarrollo Full Stack JavaScript**, cuyo objetivo es construir una mini red social de publicaciones (“posts”) donde los usuarios pueden agregar posts con título, imagen y descripción, además de dar “likes”.

---

## 📚 Contenidos

- [🚀 Tecnologías utilizadas](#-tecnologías-utilizadas)
- [⚙️ Requisitos previos](#️-requisitos-previos)
- [🗄️ Estructura del proyecto](#️-estructura-del-proyecto)
- [🧩 Configuración de la base de datos](#-configuración-de-la-base-de-datos)
- [▶️ Ejecución del proyecto](#️-ejecución-del-proyecto)
- [🧠 Funcionalidades](#-funcionalidades)
- [🎨 Diseño](#-diseño)
- [🧱 Segunda parte del desafío](#-segunda-parte-del-desafío)
- [👩‍💻 Autor](#-autora)

---

## 🚀 Tecnologías utilizadas

### 🧠 Backend

- **Node.js** con **Express**
- **PostgreSQL** (base de datos relacional)
- **pg (node-postgres)** para conexión y consultas
- **CORS**
- **Nodemon** (para desarrollo en caliente)

### 💻 Frontend

- **React** (Vite)
- **Axios** para consumo de API REST
- **Bootstrap 5** para maquetado
- **CSS personalizado** (tema oscuro moderno)

---

## ⚙️ Requisitos previos

Asegúrate de tener instalados en tu sistema:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- Git (si vas a clonar el proyecto)

---

## 🗄️ Estructura del proyecto

Desafio-like-me/
│
├── backend/
│ ├── index.js
│ ├── consultas.js
│ ├── package.json
│ └── ...
│
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ ├── components/
│ │ │ ├── Form.jsx
│ │ │ └── Post.jsx
│ │ └── index.css
│ ├── package.json
│ └── ...
│
├── .gitignore
│
└── README.md

---

## 🧩 Configuración de la base de datos

1. Inicia PostgreSQL (desde SQL Shell o pgAdmin).
2. Crea la base de datos:

```sql
CREATE DATABASE likeme;
\c likeme;

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255),
  img TEXT,
  descripcion TEXT,
  likes INT DEFAULT 0
);

```

3. Ajusta las credenciales en tu archivo consultas.js:

```
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'TU_PASSWORD',
  database: 'likeme',
  allowExitOnIdle: true
});
```

---

## ▶️ Ejecución del proyecto

🧠 Backend:

Abre la carpeta backend desde la terminal: cd "C:\Users\A\Desktop\desafios\Node y Express\Desafio like me\backend", luego

1. instala dependencias:

npm install

2. Ejecuta el servidor:

npm run dev

3. El backend quedará disponible en:

http://localhost:3000

---

💻 Frontend:

Abre la carpeta frontend desde una nueva terminal: cd "C:\Users\A\Desktop\desafios\Node y Express\Desafio like me\frontend", luego

1. instala dependencias:

npm install

2. Ejecuta la app:

npm run dev

3. El frontend quedará disponible en:

http://localhost:5173

---

## 🧠 Funcionalidades

✅ Agregar un nuevo post con título, imagen y descripción.
✅ Visualizar todos los posts en formato de tarjeta.
✅ Dar “like” a un post.
✅ Eliminar publicaciones.
✅ Interfaz moderna, responsive y atractiva.
✅ Campos del formulario se limpian automáticamente al publicar.

---

## 🎨 Diseño

El frontend cuenta con:

.Tema oscuro profesional
.Cards con sombra y efecto hover
.Formularios centrados y responsivos
.Grid adaptativo (3x2x1 según resolución)

---

## 🧱 Segunda parte del desafío

En esta actualización se implementaron las nuevas funcionalidades solicitadas:

- 🔁 **Ruta PUT**: Permite incrementar el contador de likes por cada publicación.
- ❌ **Ruta DELETE**: Permite eliminar publicaciones de forma permanente desde la base de datos.
- 🧩 **Manejo de errores con try/catch**: Todas las operaciones SQL (INSERT, UPDATE, DELETE) están protegidas mediante bloques `try/catch`, asegurando estabilidad y control de errores en el servidor.

Cada una de estas funcionalidades fue probada exitosamente desde el frontend y desde consultas directas al backend.

---

## 👩‍💻 Autora

**Michelle Valdés**  
📧 [michelle.vlds1997@gmail.com](mailto:michelle.vlds1997@gmail.com)  
🌐 [GitHub: m-i-c-h-u](https://github.com/m-i-c-h-u)  
💬 Desarrolladora Full Stack • Creativa • Enfocada en soluciones innovadoras y diseño funcional.
