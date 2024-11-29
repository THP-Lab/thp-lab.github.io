import React from "react";

import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import ShowcaseSearchBar from "./_componants/ShowcaseSearchBar/index";
import ShowcaseCards from "./_componants/ShowcaseCards";
import ShowcaseFilters from "./_componants/ShowcaseFilters";

// Remplacement de translate par du texte statique
const TITLE = "Docusaurus Site Showcase";
const DESCRIPTION = "List of websites people are building with Docusaurus";
const SUBMIT_URL = "https://github.com/facebook/docusaurus/discussions/7826";

function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <p>{DESCRIPTION}</p>
    </section>
  );
}

export default function Showcase(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <ShowcaseFilters />
        <div
          style={{ display: "flex", marginLeft: "auto" }}
          className="container"
        >
          <ShowcaseSearchBar />
        </div>
        <ShowcaseCards />
      </main>
    </Layout>
  );
}
