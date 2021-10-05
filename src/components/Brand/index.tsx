import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type item = {
  title: string;
  alt: string;
  url: string;
  logo: IconDefinition;
};

export const Brand: React.VFC<{ item: item }> = (props) => {
  return (
    <a
      href={props.item.url}
      className="flex items-center justify-center w-8 h-8 bg-gray-700 dark:bg-gray-100 dark:text-gray-700 text-gray-100 rounded-full overflow-hidden transition-all duration-200 hover:text-opacity-80 cursor-pointer"
      target="_blank"
      rel="noopener noreferrer"
      data-tip={props.item.alt}
      aria-label={props.item.title}
    >
      <FontAwesomeIcon icon={props.item.logo} size="1x" />
    </a>
  );
};
