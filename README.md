# 📚 E-LMS – Learning Management System (Full Stack)

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

This is the complete **E-LMS (Educational Learning Management System)** project. It includes a frontend built with React, Tailwind, and Vite, and a backend built with Node.js, Express, and MongoDB. The platform supports course browsing and contact functionality. Admin, student, and teacher role support is built into the backend.

> 💡 **Frontend GitHub Repo:** [LMS-Frontend](https://github.com/jit21/LMS-Frontend)  
> 💡 **Backend GitHub Repo:** [LMS1-Backend](https://github.com/jit21/LMS1-Backend)  
> 🌐 **Live Frontend (Vercel):** [https://lms-frontend-svim.vercel.app/](https://lms-frontend-svim.vercel.app/)  
> 🌐 **Live Backend API (Render):** [https://lms1-backend.onrender.com/api/v1/](https://lms1-backend.onrender.com/api/v1/)

---

## 🖼️ Demo Screenshot

![Demo](./6abc7f13-a45e-4269-b77b-4a7426f825a6.png)

---

## ✨ Features

- 🌐 Responsive modern frontend (React + Tailwind + Vite)
- 🔗 RESTful backend with secure JWT-based auth (Node + Express + MongoDB)
- 🧑‍🏫 Role-based access (Student, Teacher, Admin)
- 📚 Course listing, creation, and deletion
- 📬 Contact form, page routing
- 🧾 MVC pattern, clean code structure
- 🚀 Deployed on Vercel (frontend) and Render (backend)

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Axios, React Router
- **Backend:** Node.js, Express.js, MongoDB, JWT, bcrypt, Multer, CORS
- **Dev Tools:** Nodemon, dotenv
- **Deployment:** Vercel (Frontend), Render (Backend)

---

## 📁 Project Structure

### LMS-Frontend

```
LMS-Frontend/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

### LMS1-Backend

```
LMS1-Backend/
├── config/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── utils/
├── .env
├── server.js
├── package.json
```

---

## 📦 Getting Started (Frontend)

### Clone

```bash
git clone https://github.com/jit21/LMS-Frontend.git
cd LMS-Frontend
npm install
npm run dev
```

Visit: http://localhost:5173

---

## 📦 Getting Started (Backend)

### Clone

```bash
git clone https://github.com/jit21/LMS1-Backend.git
cd LMS1-Backend
npm install
```

### Create `.env`

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### Run

```bash
npm start
```

Local API: http://localhost:5000/api/v1/

---

## 📡 API Reference

### 🔐 Authentication

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| POST   | `/auth/register` | Register new user       |
| POST   | `/auth/login`    | User login (returns JWT)|

### 📚 Courses

| Method | Endpoint           | Description                    |
|--------|--------------------|--------------------------------|
| GET    | `/courses/`        | Get all courses                |
| POST   | `/courses/create`  | Create a course (admin/teacher)|
| PUT    | `/courses/:id`     | Update course details          |
| DELETE | `/courses/:id`     | Delete course                  |

> All protected routes require a JWT token in header:  
> `Authorization: Bearer <token>`

---

## 🧠 Future Scope

- ✅ Authentication UI (Login/Register)
- ✅ Contact form backend integration
- 📊 Admin dashboards
- 💬 Real-time chat with Socket.io
- 📅 Course scheduling, reminders
- 🧠 AI-based recommendations

---

## 🙌 Author

**Jit Kumar Das**  
📧 [jitkumardas2002@gmail.com](mailto:jitkumardas2002@gmail.com)  
🔗 [https://github.com/jit21](https://github.com/jit21)

---

## 📄 License

Licensed under the **MIT License**.
