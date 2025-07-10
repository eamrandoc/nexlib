import { useParams } from "react-router";
import { useGetSingleBookApiQuery } from "@/features/api/createBookApi";
import Loading from "@/components/common/Loading";

const BookDetails = () => {
    const { id } = useParams();
    const { data: book, isLoading } = useGetSingleBookApiQuery(id as string);

    if (isLoading) return <Loading />;
    if (!book) return <p className="text-center text-gray-500">Book not found.</p>;

    return (
        <div className="py-10 px-4">
            {/* Page Heading */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-indigo-700">📖 Book Details</h1>
                <p className="text-gray-600 text-sm mt-2">
                    Here you can find all the information about the selected book.
                </p>
            </div>

            {/* Card Content */}
            <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
                    Details of the Book:{" "}
                    <span className="text-indigo-700">{book.title}</span>
                </h2>

                <div className="space-y-4 text-gray-700">
                    <div>
                        <h3 className="text-sm font-medium text-gray-500">Author</h3>
                        <p className="text-base">{book.author}</p>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-500">Genre</h3>
                        <p className="text-base">{book.genre}</p>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-500">ISBN</h3>
                        <p className="text-base">{book.isbn}</p>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-500">Number of Copies</h3>
                        <p className="text-base">{book.copies}</p>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-500">Availability</h3>
                        <p
                            className={
                                book.available
                                    ? "text-green-600 font-semibold"
                                    : "text-red-600 font-semibold"
                            }
                        >
                            {book.available ? "Available" : "Unavailable"}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-500">Description</h3>
                        <p className="text-base text-gray-600">
                            {book.description || "No description available."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
