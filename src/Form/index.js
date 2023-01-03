import "./style.css";

const Form = (props) => (
    <form className="tasks__form">
        <input className="tasks__input" placeholder="Co jest do zrobienia?"/>
        <button className="tasks__button">Dodaj zadanie</button>
    </form>
);  

export default Form;