// import type { RootState } from '@/redux/store'
import { createSlice } from '@reduxjs/toolkit'



// Define the initial state using that type
const initialState = {
  value: 100
}

export const bookSlice = createSlice({
  name: 'books',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   
  }
})

// export const {  } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.books.value

export default bookSlice.reducer