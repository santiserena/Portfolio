import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          marginBottom: "20px",
        }}
      >
        <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects" passHref>
          <NavLink as="span">Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" passHref>
          <NavLink as="span">Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" passHref>
          <NavLink as="span">About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons
        href="https://github.com/santiserena"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/santiagoserena/?locale=en_US"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;