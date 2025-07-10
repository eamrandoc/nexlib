# 📚 NexLib – Full-Stack Library Management System

**NexLib** is a modern, full-stack Library Management System for managing books and borrowing operations. Designed for minimalism and clarity, it allows users to perform all core actions like adding, editing, deleting, borrowing, and viewing summaries—without authentication or payment integration.

---


---

## ✨ Core Features

### ✅ Book Management
- Add, edit, delete, and view books
- Borrow books with quantity and due date
- Real-time availability logic (copies = 0 → unavailable)

### 📊 Borrow Summary
- Aggregated borrow report (book title, ISBN, total quantity)
- Live data from MongoDB aggregation pipeline

### 🔄 Seamless UX
- Optimistic updates
- Toast notifications
- Fully responsive (mobile, tablet, desktop)

---

## 🛠 Tech Stack Overview

| Layer       | Technologies                                |
|------------ |---------------------------------------------|
| Frontend    | React, TypeScript, Redux Toolkit, RTK Query |
| Styling     | Tailwind CSS, DaisyUI, Shadcn UI            |
| Backend     | Express.js, TypeScript, MongoDB, Mongoose   |
| Database    | MongoDB (local or Atlas)                    |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/nexlib.git
cd nexlib


🌍 Live Demo
🌐 Frontend: https://nexlib-frontend.vercel.app

🌐 Backend: https://nexlib-backend.vercel.app

📦 Deployment
Frontend: Deployed on Vercel

Backend: Deployed on Render or serverless platform

🧠 Developer Notes
Uses RTK Query for all API calls

Optimistic UI for faster interactions

Typed API responses using TypeScript

Form validation powered by React Hook Form + Zod

👨‍💻 Author
MD AL EAMRAN
Frontend Web Developer
📧 eamrandoc@gmail.com

