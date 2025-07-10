import { Request, Response } from "express";
import Books from "./books.model";

const allBooks = async (req: Request, res: Response) => {
    try {
        const data = await Books.find()
        res.status(200).json({
            success: true,
            data,
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Book Not Found",
            error: error,
        });
    }

};
const createBook = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const book = new Books(payload);
        const data = await book.save();
        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Validation failed",
            error: error,
        });
    }

};
const singleBook = async (req: Request, res: Response) => {
    try {
        const { bookId } = req.params;
        const data = await Books.findById(bookId);
        if (!data) {
            res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }
        res.json({
            success: true,
            message: "Book successfully done",
            data,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "No book Found",
            error: err,
        });
    }

};
const updateBook = async (req: Request, res: Response) => {
    try {
        const { bookId } = req.params;
        const updateDoc = req.body;
        const data = await Books.findByIdAndUpdate(bookId, updateDoc, {
            new: true,
            runValidators: true,
        });
        if (!data) {
            res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }
        res.json({
            success: true,
            message: "Book updated successfully",
            data,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Error updating book",
            error: err,
        });
    }

};
const deleteBook = async (req: Request, res: Response) => {
    try {
        const { bookId } = req.params;
        const data = await Books.findByIdAndDelete(bookId);
        if (!data) {
            res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }
        res.json({
            success: true,
            message: "Book deleted successfully",
            data: null,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Error deleting book",
            error: err,
        });
    }

};

export {
    allBooks, createBook, singleBook, updateBook, deleteBook

}

