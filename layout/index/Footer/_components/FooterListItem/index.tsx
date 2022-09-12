import React from "react";
import styles from "./styles.module.scss";

export interface IFooterListItem {
  title: string;
  href: string;
  [key: string]: string;
}

export const FooterListItem: React.FC<IFooterListItem> = ({
  title,
  ...rest
}) => {
  return (
    <li className={styles.item}>
      <a {...rest} className={styles.link}>
        {title}
      </a>
    </li>
  );
};
