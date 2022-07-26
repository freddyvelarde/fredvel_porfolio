import { configureStore } from "@reduxjs/toolkit";
import languaje from './slices/languaje.js'
import theme from './slices/theme.js'

export const store = configureStore({
  reducer: {
    languaje, theme
  }
})
