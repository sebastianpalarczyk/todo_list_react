import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
          state.hideDone = !state.hideDone;
        },
        setAllDone: ({ tasks }) => {
           tasks.forEach(task => {
               if(!task.done){
                   task.done = true;
               }
           }) 
        }
    },

});

export const { addTask, toggleHideDone, setAllDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;
 