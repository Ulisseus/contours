import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

export const About: React.FC = () => {
  return (
    <main>
      <section className={styles.about}>
        <div className="center-text mb-8">
          <h2
            className={cn(
              styles.headingSecondary,
              styles.background,
              styles.animated
            )}
          >
            Exciting tours for adventorous people
          </h2>
        </div>
        <div className={cn("d-flex", styles.doubleCols)}>
          <div className="col-4">Text</div>
          <div className="col-4">images</div>
        </div>
      </section>
    </main>
  );
};
