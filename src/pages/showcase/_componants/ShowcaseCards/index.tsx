import React from 'react'
import type { ReactNode } from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import { sortedProjects, type Project } from "../../../../data/projects";
import Heading from "@theme/Heading";
import FavoriteIcon from "../FavoriteIcon";
import ShowcaseCard from "../ShowcaseCard";
import { useFilteredProjects } from "../../_utils";

import styles from "./styles.module.css";

const favoriteProjects = sortedProjects.filter((project) =>
  project.tags.includes("favorite")
);

const otherProjects = sortedProjects.filter(
  (project) => !project.tags.includes("favorite")
);

function HeadingNoResult() {
  return (
    <Heading as="h2">
      <Translate id="showcase.projectsList.noResult">No result</Translate>
    </Heading>
  );
}

function HeadingFavorites() {
  return (
    <Heading as="h2" className={styles.headingFavorites}>
      <Translate id="showcase.favoritesList.title">Our favorites</Translate>
      <FavoriteIcon size="large" style={{ marginLeft: "1rem" }} />
    </Heading>
  );
}

function HeadingAllSites() {
  return (
    <Heading as="h2">
      <Translate id="showcase.projectsList.allProjects">All projects</Translate>
    </Heading>
  );
}

function CardList({ heading, items }: { heading?: ReactNode; items: Project[] }) {
  return (
    <div className="container">
      {heading}
      <ul className={clsx("clean-list", styles.cardList)}>
        {items.map((item) => (
          <ShowcaseCard key={item.title} project={item} />
        ))}
      </ul>
    </div>
  );
}

function NoResultSection() {
  return (
    <section className="margin-top--lg margin-bottom--xl">
      <div className="container padding-vert--md text--center">
        <HeadingNoResult />
      </div>
    </section>
  );
}

export default function ShowcaseCards() {
  const filteredProjects = useFilteredProjects();

  if (filteredProjects.length === 0) {
    return <NoResultSection />;
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      {filteredProjects.length === sortedProjects.length ? (
        <>
          <div className={styles.showcaseFavorite}>
            <CardList heading={<HeadingFavorites />} items={favoriteProjects} />
          </div>
          <div className="margin-top--lg">
            <CardList heading={<HeadingAllSites />} items={otherProjects} />
          </div>
        </>
      ) : (
        <CardList items={filteredProjects} />
      )}
    </section>
  );
}
