import { createBrowserRouter } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import AllBooks from "@/pages/AllBooks";
import AddBook from "@/pages/AddBook";
import NotFound from "@/pages/NotFound";
import BorrowBook from "@/pages/BorrowBook";
import BorrowSummary from "@/pages/BorrowSummary";
import BookDetails from "@/pages/BookDetails";
import EditBook from "@/pages/EditBook";


const routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/all-books",
        Component: AllBooks,
      },
      {
        path: "/create-book",
        Component: AddBook,
      },
      {
        path: "/borrow/:bookId",
        Component: BorrowBook,
      },
      {
        path: "/borrow-summary",
        Component: BorrowSummary,
      },
      {
        path: "/books/:id",
        Component: BookDetails,
      },
      {
        path: "/edit-book/:id",
        Component: EditBook,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default routes;
