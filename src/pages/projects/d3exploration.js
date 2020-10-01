import React, { useEffect, useRef } from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@mawilliam/baby-names";
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
  const title = "Baby Names";
  const description = `
    I am learning D3 and visualization in JavaScript so that I do not need to rely on viewers to have
    any software besides a modern web browser. This project is using the Baby Names data set to learn
    D3 and Observable.
  `;
  const link = "/projects/d3exploration";
  const tags = ["JavaScript", "D3", "Plotly", "Observable", "Visualization"];
  const imageData = useStaticQuery(graphql`
    query {
      file: file(relativePath: {eq: "D3Explore.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const alt="Image of a line chart showing the popularity of the name 'Mark' in the U.S. over time";

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
  const chartRef = useRef();
  const nameRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, cellName => {
      if (cellName === "viewof name") {
        return new Inspector(nameRef.current)
      }
      if (cellName === "name_chart") {
        return new Inspector(chartRef.current)
      }
    })
  }, []); // only do this on initial load

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
          Below is an interactive chart I made using the Plotly library and the Baby Names data that the 
          Social Security
          Administration publishes each year. It contains the number of babies with a given name for each
          gender in a calendar year. There is data all the way back to 1880. There are nearly 2 million rows
          in the data set. Try exploring the naming trends by typing different names in the box below. 
          Enjoy!
        </p>
        <div className="observablehq">
          <div ref={nameRef}></div>
          <div ref={chartRef}></div>
        </div>
        <p>
          Feel free to check out more from my <a href="https://observablehq.com/@mawilliam/baby-names">Observable Notebook</a>.
        </p>
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