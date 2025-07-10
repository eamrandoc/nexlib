# 📖 **Library Management API**

A professional API for managing a library’s books and borrow records, built with **Express**, **TypeScript**, and **MongoDB (Mongoose)**.

---

## 🎯 **Features of the Application**

✅ **Books Management**

- Create, update, delete, and retrieve books.
- Filter books by genre, sort by any field, and limit results.
- Enforce unique ISBN numbers for books.

✅ **Borrowing Management**

- Borrow books with quantity and due date.
- Automatically reduce available copies and mark as unavailable when out of stock.
- View aggregated borrow summary using MongoDB’s aggregation pipeline.

✅ **Business Logic**

- Validation for all input fields.
- Mongoose `pre` / `post` middleware and static/instance methods for availability logic.
- Robust error handling with meaningful error messages.

---

## 🛠 **Tech Stack**

- **Express.js**
- **TypeScript**
- **MongoDB + Mongoose**
- **Node.js**

---

## 🚀 **Instructions for Local Setup**

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/library-management-api.git
cd library-management-api
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the project root:

```
DATABASE=your_mongodb_connection_string
PORT=4000
```

### 4️⃣ Build and Run the Project

For production:

```bash
npm run build
npm start
```

For development with live reload:

```bash
npx ts-node-dev src/server.ts
```

---

## 📌 **API Endpoints Overview**

### 📚 **Books**

| Method | Endpoint             | Description                                |
| ------ | -------------------- | ------------------------------------------ |
| POST   | `/api/books`         | Create a new book                          |
| GET    | `/api/books`         | List books with optional filter/sort/limit |
| GET    | `/api/books/:bookId` | Get details of a specific book             |
| PUT    | `/api/books/:bookId` | Update a book                              |
| DELETE | `/api/books/:bookId` | Delete a book                              |

### 📖 **Borrowing**

| Method | Endpoint      | Description                          |
| ------ | ------------- | ------------------------------------ |
| POST   | `/api/borrow` | Borrow a book                        |
| GET    | `/api/borrow` | Aggregated summary of borrowed books |

---

## ⚠️ **Error Handling Format**

```json
{
  "success": false,
  "message": "Error message here",
  "error": { /* error details */ }
}
```

---

## 💡 **Notes**

- Ensure MongoDB index for unique ISBN:

```js
db.books.createIndex({ isbn: 1 }, { unique: true });
```

- Follows exact assignment API specs and response formats.

---

## 👨‍💻 **Author**

*MD AL EAMRAN*

FRONT END WEB DEVELOPER