import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import Layout from "../../components/layout";
import styled from "styled-components";

const TextContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 100px;
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

const Highlight = () => (
  <div>
    <ProjectTitle>
      Baby Names
    </ProjectTitle>
    <ProjectDescription>
      I am learning D3 and visualization in JavaScript so that I do not need to rely on viewers to have
      any software besides a modern web browser. This project is using the Baby Names data set to learn
      D3 and Observable.
    </ProjectDescription>
    <ProjectTags>
      <ProjectTag>D3 </ProjectTag>
      <ProjectTag>Plotly </ProjectTag>
      <ProjectTag>Visualization</ProjectTag>
    </ProjectTags>
    <LinkStyle to="/projects/d3exploration/" >
      View project&gt;
    </LinkStyle>
  </div>
);

const HighlightImg = () => {
  const imageData = useStaticQuery(graphql`
    query {
      baby: file(relativePath: {eq: "D3Explore.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div >
      <Img 
        fluid={imageData.baby.childImageSharp.fluid}
        alt="Image of a line chart showing the popularity of the name 'Mark' in the U.S. over time"
      />
    </div>
  )
}

const Project = () => {

  return (
    <Layout>
      <TextContainer>
        <h2>Interactive Chart made in Observable</h2>
        <p>
          I am learning D3 and visualization in JavaScript so that I do not need to rely on viewers to have
          Python or any other software besides a modern web browser. Observable is a really useful tool to
          create data visualizations and to be able to embed all or part of an Observable notebook in your
          own web page.
        </p>
        <p>
          Below is an interactive chart I made using data the Baby Names data that the Social Security
          Administration publishes each year. It contains the number of babies with a given name for each
          gender in a calendar year. There is data all the way back to 1880. There are nearly 2 million rows
          in the data set. Try exploring the naming trends by typing different names in the box below. 
          Enjoy!
        </p>
      </TextContainer>
    </Layout>
  )
};

const D3Exploration = ( {type} ) => {
  switch (type) {
    case "text":
      console.log('here')
      console.log(type)
      return (<Highlight />)
    case "image":
      console.log('here image')
      console.log(type)
      return (<HighlightImg />)
    default:
      return (<Project />)
  }
};

D3Exploration.propTypes = {
  type: PropTypes.oneOf(['project', 'text', 'image'])
};

D3Exploration.defaultProps = {
  type: 'project'
};

export default D3Exploration;