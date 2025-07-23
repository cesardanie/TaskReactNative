// src/types/tasksTypes.ts

export interface Task {
  id: string;
  description: string;
}

export interface TasksState {
  tasks: Task[];
  isLoading: boolean;
}
