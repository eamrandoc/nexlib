import { useBorrowSummaryApiQuery } from "@/features/api/createBookApi";
import Loading from "@/components/common/Loading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type BorrowSummaryItem = {
  book: {
    title: string;
    isbn: string;
  };
  totalQuantity: number;
};

const BorrowSummary = () => {
  const { data, isLoading, isError } = useBorrowSummaryApiQuery();

  if (isLoading) return <Loading />;
  if (isError || !data)
    return (
      <p className="text-center text-red-500">Failed to load borrow summary.</p>
    );

  const summaryData = data as BorrowSummaryItem[]; // 👈 Type assertion

  if (summaryData.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center text-gray-500">
        <h2 className="text-2xl font-semibold mb-4">Borrow Summary</h2>
        <p>No borrowing activity found yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-4">Borrow Summary</h2>
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead>#</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Total Borrowed</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {summaryData.map((item, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium">{item.book.title}</TableCell>
                <TableCell>{item.book.isbn}</TableCell>
                <TableCell
                  className={
                    item.totalQuantity > 0
                      ? "text-green-600 font-semibold"
                      : "text-red-600 font-semibold"
                  }
                >
                  {item.totalQuantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BorrowSummary;

















// import { useBorrowSummaryApiQuery } from "@/features/api/createBookApi";
// import Loading from "@/components/common/Loading";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// const BorrowSummary = () => {
//   const { data, isLoading, isError } = useBorrowSummaryApiQuery();

//   if (isLoading) return <Loading />;
//   if (isError || !data) return <p className="text-center text-red-500">Failed to load borrow summary.</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
//       <h2 className="text-2xl font-semibold mb-4">Borrow Summary</h2>
//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>#</TableHead>
//               <TableHead>Title</TableHead>
//               <TableHead>ISBN</TableHead>
//               <TableHead>Total Borrowed</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {data?.map((item, index) => (
//               <TableRow key={index}>
//                 <TableCell>{index + 1}</TableCell>
//                 <TableCell>{item.book.title}</TableCell>
//                 <TableCell>{item.book.isbn}</TableCell>
//                 <TableCell>{item.totalQuantity}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default BorrowSummary;
