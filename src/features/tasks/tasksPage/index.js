import Form from "./Form";
import Tasks from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import SectionUpper from "../../../common/SectionUpper";
import Header from "../../../common/Header";

function TasksPage() {
  return (
    <main>
      <Header title="Lista zadań" />
      <SectionUpper
        title="Dodaj nowe zadanie"
        content="Pobierz przykładowe zadania"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        body={<Tasks />}
      />
    </main>
  );
};

export default TasksPage;
