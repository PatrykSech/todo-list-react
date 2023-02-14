import Form from "./Form";
import Tasks from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { useTasks } from "../../useTasks";
import { useSelector } from "react-redux";
import { selectTasks } from "./taskSlice";

function App() {
  const { tasks } = useSelector(selectTasks);

  const {
    // tasks,
    hideDone,
    toggleHideDone,
    setTasksDone,
    removeTask,
    toggleTaskDone,
    addNewTask,
  } = useTasks();

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
            setTasksDone={setTasksDone}
          />
        }
        body={<Tasks
          removeTask={removeTask}
        />
        }
      />
    </main>
  );
};

export default App;
