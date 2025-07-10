import { type ColumnDef } from "@tanstack/react-table";
import BookActions from "./BookActions";

// Book type definition
export interface IBook {
  _id?: string;
  title: string;
  author: string;
  genre: "FICTION" | "NON_FICTION" | "SCIENCE" | "HISTORY" | "BIOGRAPHY" | "FANTASY";
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
}

// Column definitions
export const columns: ColumnDef<IBook>[] = [
  {
    id: "SN",
    header: "SN",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
  {
    accessorKey: "isbn",
    header: "ISBN",
  },
  {
    accessorKey: "copies",
    header: "Copies",
  },
  {
    accessorKey: "available",
    header: "Available",
    cell: ({ row }) => (
      <span
        style={{
          color: row.original.available ? "green" : "red",
          fontWeight: "bold",
        }}
      >
        {row.original.available ? "Yes" : "No"}
      </span>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <BookActions book={row.original} />,
  },
];
