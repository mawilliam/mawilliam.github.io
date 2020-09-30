import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const ProjectRow = styled.div`
  display: -ms-grid;
  display: grid;
  grid-column-gap: 30px;
  grid-template-areas: ". .";
  -ms-grid-columns: 3fr 30px 1fr;
  grid-template-columns: 3fr 1fr;
`;

const ProjectTitle = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 34px;
  font-weight: 600;
  text-transform: none;
`
const ProjectTags = styled.ul`
  list-style: none;
  margin-bottom: 5px;
`

const ProjectTag = styled.li`
  display: inline-block;
  font-size: 12px;
  line-height: 20px;
  opacity: 0.7;
  padding-right: 10px;
  margin-bottom: 0px;
`

const ProjectDescription = styled.p`
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 26px;
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

const Highlight = (props) => {
  const tagItems = props.tags.map((tag) => 
    <ProjectTag>{tag}</ProjectTag>
  )
  return (
    <ProjectRow>
      <div>
        <ProjectTitle>
          {props.title}
        </ProjectTitle>
        <ProjectDescription>
          {props.description}
        </ProjectDescription>
        <ProjectTags>
          {tagItems}
        </ProjectTags>
        <LinkStyle to={props.link} >
          View project&gt;
        </LinkStyle>
      </div>
      <div>
        <Img 
          fluid={props.photo}
          alt={props.alt}
        />
      </div>
    </ProjectRow>
  )
};

export default Highlight;