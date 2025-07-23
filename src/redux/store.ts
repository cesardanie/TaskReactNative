import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

// ✅ Exportar tipos explícitos del estado y dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
