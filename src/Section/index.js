import { Container, Render, Header, Event  } from "./styled"

const Section = ({title, body,
     extraHeaderContent}) => (
    <Container>
        <Event>
            <Header>
                {title}
            </Header>
            {extraHeaderContent}
        </Event>
        <Render>
            {body}
        </Render>
    </Container>
);

export default Section; 