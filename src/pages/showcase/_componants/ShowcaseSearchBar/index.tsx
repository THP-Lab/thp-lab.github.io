import React from 'react';
import { type ReactNode } from "react";
import { useSearchName } from "../../_utils";
import styles from "./styles.module.css";

export default function ShowcaseSearchBar(): ReactNode {
  const [searchName, setSearchName] = useSearchName();
  return (
    <div className={styles.searchBar}>
      <input
        placeholder="Search for site name..." // Texte statique en remplacement de translate
        value={searchName}
        onInput={(e) => {
          setSearchName(e.currentTarget.value);
        }}
      />
    </div>
  );
}
