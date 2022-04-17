import React from "react";
import styles from "./styles.module.scss";
import { FooterListItem, IFooterListItem } from "./_components/FooterListItem";
import cn from "classnames";

const FOOTER_NAVIGATION_LINKS: IFooterListItem[] = [
  {
    title: "Company",
    href: "#",
  },
  {
    title: "Contact us",
    href: "#",
  },
  {
    title: "Careers",
    href: "#",
  },
  {
    title: "Privacy",
    href: "#",
  },
  {
    title: "Terms",
    href: "#",
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoBox}>
        <img src="/logo-green-2x.png" alt="logo" className={styles.logo} />
      </div>
      <div className={cn(styles.info, "d-flex")}>
        <div className="col-6">
          <div className={styles.navigation}>
            <ul className={styles.list}>
              {FOOTER_NAVIGATION_LINKS.map((link) => (
                <FooterListItem {...link} />
              ))}
            </ul>
          </div>
        </div>
        <div className="col-6">
          <p className={styles.copyright}>Build for learning purposes</p>
        </div>
      </div>
    </footer>
  );
};
