import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        loading: false,
    },
    reducers: {
        addTask: ({tasks}, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({tasks}, {payload}) => {
            const index = tasks.findIndex(task => task.id === payload);
            tasks[index].done = !tasks[index].done;
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
        removeTask: ({tasks}, {payload}) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks.splice(index, 1)
        },
        fetchExampleTasks: (state) => {
            state.loading = true;
        },
        fetchExampleTasksSuccess: (state, {payload: tasks}) => {
            state.tasks = tasks;
            state.loading = false;
        },
        fetchExampleTasksError: (state) => {
            state.loading = false
        },      
    }
});

export const { addTask, toggleHideDone, toggleTaskDone, setAllDone, removeTask, fetchExampleTasks, fetchExampleTasksSuccess, fetchExampleTasksError} = tasksSlice.actions;
export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const getTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);
export const selectLoading = state => selectTasksState(state).loading;

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if(!query || query.trim() === ""){
        return tasks;
    }

    return tasks.filter(({content}) => content.toUpperCase().includes(query.trim().toUpperCase()));
}

export default tasksSlice.reducer;