import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import Hero from "../components/home/hero";

const IndexPage = () => (
  <Layout>
    <SEO title="Anasayfa" />
    <Hero />
  </Layout>
);

export default IndexPage;
