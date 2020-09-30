import React from "react";
import styled from "styled-components";

const TextContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px;
  margin-bottom: 140px;
`;

const NameText = styled.div`
  font-size: 20px;
  line-height: 34px;
  font-weight: 400;
`

const MotivationText = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 40px;
  line-height: 52px;
  text-transform: none;
`
const Intro = () => (
  <TextContainer>
    <NameText>Mark Williams</NameText>
    <p style={{ opacity: 0.6 }}>Analytics Professional</p>
    <MotivationText>Hello. I'm a data and analytics professional from 
      upstate New York. I am learning about web programming to better 
      understand the entire solution pipeline and thought it would be 
      fun to build a personal portfolio highlighting some of my projects.
    </MotivationText>
  </TextContainer>
);

export default Intro;