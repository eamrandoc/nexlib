import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import AddBookForm from "@/form/AddBookForm";


const AddBook = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="max-w-2xl mx-auto text-center space-y-4">
            {/* ✅ Description */}
            <div className="text-gray-700">
                <h2 className="text-2xl font-semibold">Add a New Book to the NexLib</h2>
                {/* <p className="text-sm text-gray-500 mt-1">
                    Fill in the details below to add a new book to your collection.
                    Make sure to include the title, author, genre, and number of copies.
                    A book becomes <strong>unavailable</strong> if copies are set to <strong>0</strong>.
                </p> */}
                <p className="text-sm text-gray-500 mt-1">
                    Fill in the form below to add a new book to your library collection. Make sure to provide accurate details including the <strong>title</strong>, <strong>author</strong>, <strong>genre</strong>, and <strong>number of copies</strong>. The <strong>ISBN</strong> helps uniquely identify the book and should follow a valid format.
                    <br /><br />
                    Books with <strong>0 copies</strong> will automatically be marked as <strong>unavailable</strong>, and cannot be borrowed until restocked. This helps manage inventory and borrowing eligibility.
                    <br /><br />
                    Ensure the genre is selected from the available types such as <em>Fiction, Non-Fiction, Biography, Fantasy</em>, and more. Once added, the book will appear in the main catalog for viewing and borrowing.
                </p>

            </div>

            {/* ✅ Modal Trigger */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        Add New Book
                    </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle>Add a New Book</DialogTitle>
                        <p className="text-sm text-gray-500">
                            Enter complete information about the book below.
                        </p>
                    </DialogHeader>

                    <AddBookForm onSuccess={() => setOpen(false)} />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AddBook;
