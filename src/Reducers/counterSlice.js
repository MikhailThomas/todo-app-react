import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    AddTask: (state, action) => {
      state.value.push(action.payload)
    },
    DeleteTask: (state, action) => {
      state.value.splice(action.payload, 1)
    },
    onToggle: (state) => {
        state.value = state.value - 1
      },
  },
})
export const { AddTask, DeleteTask, onToggle } = tasksSlice.actions
export const select = (state) => state.tasks.value
export default tasksSlice.reducer