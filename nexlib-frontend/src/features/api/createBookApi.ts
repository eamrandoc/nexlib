
// import type { IBook } from '@/components/BooksTable/columns';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const createBookApi = createApi({
//   reducerPath: 'createBookApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
//   tagTypes: ['Books', 'Borrows'],
//   endpoints: (builder) => ({
//     // ✅ Get all books
//     getBookApi: builder.query<IBook[], void>({
//       query: () => '/books',
//       transformResponse: (response: { data: IBook[] }) => response.data,
//       providesTags: ['Books'],
//     }),

//     // ✅ Get a single book by ID
//     getSingleBookApi: builder.query<IBook, string>({
//       query: (id) => `/single-book/${id}`,
//       transformResponse: (response: { data: IBook }) => response.data,
//       providesTags: ['Books'],
//     }),

//     // ✅ Add a new book
//     addBookApi: builder.mutation<IBook, Partial<IBook>>({
//       query: (body) => ({
//         url: '/create-book',
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: ['Books'],
//     }),

//     // ✅ Update book by ID
//     editBookApi: builder.mutation<IBook, { id: string; data: Partial<IBook> }>({
//       query: ({ id, data }) => ({
//         url: `/edit-book/${id}`,
//         method: 'PUT',
//         body: data,
//       }),
//       invalidatesTags: ['Books'],
//     }),

//     // ✅ Delete book by ID
//     deleteBookApi: builder.mutation<{ success: boolean }, string>({
//       query: (id) => ({
//         url: `/delete-book/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Books'],
//     }),

//     // ✅ Borrow a book
//     borrowBookApi: builder.mutation<any, { book: string; quantity: number; dueDate: string }>({
//       query: (body) => ({
//         url: '/borrow',
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: ['Books', 'Borrows'],
//     }),

//     // ✅ Get borrow summary
//     borrowSummaryApi: builder.query<any, void>({
//       query: () => '/borrow',
//       transformResponse: (response: { data: any}) => response.data,
//       providesTags: ['Borrows'],
//     }),
//   }),
// });

// export const {
//   useGetBookApiQuery,
//   useGetSingleBookApiQuery,
//   useAddBookApiMutation,
//   useEditBookApiMutation,
//   useDeleteBookApiMutation,
//   useBorrowBookApiMutation,
//   useBorrowSummaryApiQuery,
// } = createBookApi;








import type { IBook } from '@/components/BooksTable/columns';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Type for borrowing a book
interface BorrowRequest {
  book: string;
  quantity: number;
  dueDate: string;
}

interface BorrowSummaryItem {
  book: {
    title: string;
    isbn: string;
  };
  totalQuantity: number;
}

export const createBookApi = createApi({
  reducerPath: 'createBookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://nexlib-backend.vercel.app/api' }),
  tagTypes: ['Books', 'Borrows'],
  endpoints: (builder) => ({
    // ✅ Get all books
    getBookApi: builder.query<IBook[], void>({
      query: () => '/books',
      transformResponse: (response: { data: IBook[] }) => response.data,
      providesTags: ['Books'],
    }),

    // ✅ Get a single book by ID
    getSingleBookApi: builder.query<IBook, string>({
      query: (id) => `/single-book/${id}`,
      transformResponse: (response: { data: IBook }) => response.data,
      providesTags: ['Books'],
    }),

    // ✅ Add a new book
    addBookApi: builder.mutation<IBook, Partial<IBook>>({
      query: (body) => ({
        url: '/create-book',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Books'],
    }),

    // ✅ Update book by ID
    editBookApi: builder.mutation<IBook, { id: string; data: Partial<IBook> }>({
      query: ({ id, data }) => ({
        url: `/edit-book/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Books'],
    }),

    // ✅ Delete book by ID
    deleteBookApi: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `/delete-book/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Books'],
    }),

    // ✅ Borrow a book
    borrowBookApi: builder.mutation<{ message: string; data: BorrowRequest },BorrowRequest>({
      query: (body) => ({
        url: '/borrow',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Books', 'Borrows'],
    }),

    // ✅ Get borrow summary
    borrowSummaryApi: builder.query<BorrowSummaryItem[], void>({
      query: () => '/borrow',
      transformResponse: (response: { data: BorrowSummaryItem[] }) => response.data,
      providesTags: ['Borrows'],
    }),
  }),
});

export const {
  useGetBookApiQuery,
  useGetSingleBookApiQuery,
  useAddBookApiMutation,
  useEditBookApiMutation,
  useDeleteBookApiMutation,
  useBorrowBookApiMutation,
  useBorrowSummaryApiQuery,
} = createBookApi;
