import React from "react";
import styles from "./styles.module.scss";
import {
  INavigationMenuItem,
  NavigationMenu,
} from "./_components/NavigationMenu";

const NAVIGATION_MENU_ITEMS: INavigationMenuItem[] = [
  { label: "About  contours" },
  { label: "Your benefits" },
  { label: "Popular tours" },
  { label: "Stories" },
  { label: "Buy now" },
];

export const Navigation: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <input type="checkbox" id="nav-checkbox" className={styles.checkbox} />
      <label htmlFor="nav-checkbox" className={styles.label}>
        Label
      </label>
      <div className={styles.background}></div>
      <NavigationMenu items={NAVIGATION_MENU_ITEMS} />
    </div>
  );
};
