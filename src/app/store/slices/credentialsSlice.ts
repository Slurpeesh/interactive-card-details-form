import { RootState } from '@/app/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICredentialsData {
  name: string
  number: string
  month: string
  year: string
  cvc: string
}

export interface ICredentialsSlice {
  value: ICredentialsData
}

const initialState: ICredentialsSlice = {
  value: {
    name: 'Jane Appleseed',
    number: '0000 0000 0000 0000',
    month: '00',
    year: '00',
    cvc: '123',
  },
}

export const credentialsSlice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.value.name = action.payload
      } else {
        state.value.name = 'Name Surname'
      }
    },
    setNumber: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.value.number = action.payload
      } else {
        state.value.number = '0000 0000 0000 0000'
      }
    },
    setMonth: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.value.month = action.payload
      } else {
        state.value.month = '00'
      }
    },
    setYear: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.value.year = action.payload
      } else {
        state.value.year = '00'
      }
    },
    setCvc: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.value.cvc = action.payload
      } else {
        state.value.cvc = '000'
      }
    },
    setInitCredentials: (state) => {
      state.value.cvc = '000'
      state.value.month = '00'
      state.value.year = '00'
      state.value.name = 'Jane Appleseed'
      state.value.number = '0000 0000 0000 0000'
    },
  },
})

export const {
  setName,
  setNumber,
  setMonth,
  setYear,
  setCvc,
  setInitCredentials,
} = credentialsSlice.actions
export const selectCredentials = (state: RootState) => state.credentials.value
export default credentialsSlice.reducer
