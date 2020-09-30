import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";
import Layout from "../../components/layout";
import Highlight from "../../components/project-highlight";

const TextContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 100px;
`;

const HighlightRow = () => {
  const title = "Blackjack";
  const description = `
    For the final project of my Introduction to Programming for Analysts 
    course this past spring, I held a friendly competition to develop a 'bot' 
    to implement the most effective blackjack strategy. As part of the project,
    I developed a work flow to automatically fetch new student submissions, 
    simulate their bot against the dealer, and update a PowerBI leaderboard
    with average hand win/loss percentage and average return on wager.
  `;
  const link = "/projects/blackjack";
  const tags = ['Python', 'Simulation', 'Monte Carlo'];
  const imageData = useStaticQuery(graphql`
    query {
      file: file(relativePath: {eq: "BlackJack.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const alt="Image of the Ace of clubs and the 10 of diamonds";

  return (
    <Highlight
      title={title}
      description={description}
      tags={tags}
      link={link}
      photo={imageData.file.childImageSharp.fluid}
      alt={alt}
    />
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

const ProjectExport = ( {type} ) => {
  switch (type) {
    case "highlight":
      return (<HighlightRow />)
    default:
      return (<Project />)
  }
};

ProjectExport.propTypes = {
  type: PropTypes.oneOf(['project', 'highlight'])
};

ProjectExport.defaultProps = {
  type: 'project'
};

export default ProjectExport;