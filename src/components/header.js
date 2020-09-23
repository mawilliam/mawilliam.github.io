import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const ListItem = styled.li`
  display: inline-block;
  margin-right: 1rem;
`;

const StyledLink = styled(props => <Link {...props} />)`
  color: black;
  opacity: 0.6;
  text-shadow: none;
  background-image: none;
  text-decoration: underline;
  line-height: 46px;
  height: 46px;
  &:hover {
    opacity: 0.8
  }
`;

const LogoLink = styled(props => <Link {...props} />)`
  z-index: 1;
  color: black;
  display: in-line;
  font-size: 30px;
  line-height: 46px;
  font-weight: 400;
  font-variant: small-caps;
  text-decoration: underline;
  background-image: none;
`;

const StyledURL = styled.a`
text-shadow: none;
background-image: none;
opacity: 0.6;
&:hover {
  opacity: 0.8
}
`;


const ListLink = (props) => (
  <ListItem>
    <StyledLink 
      to={props.to}
      activeStyle={{ opacity: 1, textDecoration: `none` }}
    >
      {props.children}
    </StyledLink>
  </ListItem>
);

const ImgLink = (props) => {
  const data = useStaticQuery(graphql`
    query {
      gitHub: file(relativePath: {eq: "GitHub-Mark-32px.png"}) {
        childImageSharp {
          fixed(width: 15, height: 15) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      linkedIn: file(relativePath: {eq: "LI-In-Bug.png"}) {
        childImageSharp {
          fixed(width: 15, height: 15) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  switch (props.name) {
    case "GitHub":
      return (
        <ListItem>
          <StyledURL href="https://github.com/mawilliam" >
            <Img 
              fixed={data.gitHub.childImageSharp.fixed}
              alt="GitHub Logo linking to personal profile"
            />
          </StyledURL>
        </ListItem>
      )
    case "LinkedIn":
      return (
        <ListItem>
          <StyledURL href="http://linkedin.com/in/markwllms" >
            <Img 
              fixed={data.linkedIn.childImageSharp.fixed}
              alt="LinkedIn Logo linking to personal profile"
            />
          </StyledURL>
        </ListItem>
      )
    default:
        return <Img />
  }
};

const Header = () => {
  return (
    <header style={{ padding: `30px 50px`, alignItems: `center` }}>
      <LogoLink to="/" >
        mark
      </LogoLink>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/projects">Projects</ListLink>
        <ImgLink name="GitHub" />
        <ImgLink name="LinkedIn" />
      </ul>
    </header>
  )
}

export default Header;
