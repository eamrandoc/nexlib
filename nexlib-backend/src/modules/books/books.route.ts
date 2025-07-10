import { Router } from "express";
import { allBooks, createBook, deleteBook, singleBook, updateBook } from "./books.controller";

const booksRoute = Router()

booksRoute.get('/api/books', allBooks);
booksRoute.post('/api/create-book', createBook);
booksRoute.get('/api/single-book/:bookId', singleBook);
booksRoute.put('/api/edit-book/:bookId', updateBook);
booksRoute.delete('/api/delete-book/:bookId', deleteBook);


export default booksRoute
