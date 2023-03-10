import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import favReducer from '../features/favorites/favSlice'
import searchReducer from '../features/search/searchSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favReducer,
    search: searchReducer
  },
})