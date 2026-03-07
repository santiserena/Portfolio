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
        My name is Santiago Serena, a frontend developer focused on building scalable web applications using modern JavaScript frameworks such as React and Vue. Here you can explore some of my projects and learn more about my work.
        </SectionText>
        <Button onClick={()=> window.location = 'https://drive.google.com/file/d/1IXjXiNilldKRnUeYU4KGmkzoTiEMyEZt/view?usp=drive_link'}>Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;