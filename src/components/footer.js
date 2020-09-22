import React from "react";

const Footer = () => {
  return (
    <div style={{
      paddingTop: `20px`,
      paddingBottom: `20px`,
      paddingLeft: `80px`,
      paddingRight: `80px`,
      backgroundColor: `#f4f4f4`
    }}>
      <h2>Contact me</h2>
      <p>Please feel free to send me a message if you would like to collaborate, have a question, or would like to connect.</p>
      <p style={{ textIndent: `50px` }}>
        <a href="mailto:mwill12@alum.mit.edu" style={{ color: `black`, textShadow: `none`, backgroundImage: `none`}}>
          mwill12@alum.mit.edu
        </a>
      </p>
    </div>
  )
}

export default Footer;
