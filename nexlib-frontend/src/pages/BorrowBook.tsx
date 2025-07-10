import { useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  useBorrowBookApiMutation,
  useGetSingleBookApiQuery,
} from "@/features/api/createBookApi";
import Swal from "sweetalert2";

const formSchema = z.object({
  quantity: z.coerce.number().min(1, "Must borrow at least 1 copy"),
  dueDate: z.string().refine(
    (date) => {
      const selected = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    },
    { message: "Due date cannot be before today" }
  ),
});

const BorrowBook = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const { data: book, isLoading: isBookLoading } = useGetSingleBookApiQuery(bookId!);
  const [borrowBook, { isLoading }] = useBorrowBookApiMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 1,
      dueDate: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await borrowBook({ ...values, book: bookId! }).unwrap();

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: `"${book?.title}" borrowed successfully.`,
        timer: 2000,
        showConfirmButton: false,
      });

      navigate("/all-books");
    } catch (err) {
      console.error("Borrowing failed", err);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong while borrowing the book.",
      });
    }
  };

  if (isBookLoading) return <p className="text-center">Loading book info...</p>;
  if (!book) return <p className="text-center text-red-500">Book not found.</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-xl font-semibold mb-4">Borrow Book: <span className="text-indigo-600">{book.title}</span></h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input type="number" {...field} min={1} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Due Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Borrowing..." : "Borrow Book"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BorrowBook;
