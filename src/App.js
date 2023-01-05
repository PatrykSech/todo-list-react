import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import React, { useState } from "react";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 4, content: "co tam", done: true },
    { id: 5, content: "co tam ziom", done: false },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone = !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  };


  return (
    <main>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
        }
        body={<Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            />
          }
      />
    </main>
  );
};

export default App;
