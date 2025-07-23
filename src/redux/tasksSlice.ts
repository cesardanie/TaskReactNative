// src/redux/tasksSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TasksState } from '../types/tasksTypes';

const initialState: TasksState = {
  tasks: [],
  isLoading: false,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    finishLoading(state) {
      state.isLoading = false;
    },
    addTask(state, action: PayloadAction<string>) {
      state.tasks.push({
        id: Date.now().toString(),
        description: action.payload,
      });
    },
    removeTask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, removeTask, startLoading, finishLoading } = tasksSlice.actions;

export default tasksSlice.reducer;
