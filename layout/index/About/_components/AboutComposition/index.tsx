import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

export const Composition: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <img
        src="nat-1-large.jpg"
        alt="about image one"
        className={cn(styles.photo, styles.first)}
      />
      <img
        src="nat-2-large.jpg"
        alt="about image two"
        className={cn(styles.photo, styles.second)}
      />
      <img
        src="nat-3-large.jpg"
        alt="about image three"
        className={cn(styles.photo, styles.third)}
      />
    </div>
  );
};
