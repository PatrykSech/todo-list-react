import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import React, { useState, useEffect } from "react";

function App() {
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
    tasks = tasks.map((task) => ({
      ...task,
      done: true,
    }));
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

  return (
    <main>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setTasksDone={setTasksDone}
          />
        }
        body={<Tasks
          tasks={tasks}
          hideDone={hideDone}
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone}
        />
        }
      />
    </main>
  );
};

export default App;
