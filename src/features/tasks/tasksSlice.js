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
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            tasks.forEach(task => {
                if(task.id === payload){
                    task.done = !task.done;
                }
            }) 
        }
    },

});

export const { addTask, toggleHideDone, setAllDone, toggleTaskDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;
 