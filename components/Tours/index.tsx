import React from "react";
import styles from "./styles.module.scss";
import { Card } from "../Card";

export const Tours: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className="center-text mb-big">
        <h2 className="h-2 h-2_animated h-2_background">Most popular course</h2>
      </div>
      <div className={`${styles.columnWrapper} d-flex`}>
        <div className="col-4">
          <Card title="The sea explorer" />
        </div>
        <div className="col-4">
          <Card title="Second" />
        </div>
        <div className="col-4">
          <Card title="Third" />
        </div>
      </div>
    </section>
  );
};
