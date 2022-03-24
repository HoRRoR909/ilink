import { createSlice } from "@reduxjs/toolkit";

import { r0, r1, r2, r3 } from "../resourses/reviews";

const initialState = {
  reviews: [
    { id: 3, name: 'Буба Бубенцов', text: r3, date: '08.01.22' },
    { id: 2, name: 'Илья Анташкевич', text: r2, date: '08.01.22' },
    { id: 1, name: 'Юрина Маргарита', text: r1, date: '26.12.2021' },
    { id: 0, name: 'Дмитрий Иванов', text: r0, date: '16.12.2021' }
  ]
} 

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview: (state, action) => {
      state.reviews.unshift({
        id: Date.now(),
        name: action.payload.name,
        text: action.payload.text,
        date: new Date().toLocaleDateString()
      })
    }
  }
})

export const {addReview} = reviewSlice.actions
export default reviewSlice.reducer