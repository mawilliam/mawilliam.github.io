import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import PropTypes from "prop-types";
import Layout from "../../components/layout";

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
      Blackjack
    </ProjectTitle>
    <ProjectDescription>
      For the final project of my Introduction to Programming for Analysts 
      course this past spring, I held a friendly competition to develop a 'bot' 
      to implement the most effective blackjack strategy. As part of the project,
      I developed a work flow to automatically fetch new student submissions, 
      simulate their bot against the dealer, and update a PowerBI leaderboard
      with average hand win/loss percentage and average return on wager.
    </ProjectDescription>
    <ProjectTags>
      <ProjectTag>Python </ProjectTag>
      <ProjectTag>Simulation </ProjectTag>
      <ProjectTag>Monte Carlo</ProjectTag>
    </ProjectTags>
    <LinkStyle to="/projects/blackjack/" >
      View project&gt;
    </LinkStyle>
  </div>
);

const HighlightImg = () => {
  const imageData = useStaticQuery(graphql`
    query {
      blackjack: file(relativePath: {eq: "BlackJack.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <Img 
        fluid={imageData.blackjack.childImageSharp.fluid}
        alt="Image of the Ace of clubs and the 10 of diamonds"
      />
    </div>
  )
}

const Project = () => {
  return (
    <Layout>
      <TextContainer>
        Test
      </TextContainer>
    </Layout>
  )
};

const Blackjack = ( {type} ) => {
  switch (type) {
    case "text":
      return (<Highlight />)
    case "image":
      return (<HighlightImg />)
    default:
      return (<Project />)
  }
};

Blackjack.propTypes = {
  type: PropTypes.oneOf(['project', 'text', 'image'])
};

Blackjack.defaultProps = {
  type: 'project'
};

export default Blackjack;