import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from '../features/ToDoSlice';

const store = configureStore({
  reducer: toDoReducer,
  // other middleware or options if needed
});

export default store;
