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
        {/* in real a project I would use next.js Image component*/}
        <picture>
          <source
            srcSet="/logo-green-small-1x.png 1x, /logo-green-small-2x.png 2x"
            media="(max-width: 37.5rem)"
          />
          <img
            srcSet="/logo-green-1x.png 1x, /logo-green-2x.png 2x"
            alt="logo"
          />
        </picture>
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
