import { useGetBookApiQuery } from "@/features/api/createBookApi";
import { DataTable } from "./DataTable";
import { columns } from "./columns";
import Loading from "../common/Loading";


const BooksTable = () => {
    const { data: books, isLoading} = useGetBookApiQuery(undefined)
    if (isLoading) {
        return <Loading></Loading>
    }
    if (!books || books.length === 0) {
        return (
            <div className="text-center text-gray-500">No books available.</div>
        );
    }

    return (
        <div>
            <DataTable columns={columns} data={books}></DataTable>
        </div>
    );
};

export default BooksTable;
