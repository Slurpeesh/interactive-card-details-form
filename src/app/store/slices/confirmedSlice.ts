import { RootState } from '@/app/store'
import { createSlice } from '@reduxjs/toolkit'

export interface IConfirmedSlice {
  value: boolean
}

const initialState: IConfirmedSlice = {
  value: false,
}

export const confirmedSlice = createSlice({
  name: 'confirmed',
  initialState,
  reducers: {
    setConfirmed: (state) => {
      state.value = true
    },
    setNotConfirmed: (state) => {
      state.value = false
    },
  },
})

export const { setConfirmed, setNotConfirmed } = confirmedSlice.actions
export const selectConfirmed = (state: RootState) => state.confirmed.value
export default confirmedSlice.reducer
