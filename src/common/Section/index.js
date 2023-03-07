import { Wrapper, Body, Tittle, Header, Button  } from "./styled"

const Section = ({title, body, extraHeaderContent, content}) => (
    <Wrapper>
        <Header>
            <Tittle>
                {title}
                <Button>
                    {content}
                </Button>
            </Tittle>
            {extraHeaderContent}
        </Header>
        <Body>
            {body}
        </Body>
    </Wrapper>
);

export default Section; 