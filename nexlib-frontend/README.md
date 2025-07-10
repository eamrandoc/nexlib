# NexLib 📚 – Minimal Library Management System

## 🚀 Project Overview

**NexLib** is a minimal yet functional **Library Management System** built with **React**, **Redux Toolkit Query (RTK Query)**, and **TypeScript**. It provides an intuitive interface for managing books and borrow operations. 

The goal is to demonstrate clean UI/UX, proper API integration, and state management—all without the complexity of authentication, categories, or payments.

---

## ✅ Features

### 1. Public Access
- No authentication required.
- All routes are publicly accessible.

### 2. 📚 Book Management

- **Book List Table**
  - View all books in a structured table.
  - Columns: Title, Author, Genre, ISBN, Copies, Availability, and Actions.
- **Actions**
  - ✏️ **Edit Book** – Opens a form with existing data and updates via API.
    - Business Logic: If `copies` = 0 → book is marked as **unavailable**.
  - 🗑️ **Delete Book** – Confirmation dialog before deletion.
  - 📖 **Borrow Book** – Opens a modal to borrow book copies.
- **Add New Book**
  - Form Fields: Title, Author, Genre, ISBN, Description, Copies.
  - Optional: Available (defaults to `true`).
  - After submission: Book is added and list updates instantly.

### 3. 🔄 Borrow Book

- Triggered from book list "Borrow" button.
- Form Fields: Quantity, Due Date.
- Business Logic:
  - Quantity must not exceed available copies.
  - If `copies = 0`, book is marked as unavailable.
- After successful submission: Redirects to **Borrow Summary**.

### 4. 📊 Borrow Summary

- Displays an aggregated view of all borrowed books.
- Columns: Book Title, ISBN, Total Quantity Borrowed.
- Data fetched from backend aggregation endpoint.

---

## 🧩 Application Structure

### 📄 Pages

| Path               | Description                                |
|--------------------|--------------------------------------------|
| `/books`           | Book list with actions (edit, delete, borrow) |
| `/create-book`     | Add a new book                              |
| `/books/:id`       | Book details                                |
| `/edit-book/:id`   | Edit book info                              |
| `/borrow/:bookId`  | Borrow form for a specific book             |
| `/borrow-summary`  | Borrow summary report                       |

---

## 🧠 UI/UX Guidelines

- **Minimalist UI** using **Tailwind CSS**
- Responsive across mobile, tablet, and desktop
- Clear navigation via a simple navbar
- User-friendly modals and dialogs

---


## 🛠️ Technology Stack

| Layer            | Tech Used                          |
|------------------|-------------------------------------|
| **Frontend**     | React + TypeScript                  |
| **State Mgmt**   | Redux Toolkit + RTK Query           |
| **Styling**      | Tailwind CSS + DaisyUi+ Shadcn Ui                        |
| **Backend**      | Node.js + Express.js                |
| **Database**     | MongoDB + Mongoose                  |

---

## 🧪 Backend Overview (MVC Pattern)

### 📘 Book Schema

- `title`, `author`, `genre`, `isbn`, `description`, `copies`, `available`

### 📋 Borrow Schema

- Linked to book: `bookId`, `quantity`, `dueDate`

### API Endpoints

- **Books**: `GET`, `POST`, `PATCH`, `DELETE`
- **Borrows**: `POST`, `GET (summary)`
- Error handling with descriptive messages
- Pagination supported in book listings

---

## 🔌 API Integration

- RTK Query handles:
  - Fetching and caching book/borrow data
  - Auto-retries and error handling
- All API types and responses are strictly typed with TypeScript.

---

## 🔗 Deployment & Submission

- ✅ **Frontend GitHub Repo**: [Your Frontend Repo Link]
- ✅ **Backend GitHub Repo**: [Your Backend Repo Link]
- 🌐 **Live Frontend URL**: [https://nexlib-frontend.vercel.app]
- 🌐 **Live Backend URL**: [https://nexlib-backend.vercel.app/]

---


---

## 📣 License

This project is licensed under the [NexLib](LICENSE).

---

## 🙌 Acknowledgements

Thanks to the open-source community for tools like:

- React
- Redux Toolkit
- Tailwind CSS
- MongoDB

---

Feel free to fork or contribute to improve **NexLib**! 📚✨



## 👨‍💻 **Author**

*MD AL EAMRAN*

FRONT END WEB DEVELOPER
email:eamrandoc@gmail.com
