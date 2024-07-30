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
    setNameValidated: (state, payload: PayloadAction<boolean>) => {
      state.value.name = payload.payload
      state.value.notEmptied = true
    },
    setNumberValidated: (state, payload: PayloadAction<boolean>) => {
      state.value.number = payload.payload
      state.value.notEmptied = true
    },
    setMonthValidated: (state, payload: PayloadAction<boolean>) => {
      state.value.month = payload.payload
      state.value.notEmptied = true
    },
    setYearValidated: (state, payload: PayloadAction<boolean>) => {
      state.value.year = payload.payload
      state.value.notEmptied = true
    },
    setCvcValidated: (state, payload: PayloadAction<boolean>) => {
      state.value.cvc = payload.payload
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
