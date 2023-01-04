import "./style.css"

const Section = ({title, body,
     extraHeaderContent}) => (
    <section className="container--shadow">
        <div className="container__events">
            <div className="container__event">
                <h2 className="header header--secondary">{title}</h2>
                {extraHeaderContent}
            </div>
        </div>
        <div className="container">
            {body}
        </div>
    </section>
);

export default Section; 