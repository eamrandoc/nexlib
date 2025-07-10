import { Router } from "express";
import { borrowBook, borrowSummary } from "./borrowBook.controller";

const borrowBookRoute = Router()



borrowBookRoute.post('/api/borrow', borrowBook);
borrowBookRoute.get('/api/borrow', borrowSummary);

export default borrowBookRoute;