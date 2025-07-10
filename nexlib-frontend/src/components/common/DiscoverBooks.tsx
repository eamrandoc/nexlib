import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

// Example book data
const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "FICTION",
        image: "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg",
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        genre: "SCIENCE",
        image: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg",
    },
    {
        id: 3,
        title: "Brave New World",
        author: "Aldous Huxley",
        genre: "FICTION",
        image: "https://images-na.ssl-images-amazon.com/images/I/81s6DUyQCZL.jpg",
    },
    {
        id: 4,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        genre: "NON_FICTION",
        image: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg",
    },
    {
        id: 5,
        title: "Steve Jobs",
        author: "Walter Isaacson",
        genre: "BIOGRAPHY",
        image: "https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg",
    },
    {
        id: 6,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "FANTASY",
        image: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
    },
    {
        id: 7,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "FANTASY",
        image: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
    },
    {
        id: 8,
        title: "Educated",
        author: "Tara Westover",
        genre: "NON_FICTION",
        image: "https://images-na.ssl-images-amazon.com/images/I/81WojUxbbFL.jpg",
    },
    {
        id: 9,
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        genre: "FANTASY",
        image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
    },
];


const DiscoverBooks = () => {
    const navigate = useNavigate();
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
                    Discover Your Next Book
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {books.map((book) => (
                        <Card
                            key={book.id}
                            className="shadow-sm hover:shadow-md transition-shadow"
                        >
                            <CardHeader className="p-0">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-full h-60 object-cover rounded-t-md"
                                />
                            </CardHeader>

                            <CardContent className="p-4 space-y-2">
                                <CardTitle className="text-xl font-semibold">
                                    {book.title}
                                </CardTitle>
                                <CardDescription className="text-sm text-gray-600">
                                    Author: <span className="font-medium">{book.author}</span>
                                </CardDescription>
                                <CardDescription className="text-sm text-gray-600">
                                    Genre: <span className="font-medium">{book.genre}</span>
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <div className="mt-10 flex justify-center">
                <Button
                    onClick={() => navigate("/all-books")}
                    className="bg-gradient-to-r from-indigo-800 to-blue-500 text-white hover:from-indigo-700 hover:to-blue-600 transition duration-200 px-6 py-2 rounded-md"
                >
                    See All Books
                </Button>
            </div>
        </section>
    );
};

export default DiscoverBooks;
