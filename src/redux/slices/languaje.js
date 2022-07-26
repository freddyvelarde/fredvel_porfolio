import { createSlice } from "@reduxjs/toolkit";

export const languajeSlice = createSlice({
  name: "languaje",
  initialState: {
    value: true
  },
  reducers: {
    setLanguaje: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setLanguaje } = languajeSlice.actions
export default languajeSlice.reducer
