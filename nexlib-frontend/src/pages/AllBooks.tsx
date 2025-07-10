import BooksTable from "@/components/BooksTable/BooksTable";

const AllBooks = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Explore All Books</h1>
        <p className="text-sm text-gray-500">
          Discover everything available in our collection
        </p>
      </div>

      <BooksTable />

      <div className="mt-8 md:text-2xl text-center text-indigo-600 font-semibold italic">
        Coming Soon... More Books...!!
      </div>
    </div>
  );
};

export default AllBooks;
