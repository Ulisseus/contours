import React from "react";
import styles from "./styles.module.scss";

export const Tours: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className="center-text mb-big">
        <h2 className="h-2 h-2_animated h-2_background">Most popular course</h2>
      </div>
      <div className="tours d-flex">
        <div className="col-4">First</div>
        <div className="col-4">Second</div>
        <div className="col-4">Third</div>
      </div>
    </section>
  );
};
