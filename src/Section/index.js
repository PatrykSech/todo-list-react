import { SectionContainer, SectionBody, SectionHeader, SectionContents  } from "./styled"

const Section = ({title, body, extraHeaderContent}) => (
    <SectionContainer>
        <SectionContents>
            <SectionHeader>
                {title}
            </SectionHeader>
            {extraHeaderContent}
        </SectionContents>
        <SectionBody>
            {body}
        </SectionBody>
    </SectionContainer>
);

export default Section; 