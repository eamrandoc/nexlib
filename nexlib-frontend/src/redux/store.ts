import { createBookApi } from '@/features/api/createBookApi'
import { configureStore } from '@reduxjs/toolkit'
// ...

export const store = configureStore({
  reducer: {
    [createBookApi.reducerPath]:createBookApi.reducer,
  },
  middleware:(getDefaultMiddleware) =>{
      return getDefaultMiddleware().concat(createBookApi.middleware)
  },
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store