import React from 'react';
import { DiReact,DiJavascript1, DiNodejsSmall } from 'react-icons/di';
import { SiSequelize, SiExpress, SiAzuredevops } from 'react-icons/si';
import { RiVuejsFill } from 'react-icons/ri';
import { FaGitAlt, FaGithub } from 'react-icons/fa';
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
          <FaGitAlt style={{marginLeft: "1rem"}} size="2.7rem" />
          <SiAzuredevops style={{marginLeft: "1.2rem", marginBottom: "0.2rem"}} size="2.2rem"/>
          <FaGithub style={{marginLeft: "1.3rem"}}  size="2.3rem" />
          <br/><br/>
        </picture>
        <ListContainer>
          <ListTitle>General Tech</ListTitle>
          <ListParagraph>
            Git <br/>
            Azure DevOps <br/>
            GitHub
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <picture>
          <DiJavascript1 style={{marginLeft: "1rem"}} size="3rem" />
          <RiVuejsFill style={{marginLeft: "1rem", marginBottom: "0.5rem"}} size="2.3rem"/>
          <DiReact style={{marginLeft: "1rem"}} size="3rem" />
          <br/><br/>
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            JavaScript <br/>
            Vue.js <br/>
            Vuex <br/>
            React.js <br/>
            Redux
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiNodejsSmall style={{marginLeft: "1rem"}} size="3rem" />
          <SiSequelize style={{marginLeft: "1.3rem", marginBottom:"0.2rem"}} size="2.5rem" />
          <SiExpress style={{marginLeft: "1.3rem", marginBottom:"0.2rem"}} size="2.3rem" />
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
    <SectionDivider style={{ marginTop: '-30px' }} colorAlt />
  </Section>
);

export default Technologies;
