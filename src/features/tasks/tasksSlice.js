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
        },
        removeTask: ({tasks}, {payload}) => {
            tasks.forEach(task => {
                if(task.id === payload){
                    const index = tasks.indexOf(task);
                    tasks.splice(index, 1);
                }
            })
        },
        fetchExampleTasks: () => {},
        setTasks: (state, {payload: tasks}) => {
            state.tasks = tasks;
        },
    },

});

export const { addTask, 
                toggleHideDone,
                 setAllDone,
                 toggleTaskDone,
                  removeTask,
                  fetchExampleTasks, 
                  setTasks,
            } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;
 