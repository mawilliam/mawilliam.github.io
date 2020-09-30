import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import {default as USAFAnext} from "../pages/projects/usafa";
import {default as Blackjack} from "../pages/projects/blackjack";

const TextContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 100px;
`;

const ProjectTable = styled.div`
  display: -ms-grid;
  display: grid;
  margin-bottom: 40px;
  grid-row-gap: 30px;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
`

const LinkStyle = styled(props => <Link {...props} />)`
  display: block;
  -webkit-transition: opacity 200ms ease;
  transition: opacity 200ms ease;
  color: #1a1b1f;
  text-decoration: underline;
  margin-bottom: 10px;
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  background-image: none;
  &:hover {
    opacity: 0.8
  };
`

const Highlight = () => (
  <TextContainer>
    <h2>Selected Projects</h2>
    <ProjectTable>
      <USAFAnext type="highlight" />
      <Blackjack type="highlight" />
    </ProjectTable>
    <LinkStyle to="/projects/">Explore all of my projects&gt;</LinkStyle>
  </TextContainer>
);

export default Highlight;