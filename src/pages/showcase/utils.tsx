import { useCallback, useMemo } from "react";
import { translate } from "@docusaurus/Translate";
import {
  usePluralForm,
  useQueryString,
  useQueryStringList,
} from "@docusaurus/theme-common";
import type { TagType, Project } from "../../data/projects";
import { sortedProjects } from "../../data/projects";

export function useSearchName() {
  return useQueryString("name");
}

export function useTags() {
  return useQueryStringList("tags");
}

type Operator = "OR" | "AND";

export function useOperator() {
  const [searchOperator, setSearchOperator] = useQueryString("operator");
  const operator: Operator = searchOperator === "AND" ? "AND" : "OR";
  const toggleOperator = useCallback(() => {
    const newOperator = operator === "OR" ? "AND" : null;
    setSearchOperator(newOperator);
  }, [operator, setSearchOperator]);
  return [operator, toggleOperator] as const;
}

function filterProjects({
  projects,
  tags,
  operator,
  searchName,
}: {
  projects: Project[];
  tags: TagType[];
  operator: Operator;
  searchName: string | null;
}) {
  if (searchName) {
    // eslint-disable-next-line no-param-reassign
    projects = projects.filter((project) =>
      project.title.toLowerCase().includes(searchName.toLowerCase())
    );
  }
  if (tags.length === 0) {
    return projects;
  }
  return projects.filter((project) => {
    if (project.tags.length === 0) {
      return false;
    }
    if (operator === "AND") {
      return tags.every((tag) => project.tags.includes(tag));
    }
    return tags.some((tag) => project.tags.includes(tag));
  });
}

export function useFilteredProjects() {
  const [tags] = useTags();
  const [searchName] = useSearchName();
  const [operator] = useOperator();
  return useMemo(
    () =>
      filterProjects({
        projects: sortedProjects,
        tags: tags as TagType[],
        operator,
        searchName,
      }),
    [tags, operator, searchName]
  );
}

export function useSiteCountPlural() {
  const { selectMessage } = usePluralForm();
  return (sitesCount: number) =>
    selectMessage(
      sitesCount,
      translate(
        {
          id: "showcase.filters.resultCount",
          description:
            'Pluralized label for the number of sites found on the showcase. Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: "1 site|{sitesCount} sites",
        },
        { sitesCount }
      )
    );
}
