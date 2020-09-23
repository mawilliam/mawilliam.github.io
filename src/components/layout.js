import React from "react";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";

const Section = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;

const Layout = ({ children }) => {
  return (
    <Section>
      <Header />
      {children}
      <Footer />
    </Section>
  )
};

export default Layout;