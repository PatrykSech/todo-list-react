import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
    {id: 4, content: "co tam", done: true}
];

const hideDoneTasks = false;

function App() {
  return (
    <main>
        <Header title="Lista zadań"/>
        <Section
            title="Dodaj nowe zadanie"
            body={<Form />}
        />
        <Section
            title="Lista zadań"
            extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
            body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        />  
    </main>
  );
};

export default App;
