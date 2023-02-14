import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({tasks}, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({tasks}, action) => {
            const index = tasks.findIndex(task => task.id === action.payload);
            tasks[index].done = !tasks[index].done;
        }
    }
});

// ukończ wszytskie

export const { addTask, toggleHideDone, toggleTaskDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;

console.log(addTask());