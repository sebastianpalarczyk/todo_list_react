export const getExampleTasks = async () => {
   const response = await fetch("/todo_list_react/exampleTasks.json");

   if(!response.ok){
       new Error(response.statusText);
   }

   return await response.json();
};