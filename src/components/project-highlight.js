import React from "react";
import styled from "styled-components";
import Blackjack from "../pages/projects/blackjack";

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
  margin-bottom: 140px;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-areas: ". .";
  -ms-grid-columns: 3fr 30px 1fr;
  -ms-grid-rows: auto;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto;
`;

const Highlight = () => (
  <div>
    <h2>Selected Projects</h2>
    <TextContainer>
      <ProjectTable>
        <Blackjack type="text" />
        <Blackjack type="image" />
      </ProjectTable>
    </TextContainer>
  </div>
);

export default Highlight;