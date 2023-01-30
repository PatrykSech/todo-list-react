import { useState, useEffect } from "react";

export const useTasks = () => {
    const [hideDone, setHideDone] = useState(false);

    const localStorageTasks = localStorage.getItem("tasks")
    const [tasks, setTasks] = useState(localStorageTasks ? JSON.parse(localStorageTasks) : [])
  
   
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);
    
    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
      };
      
      const setTasksDone = () => {
        setTasks(tasks => tasks.map((task) => ({
          ...task,
          done: true,
        })));
      };
    
      const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id))
      };
    
      const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
          if (task.id === id) {
            return { ...task, done: !task.done }
          }
    
          return task;
        }));
      };
    
      const addNewTask = (content) => {
      setTasks(tasks => [
            ...tasks,
            {
              content,
              done: false,
              id: tasks.length ? tasks[tasks.length -1].id + 1 : 1,
            },
        ]);
      };

      return {tasks, toggleHideDone, setTasksDone, removeTask, toggleTaskDone, addNewTask, hideDone}
};