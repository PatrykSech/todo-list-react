import { Wrapper, Body, Tittle, Header  } from "./styled"

const Section = ({title, body, extraHeaderContent}) => (
    <Wrapper>
        <Header>
            <Tittle>
                {title}
            </Tittle>
            {extraHeaderContent}
        </Header>
        <Body>
            {body}
        </Body>
    </Wrapper>
);

export default Section; 