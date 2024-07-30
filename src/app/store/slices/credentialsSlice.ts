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
    setName: (state, payload: PayloadAction<string>) => {
      if (payload.payload) {
        state.value.name = payload.payload
      } else {
        state.value.name = 'Name Surname'
      }
    },
    setNumber: (state, payload: PayloadAction<string>) => {
      if (payload.payload) {
        state.value.number = payload.payload
      } else {
        state.value.number = '0000 0000 0000 0000'
      }
    },
    setMonth: (state, payload: PayloadAction<string>) => {
      if (payload.payload) {
        state.value.month = payload.payload
      } else {
        state.value.month = '00'
      }
    },
    setYear: (state, payload: PayloadAction<string>) => {
      if (payload.payload) {
        state.value.year = payload.payload
      } else {
        state.value.year = '00'
      }
    },
    setCvc: (state, payload: PayloadAction<string>) => {
      if (payload.payload) {
        state.value.cvc = payload.payload
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
