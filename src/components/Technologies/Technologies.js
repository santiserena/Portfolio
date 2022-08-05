import React from 'react';
import { DiFirebase, DiReact,  DiPostgresql,DiJavascript1, DiNodejsSmall } from 'react-icons/di';
import {SiRedux, SiSequelize, SiExpress} from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked  from client to server, with many technologies in the web development world,  some of them are:
    </SectionText>
    <List>

      <ListItem>
        <picture>
          <DiJavascript1 style={{marginLeft: "1rem"}} size="3rem"></DiJavascript1>
          <DiReact style={{marginLeft: "1rem"}} size="3rem" />
          <SiRedux style={{marginLeft: "1.5rem", marginBottom: "0.5rem"}} size="2rem"/>
          <br/><br/>
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            JavaScript <br/>
            React.js <br/>
            Redux
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiNodejsSmall style={{marginLeft: "1rem"}} size="3rem" />
          <SiSequelize style={{marginLeft: "1.3rem", marginBottom:"0.2rem"}} size="2.5rem" />
          <SiExpress style={{marginLeft: "1.7rem", marginBottom:"0.2rem"}} size="2.5rem" />
          <br/><br/>
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.Js <br/>
            Express <br/>
            Sequelize
          </ListParagraph>
        </ListContainer>
      </ListItem>


    </List>
      <br/><br/><br/>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
