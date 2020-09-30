import React from "react";
import Layout from "../components/layout";
import Intro from "../components/intro";
import Highlight from "../components/project-index";
import Experience from "../components/experience";

const Home = () => {
  return (
    <Layout>
      <Intro />
      <Highlight />
      <Experience />
    </Layout>
  )
};

export default Home;
