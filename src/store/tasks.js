import { create } from "zustand";

export const taskStore = create((set) => ({
  tasks: [],
  setTasks: (tasks) => set((state) => ({ tasks: [...state.tasks, ...tasks] })),
}));
