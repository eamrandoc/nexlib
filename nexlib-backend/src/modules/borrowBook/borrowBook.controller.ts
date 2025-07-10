import { Request, Response } from "express";
import Books from "../books/books.model";
import BorrowBook from "./borrowBook.model";


const borrowBook = async (req: Request, res: Response) => {

  try {
    const { book: bookId, quantity, dueDate } = req.body;
    const book = await Books.findById(bookId);
    if (!book) {
      res.status(404).json({
        success: false,
        message: "Book not found"
      })
    }
    else if (book.copies < quantity) {
      res.status(400).json({
        success: false,
        message: "Not enough copies available"
      });
    }
    const borrow = await BorrowBook.create({ book: bookId, quantity, dueDate });

    res.status(201).json({
      success: true,
      message: "Book borrowed successfully",
      data: borrow
    })

  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Borrow failed",
      error: error
    })

  }

}

const borrowSummary = async (req: Request, res: Response) => {
  try {
    const data = await BorrowBook.aggregate([
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" }
        }
      },
      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "bookDetails"
        }
      },
      { $unwind: "$bookDetails" },
      {
        $project: {
          _id: 0,
          book: {
            title: "$bookDetails.title",
            isbn: "$bookDetails.isbn"
          },
          totalQuantity: 1
        }
      }
    ]);

    res.json({
      success: true,
      message: "Borrowed books summary successfully",
      data
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed",
      error: err
    });
  }
};

export {
  borrowBook,
  borrowSummary
}