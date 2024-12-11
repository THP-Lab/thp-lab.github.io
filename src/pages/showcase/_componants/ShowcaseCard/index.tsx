import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import { Tags, TagList, type TagType, type Project } from "../../../../data/projects";
import { sortBy } from "../../../../utils/jsUtils";
import Heading from "@theme/Heading";
import Image from "@theme/IdealImage";
import FavoriteIcon from "../FavoriteIcon";
import styles from "./styles.module.css";

function TagItem({
  label,
  description,
  color,
}: {
  label: string;
  description: string;
  color: string;
}) {
  return (
    <li className={styles.tag} title={description}>
      <span className={styles.textLabel}>{label.toLowerCase()}</span>
      <span className={styles.colorLabel} style={{ backgroundColor: color }} />
    </li>
  );
}

function ShowcaseCardTag({ tags }: { tags: TagType[] }) {
  const tagObjects = tags.map((tag) => ({ tag, ...Tags[tag] }));

  // Keep same order for all tags
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag)
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        return <TagItem key={index} {...tagObject} />;
      })}
    </>
  );
}

function getCardImage(project: Project): string {
  return (
    project.preview ??
    // TODO make it configurable
    `https://slorber-api-screenshot.netlify.app/${encodeURIComponent(
      project.website
    )}/showcase`
  );
}

function ShowcaseCard({ project }: { project: Project }) {
  const image = getCardImage(project);
  return (
    <li key={project.title} className="card shadow--md">
      <div className={clsx("card__image", styles.showcaseCardImage)}>
      <Image img={image} alt={project.title} />
      </div>
      <div className="card__body">
        <div className={clsx(styles.showcaseCardHeader)}>
          <Heading as="h4" className={styles.showcaseCardTitle}>
            <Link href={project.website} className={styles.showcaseCardLink}>
              {project.title}
            </Link>
          </Heading>
          {project.tags.includes("favorite") && (
            <FavoriteIcon size="medium" style={{ marginRight: "0.25rem" }} />
          )}
          {project.source && (
            <Link
              href={project.source}
              className={clsx(
                "button button--secondary button--sm",
                styles.showcaseCardSrcBtn
              )}
            >
              <Translate id="showcase.card.sourceLink">source</Translate>
            </Link>
          )}
        </div>
        <p className={styles.showcaseCardBody}>{project.description}</p>
      </div>
      <ul className={clsx("card__footer", styles.cardFooter)}>
        <ShowcaseCardTag tags={project.tags} />
      </ul>
    </li>
  );
}

export default React.memo(ShowcaseCard);
