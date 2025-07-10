import { model, Schema } from "mongoose";
import { IBorrowBook } from "./borrowBook.interface";
import Books from "../books/books.model";


const borrowBookSchema = new Schema<IBorrowBook>({
    book: { type: Schema.Types.ObjectId, ref: 'Books', required: true },
    quantity: { type: Number, required: true, min: 1 },
    dueDate: { type: Date, required: true }

},
    {
        versionKey: false,
        timestamps: true
    })


borrowBookSchema.post('save', async function (doc) {
    const book = await Books.findById(doc.book);
    if (book) {
        book.copies -= doc.quantity;
        if (book.copies < 0) {
            throw new Error("Insufficient copies available");
        }
        book.available = book.copies > 0;
        await book.save();
    }
});


const BorrowBook = model<IBorrowBook>("BorrowBook", borrowBookSchema);
export default BorrowBook;