import React from "react";
import styles from "./styles.module.scss";
import { Button } from "../Button";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <img src="/logo-white.png" alt="logo" className={styles.logo} />
      </div>
      <div className={styles.titleBox}>
        <h1 className={styles.heading}>
          <span className={styles.headingMain}>Outdoors</span>
          <span className={styles.headingSub}>is where the life happens</span>
        </h1>
        <Button text="Discover our tours" animated url="#" />
      </div>
    </header>
  );
};

export default Header;
