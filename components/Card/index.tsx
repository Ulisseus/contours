import React from "react";
import styles from "./styles.module.scss";

interface ICard {
  title: string;
}

export const Card: React.FC<ICard> = ({ title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.sideFront}>
        <h4 className={styles.title}>
          <span>{title}</span>
        </h4>
        <div className={styles.imageOne}></div>
        <div className={styles.details}>
          <ul>
            <li>3 day tour</li>
            <li>Up to 15 people </li>
            <li>2 tour guides</li>
            <li>Sleep in cozy cottages</li>
            <li>Difficulty:easy</li>
          </ul>
        </div>
      </div>
      <div className={styles.sideBack}>Background</div>
    </div>
  );
};
