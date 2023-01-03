import "./style.css"

const Section = ({title, body, extraHeaderContent}) => (
    <>
    <div className="div">
        <section className="container__events">
            <div className="container__event">
                <h2 className="header header--secondary">{title}</h2>
                {extraHeaderContent}
            </div>
        </section>
        <section className="container">
            {body}
        </section>
    </div>
    </>
);

export default Section; 