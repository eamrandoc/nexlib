import { model, Schema } from "mongoose";
import { IBook } from "./books.interface";

const bookSchema = new Schema<IBook>({
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    genre: {
        type: String,
        enum: {
            values: ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"],
            message: "{VALUE} is invalid genre",
        },
        required: true,
    },
    isbn: { type: String, unique: true, required: true },
    description: { type: String },
    copies: { type: Number, required: true, min: 0 },
    available: { type: Boolean, default: true }
},
    {
        versionKey: false,
        timestamps: true
    })

const Books = model<IBook>("books", bookSchema)
export default Books