import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import {default as USAFAnext} from "../pages/projects/usafa";
import {default as Blackjack} from "../pages/projects/blackjack";
import {default as D3Exploration} from "./projects/d3exploration";


const TextContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
`;

const ProjectTable = styled.div`
  display: -ms-grid;
  display: grid;
  margin-bottom: 140px;
  grid-row-gap: 30px;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
`

const Projects = () => {
  return (
    <Layout>
      <TextContainer>
        <ProjectTable>
          <USAFAnext type="highlight" />
          <Blackjack type="highlight" />
          <D3Exploration type="highlight" />
        </ProjectTable>
      </TextContainer>
    </Layout>
  )
}

export default Projects;
