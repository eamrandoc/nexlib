// "use client"

// import {
//   type ColumnDef,
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
// } from "@tanstack/react-table"

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { useNavigate } from "react-router"

// // import { useNavigate } from "react-router-dom"

// interface DataTableProps<TData, TValue> {
//   columns: ColumnDef<TData, TValue>[]
//   data: TData[]
// }

// export function DataTable<TData extends { _id?: string }, TValue>({
//   columns,
//   data,
// }: DataTableProps<TData, TValue>) {
//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   })

//   const navigate = useNavigate()

//   return (
//     <div className="rounded-md border">
//       <Table>
//         <TableHeader>
//           {table.getHeaderGroups().map((headerGroup) => (
//             <TableRow key={headerGroup.id}>
//               {headerGroup.headers.map((header) => (
//                 <TableHead key={header.id}>
//                   {header.isPlaceholder
//                     ? null
//                     : flexRender(
//                         header.column.columnDef.header,
//                         header.getContext()
//                       )}
//                 </TableHead>
//               ))}
//             </TableRow>
//           ))}
//         </TableHeader>
//         <TableBody>
//           {table.getRowModel().rows?.length ? (
//             table.getRowModel().rows.map((row) => (
//               <TableRow
//                 key={row.id}
//                 data-state={row.getIsSelected() && "selected"}
//                 onClick={() => row.original._id && navigate(`/books/${row.original._id}`)}
//                 className="cursor-pointer hover:bg-muted transition"
//               >
//                 {row.getVisibleCells().map((cell) => (
//                   <TableCell key={cell.id}>
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))
//           ) : (
//             <TableRow>
//               <TableCell colSpan={columns.length} className="h-24 text-center">
//                 No results.
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </div>
//   )
// }










// import { useAddBookApiMutation } from "@/features/api/createBookApi";
// import { useForm } from "react-hook-form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { useNavigate } from "react-router-dom";

// const AddBook = () => {
//   const [addBook] = useAddBookApiMutation();
//   const navigate = useNavigate();
//   const { register, handleSubmit, setValue } = useForm();

//   const onSubmit = async (formData: any) => {
//     try {
//       await addBook(formData).unwrap();
//       navigate("/all-books");
//     } catch (error) {
//       console.error("Add book failed", error);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
//       <h1 className="text-2xl font-bold mb-4">Add New Book</h1>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <Input {...register("title")} placeholder="Title" />
//         <Input {...register("author")} placeholder="Author" />
//         <Input {...register("isbn")} placeholder="ISBN" />
//         <Input type="number" {...register("copies")} placeholder="Copies" />
//         <Textarea {...register("description")} placeholder="Description" />

//         <Select onValueChange={(value) => setValue("genre", value)}>
//           <SelectTrigger>
//             <SelectValue placeholder="Select Genre" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="FICTION">FICTION</SelectItem>
//             <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
//             <SelectItem value="SCIENCE">SCIENCE</SelectItem>
//             <SelectItem value="HISTORY">HISTORY</SelectItem>
//             <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
//             <SelectItem value="FANTASY">FANTASY</SelectItem>
//           </SelectContent>
//         </Select>

//         <Button type="submit">Add Book</Button>
//       </form>
//     </div>
//   );
// };

// export default AddBook;










// import { useDeleteBookApiMutation } from "@/features/api/createBookApi";
// import { type ColumnDef } from "@tanstack/react-table";


// import { Link } from "react-router";

// export interface IBook {
//   _id?: string;
//   title: string;
//   author: string;
//   genre: "FICTION" | "NON_FICTION" | "SCIENCE" | "HISTORY" | "BIOGRAPHY" | "FANTASY";
//   isbn: string;
//   description: string;
//   copies: number;
//   available: boolean;
// }

// export const columns: ColumnDef<IBook>[] = [
//   {
//     id: "SN",
//     header: "SN",
//     cell: ({ row }) => row.index + 1,
//   },
//   {
//     accessorKey: "title",
//     header: "Title",
//   },
//   {
//     accessorKey: "author",
//     header: "Author",
//   },
//   {
//     accessorKey: "genre",
//     header: "Genre",
//   },
//   {
//     accessorKey: "isbn",
//     header: "ISBN",
//   },
//   {
//     accessorKey: "copies",
//     header: "Copies",
//   },
//   {
//     accessorKey: "available",
//     header: "Available",
//     cell: ({ row }) => (
//       <span style={{ color: row.original.available ? "green" : "red", fontWeight: "bold" }}>
//         {row.original.available ? "Yes" : "No"}
//       </span>
//     ),
//   },
//   {
//     id: "actions",
//     header: "Actions",
//     cell: ({ row }) => {
//         const book = row.original;
//         const [deleteBook, { isLoading }] = useDeleteBookApiMutation();

//       const handleDelete = async () => {
//         const confirmed = window.confirm(`Are you sure you want to delete "${book.title}"?`);
//         if (confirmed) {
//           try {
//             await deleteBook(book._id!).unwrap();
//           } catch (err) {
//             console.error("Failed to delete book", err);
//           }
//         }
//       };

//       return (
//         <div className="flex flex-wrap gap-2">
//           <Link to={`/books/${book._id}`} className="text-indigo-500 hover:underline">
//             Detail
//           </Link>
//           <Link to={`/edit-book/${book._id}`} className="text-blue-500 hover:underline">
//             Edit
//           </Link>
//           <Link to={`/borrow/${book._id}`} className="text-green-500 hover:underline">
//             Borrow
//           </Link>
//           <button
//             onClick={handleDelete}
//             className="text-red-600 hover:underline disabled:opacity-50"
//             disabled={isLoading}
//           >
//             {isLoading ? "Deleting..." : "Delete"}
//           </button>
//         </div>
//       );
//     },
//   },
// ];
