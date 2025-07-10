import { useNavigate, useParams } from "react-router";
import {
    useEditBookApiMutation,
    useGetSingleBookApiQuery,
} from "@/features/api/createBookApi";
import { useForm } from "react-hook-form";
import Loading from "@/components/common/Loading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";
import Swal from "sweetalert2";

type BookFormData = {
    title: string;
    author: string;
    isbn: string;
    description: string;
    copies: number;
    genre: "FICTION" | "NON_FICTION" | "SCIENCE" | "HISTORY" | "BIOGRAPHY" | "FANTASY";
};

const EditBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: book, isLoading } = useGetSingleBookApiQuery(id as string);
    const [editBook] = useEditBookApiMutation();

    const { register, handleSubmit, setValue, reset } = useForm<BookFormData>();

    useEffect(() => {
        if (book) {
            reset({
                title: book.title,
                author: book.author,
                isbn: book.isbn,
                description: book.description,
                copies: book.copies,
                genre: book.genre,
            });
        }
    }, [book, reset]);

    const onSubmit = async (formData: BookFormData) => {
        try {
            await editBook({ id: id as string, data: formData }).unwrap();
            await Swal.fire({
                icon: "success",
                title: "Book updated!",
                text: `"${formData.title}" has been updated successfully.`,
                timer: 1500,
                showConfirmButton: false,
            });
            navigate("/all-books");
        } catch (err) {
            console.error("Update failed", err);
            Swal.fire("Error", "Failed to update book", "error");
        }
    };

    if (isLoading) return <Loading />;
    if (!book) return <p className="text-center">Book not found.</p>;

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
            <h1 className="text-2xl font-bold mb-4">Edit Book</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input {...register("title", { required: true })} placeholder="Title" />
                <Input {...register("author", { required: true })} placeholder="Author" />
                <Input {...register("isbn", { required: true })} placeholder="ISBN" />
                <Input
                    type="number"
                    {...register("copies", { required: true, min: 1 })}
                    placeholder="Copies"
                />
                <Textarea {...register("description")} placeholder="Description" />

                <Select
                    defaultValue={book.genre}
                    onValueChange={(value) => setValue("genre", value as BookFormData["genre"])}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select Genre" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="FICTION">FICTION</SelectItem>
                        <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                        <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                        <SelectItem value="HISTORY">HISTORY</SelectItem>
                        <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                        <SelectItem value="FANTASY">FANTASY</SelectItem>
                    </SelectContent>
                </Select>

                <Button type="submit">Update Book</Button>
            </form>
        </div>
    );
};

export default EditBook;











// import { useNavigate, useParams } from "react-router";
// import { useGetSingleBookApiQuery, useEditBookApiMutation } from "@/features/api/createBookApi";
// import { useForm } from "react-hook-form";
// import Loading from "@/components/common/Loading";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


// const EditBook = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { data: book, isLoading } = useGetSingleBookApiQuery(id as string);
//   const [editBook] = useEditBookApiMutation();
//   const { register, handleSubmit, setValue } = useForm();

//   const onSubmit = async (formData: any) => {
//     try {
//       await editBook({ id: id as string, data: formData }).unwrap();
//       navigate("/all-books");
//     } catch (err) {
//       console.error("Update failed", err);
//     }
//   };

//   if (isLoading) return <Loading />;
//   if (!book) return <p className="text-center">Book not found.</p>;

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
//       <h1 className="text-2xl font-bold mb-4">Edit Book</h1>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <Input {...register("title")} defaultValue={book.title} placeholder="Title" />
//         <Input {...register("author")} defaultValue={book.author} placeholder="Author" />
//         <Input {...register("isbn")} defaultValue={book.isbn} placeholder="ISBN" />
//         <Input type="number" {...register("copies")} defaultValue={book.copies} placeholder="Copies" />
//         <Textarea {...register("description")} defaultValue={book.description} placeholder="Description" />

//         <Select defaultValue={book.genre} onValueChange={(value) => setValue("genre", value)}>
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

//         <Button type="submit">Update Book</Button>
//       </form>
//     </div>
//   );
// };

// export default EditBook;







// import { useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useGetBookByIdQuery, useUpdateBookApiMutation } from "@/features/api/createBookApi";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import Swal from "sweetalert2";

// // Use the same schema as AddBookForm (without available)
// const formSchema = z.object({
//   title: z.string().min(1, "Title is required"),
//   author: z.string().min(1, "Author is required"),
//   genre: z.enum([
//     "FICTION",
//     "NON_FICTION",
//     "SCIENCE",
//     "HISTORY",
//     "BIOGRAPHY",
//     "FANTASY"
//   ]),
//   isbn: z.string().min(10, "ISBN must be at least 10 characters"),
//   description: z.string(),
//   copies: z.coerce.number().min(0, "Copies cannot be negative"),
// });

// const EditBook = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();

//   const { data: book, isLoading, error } = useGetBookByIdQuery(id!);
//   const [updateBook, { isLoading: isUpdating }] = useUpdateBookApiMutation();

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       title: "",
//       author: "",
//       genre: "FICTION",
//       isbn: "",
//       description: "",
//       copies: 1,
//     },
//   });

//   // Populate form once book data is loaded
//   useEffect(() => {
//     if (book) {
//       form.reset({
//         title: book.title,
//         author: book.author,
//         genre: book.genre,
//         isbn: book.isbn,
//         description: book.description,
//         copies: book.copies,
//       });
//     }
//   }, [book, form]);

//   const onSubmit = async (data: z.infer<typeof formSchema>) => {
//     try {
//       await updateBook({ id: id!, ...data, available: data.copies > 0 }).unwrap();
//       Swal.fire({
//         icon: "success",
//         title: "Book Updated!",
//         text: `"${data.title}" was updated successfully.`,
//         confirmButtonColor: "#6366F1",
//         timer: 1500,
//         showConfirmButton: false,
//       }).then(() => {
//         navigate("/all-books");
//       });
//     } catch (err) {
//       console.error("Failed to update book:", err);
//       Swal.fire({
//         icon: "error",
//         title: "Failed to update book",
//         text: "Please try again.",
//         confirmButtonColor: "#EF4444",
//       });
//     }
//   };

//   if (isLoading) return <p>Loading book details...</p>;
//   if (error) return <p>Failed to load book details.</p>;

//   return (
//     <div className="max-w-xl mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-6">Edit Book</h2>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//           <FormField
//             control={form.control}
//             name="title"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Title</FormLabel>
//                 <FormControl>
//                   <Input {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="author"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Author</FormLabel>
//                 <FormControl>
//                   <Input {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="genre"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Genre</FormLabel>
//                 <FormControl>
//                   <Select onValueChange={field.onChange} defaultValue={field.value}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select a genre" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="FICTION">Fiction</SelectItem>
//                       <SelectItem value="NON_FICTION">Non-Fiction</SelectItem>
//                       <SelectItem value="SCIENCE">Science</SelectItem>
//                       <SelectItem value="HISTORY">History</SelectItem>
//                       <SelectItem value="BIOGRAPHY">Biography</SelectItem>
//                       <SelectItem value="FANTASY">Fantasy</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="isbn"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>ISBN</FormLabel>
//                 <FormControl>
//                   <Input {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="description"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Description</FormLabel>
//                 <FormControl>
//                   <Textarea {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="copies"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Copies</FormLabel>
//                 <FormControl>
//                   <Input type="number" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <Button type="submit" disabled={isUpdating}>
//             {isUpdating ? "Updating..." : "Update Book"}
//           </Button>
//         </form>
//       </Form>
//     </div>
//   );
// };

// export default EditBook;
