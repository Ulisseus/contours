import React from "react";
import { MainButton } from "../../../../../components/MainButton";
import styles from "./styles.module.scss";

interface ICard {
  title: string;
  variant: "Left" | "Center" | "Right";
  listEntries: string[];
}

export const Card: React.FC<ICard> = ({ title, variant, listEntries }) => {
  return (
    <div className={styles.card}>
      <div className={styles.sideFront}>
        <h4 className={styles.title}>
          <span className={styles[`titleBackground${variant}`]}>{title}</span>
        </h4>
        <div className={styles[`image${variant}`]}></div>
        <div className={styles.details}>
          <ul>
            {listEntries.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles[`sideBack${variant}`]}>
        <div className={styles.sideBackContent}>
          <div className={styles.priceWrapper}>
            <p className={styles.priceOnly}>only</p>
            <p className={styles.priceValue}>$2000</p>
          </div>
          <MainButton url="#popup" text="Buy now!" />
        </div>
      </div>
    </div>
  );
};
