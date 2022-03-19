import React from "react";
import styles from "./styles.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <img src="/logo-white.png" alt="logo" className={styles.logo} />
      </div>
      <div className={styles.titleBox}>
        <h1 className={styles.title}>
          <span className={styles.titleMain}>Outdoors</span>
          <span className={styles.titleSub}>is where the life happens</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
