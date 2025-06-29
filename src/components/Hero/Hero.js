import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        My name is Santiago Serena, I am a software developer and here you will know more about me.
        </SectionText>
        <Button onClick={()=> window.location = 'https://drive.google.com/file/d/1I0fG0tbnD2wDw5-MyIiVYDz1nxt6TD95/view?usp=sharing'}>Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;