import { useDeleteBookApiMutation } from "@/features/api/createBookApi";
import { Link } from "react-router";
import Swal from "sweetalert2";

interface Book {
  _id?: string;
  title: string;
}

interface BookActionsProps {
  book: Book;
}
const BookActions = ({ book }: BookActionsProps) => {
    const [deleteBook, { isLoading }] = useDeleteBookApiMutation();
    const handleDelete = async () => {
        const result = await Swal.fire({
            title: `Delete "${book.title}"?`,
            text: "Once you deleted cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
            try {
                await deleteBook(book._id!).unwrap();
                Swal.fire("Deleted!", `"${book.title}" has been removed.`, "success");
            } catch (err) {
                Swal.fire("Error!", "Failed to delete the book.", "error");
                console.error("Failed to delete book", err);
            }
        }
    };



    return (
        <div className="flex flex-wrap gap-2">
            <Link to={`/books/${book._id}`} className="text-indigo-500 hover:underline">
                Detail
            </Link>
            <Link to={`/edit-book/${book._id}`} className="text-amber-600 hover:underline">
                Edit
            </Link>
            <Link to={`/borrow/${book._id}`} className="text-green-500 hover:underline">
                Borrow
            </Link>
            <button
                onClick={handleDelete}
                className="text-red-600 hover:underline disabled:opacity-50"
                disabled={isLoading}
            >
                {isLoading ? "Deleting..." : "Delete"}
            </button>
        </div>
    );
};

export default BookActions;