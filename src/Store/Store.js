import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Reducers/counterSlice.js'




export default configureStore({
  reducer: {
    counter: counterReducer,
  }
})