import React from "react";
import styles from "./styles.module.scss";

const NAVIGATION_MENU_ITEMS: INavigationMenuItem[] = [
  { label: "About  contours" },
  { label: "Your benefits" },
  { label: "Popular tours" },
  { label: "Stories" },
  { label: "Buy now" },
];

interface INavigationMenuItem {
  label: string;
  href?: string;
}
interface INavigationMenuProps {
  items: INavigationMenuItem[];
}

export const NavigationMenu: React.FC<INavigationMenuProps> = ({ items }) => {
  return (
    <nav className={styles.nav}>
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
