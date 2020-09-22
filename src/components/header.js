import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} style={{ color: `black`, textShadow: `none`, backgroundImage: `none` }}>{props.children}</Link>
  </li>
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
        <li style={{ display: `inline-block`, marginRight: `1rem`}}>
          <a href="https://github.com/mawilliam" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <Img 
              fixed={data.gitHub.childImageSharp.fixed}
              alt="GitHub Logo linking to personal profile"
            />
          </a>
        
        </li>
      )
    case "LinkedIn":
      return (
        <li style={{ display: `inline-block`, marginRight: `1rem`}}>
          <a href="http://linkedin.com/in/markwllms" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <Img 
              fixed={data.linkedIn.childImageSharp.fixed}
              alt="LinkedIn Logo linking to personal profile"
            />
          </a>
        
        </li>
      )
    default:
        return <Img />
  }
};
const Header = () => {
  return (
    <header style={{ marginBottom: `1.5 rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline`, fontVariant: `small-caps`, textDecoration: `underline` }}>mark</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/projects/">Projects</ListLink>
        <ImgLink name="GitHub" />
        <ImgLink name="LinkedIn" />
      </ul>
    </header>
  )
}

export default Header;
