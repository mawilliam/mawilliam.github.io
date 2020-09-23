import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const TextContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
`

const About = () => {
  return (
    <Layout>
      <TextContainer>
        <h4>About me...</h4>
      </TextContainer>
    </Layout>
  )
}

export default About;
