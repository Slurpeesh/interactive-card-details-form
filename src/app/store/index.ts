import confirmedReducer from '@/app/store/slices/confirmedSlice'
import credentialsReducer from '@/app/store/slices/credentialsSlice'
import validatedReducer from '@/app/store/slices/validatedSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    credentials: credentialsReducer,
    confirmed: confirmedReducer,
    validated: validatedReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
