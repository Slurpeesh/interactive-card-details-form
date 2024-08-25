import { RootState } from '@/app/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IValidatedData {
  name: boolean
  number: boolean
  month: boolean
  year: boolean
  cvc: boolean
  notEmptied: boolean
}

export interface IValidatedSlice {
  value: IValidatedData
}

const initialState: IValidatedSlice = {
  value: {
    name: true,
    number: true,
    month: true,
    year: true,
    cvc: true,
    notEmptied: false,
  },
}

export const validatedSlice = createSlice({
  name: 'validated',
  initialState,
  reducers: {
    setNameValidated: (state, action: PayloadAction<boolean>) => {
      state.value.name = action.payload
      state.value.notEmptied = true
    },
    setNumberValidated: (state, action: PayloadAction<boolean>) => {
      state.value.number = action.payload
      state.value.notEmptied = true
    },
    setMonthValidated: (state, action: PayloadAction<boolean>) => {
      state.value.month = action.payload
      state.value.notEmptied = true
    },
    setYearValidated: (state, action: PayloadAction<boolean>) => {
      state.value.year = action.payload
      state.value.notEmptied = true
    },
    setCvcValidated: (state, action: PayloadAction<boolean>) => {
      state.value.cvc = action.payload
      state.value.notEmptied = true
    },
    setInitValidated: (state) => {
      state.value.notEmptied = false
    },
  },
})

export const {
  setNameValidated,
  setNumberValidated,
  setMonthValidated,
  setYearValidated,
  setCvcValidated,
  setInitValidated,
} = validatedSlice.actions
export const selectCredentials = (state: RootState) => state.validated.value
export default validatedSlice.reducer
