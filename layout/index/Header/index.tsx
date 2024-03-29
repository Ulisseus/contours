import React from "react";
import styles from "./styles.module.scss";
import { Button } from "components/Button";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <img src="/logo-white.png" alt="logo" className={styles.logo} />
      </div>
      <div className={styles.titleBox}>
        <h1 className="h-1">
          <span className="h-1_main">Outdoors</span>
          <span className="h-1_sub">is where the life happens</span>
        </h1>
        <Button text="Discover our tours" animated url="#" />
      </div>
    </header>
  );
};
