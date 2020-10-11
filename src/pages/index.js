import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/home/hero";

const IndexPage = () => (
  <Layout>
    <SEO title="Anasayfa" />
    <Hero />
  </Layout>
);

export default IndexPage;
