import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Blackjack from "./projects/blackjack";
import D3Exploration from "./projects/d3exploration";


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
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-areas: ". .";
  -ms-grid-columns: 3fr 30px 1fr;
  -ms-grid-rows: auto;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto;
`

const Projects = () => {
  return (
    <Layout>
      <TextContainer>
        <ProjectTable>
          <Blackjack type="text" />
          <Blackjack type="image" />
          <D3Exploration type="text" />
          <D3Exploration type="image" />
        </ProjectTable>
      </TextContainer>
    </Layout>
  )
}

export default Projects;
