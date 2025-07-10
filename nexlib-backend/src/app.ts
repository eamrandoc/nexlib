import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import booksRoute from './modules/books/books.route';
import borrowBookRoute from './modules/borrowBook/borrowBook.route';

const app: Application = express();

app.use(express.json());
app.use(cors({
  origin:["https://nexlib-frontend.vercel.app"]
}));


app.use(booksRoute)
app.use(borrowBookRoute)


// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');
});

export default app;
