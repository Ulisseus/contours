import React from "react";
import styles from "./styles.module.scss";

export interface INavigationMenuItem {
  label: string;
  href?: string;
}
interface INavigationMenuProps {
  items: INavigationMenuItem[];
}

export const NavigationMenu: React.FC<INavigationMenuProps> = ({ items }) => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li className={styles.item}>
            <a href={item.href || "#"} className={styles.link}>
              <span>{`0${i + 1}`}</span> {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
