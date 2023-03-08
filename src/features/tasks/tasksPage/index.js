import Form from "./Form";
import Tasks from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import SectionUpper from "../../../common/SectionUpper";
import Header from "../../../common/Header";
import Search from "./Search";
import { Main } from "../../../styled";

function TasksPage() {
  return (
    <Main>
      <Header title="Lista zadań" />
      <SectionUpper
        title="Dodaj nowe zadanie"
        content="Pobierz przykładowe zadania"
        body={<Form />}
      />

      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />
      
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        body={<Tasks />}
      />
    </Main>
  );
};

export default TasksPage;
