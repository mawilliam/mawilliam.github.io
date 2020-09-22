import React from "react";
import styled from "styled-components";

const WorkTable = styled.div`
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-row-gap: 16px;
  grid-column-gap: 16px;

  margin-bottom: 140px;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-areas: ". . . .";
  -ms-grid-columns: 1fr 30px 1fr 30px 1fr 30px 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}
`

const WorkCell = styled.div`
  margin-bottom: 40px;
`

const OrgName = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 34px;
  font-weight: 400;
  text-transform: none;
`

const PositionTitle = styled.div`
  opacity: 0.6;
  margin-bottom: 10px;
`

const PositionTime = styled.div`
  opacity: 0.7;
  margin-bottom: 10px;
  line-height: 20px;
  font-size: 12px;
  vertical-align: text-bottom;
`

const Experience = () => (
  <div>
    <h2>My experience</h2>
    <p>
      I spent eight years in the Air Force as an Operations Research Analyst. 
      My background has mainly been in scheduling and logistics, but I am excited about applying
      algorithmic and data-driven solutions to a variety of problems.
    </p>
    <WorkTable>
      <WorkCell>
        <OrgName>MIT Lincoln Laboratory</OrgName>
        <PositionTitle>Military Fellow</PositionTitle><br />
        <PositionTime>July 2012 - June 2014</PositionTime>
      </WorkCell>
      <WorkCell>
        <OrgName>Air Mobility Command</OrgName>
        <PositionTitle>Operations Research Analyst</PositionTitle>
        <PositionTime>July 2014 - June 2017</PositionTime>
      </WorkCell>
      <WorkCell>
        <OrgName>US Air Force Academy</OrgName>
        <PositionTitle>Instructor of Computer Science</PositionTitle>
        <PositionTime>July 2017 - June 2020</PositionTime>
      </WorkCell>
      <WorkCell>
        <OrgName>Self-employed</OrgName>
        <PositionTitle>Consultant</PositionTitle><br />
        <PositionTime>July 2020 - present</PositionTime>
      </WorkCell>
    </WorkTable>
  </div>
);

export default Experience;