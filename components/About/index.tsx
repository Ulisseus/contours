import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import { TextButton } from "../TextButton";

export const About: React.FC = () => {
  return (
    <main>
      <section className={styles.about}>
        <div className="center-text mb-big">
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
          <div className="col-4">
            <div className="h-3 mb-small">
              You're going to fall in love with nature
            </div>
            <p className="paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              natus, officia aspernatur neque quod quasi eum culpa tempora ea.
              Excepturi ipsa totam nemo eligendi? Animi laboriosam nihil
              molestias recusandae earum!
            </p>
            <div className="h-3 mb-small">
              Live adventurs like you've never before
            </div>
            <p className="paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              natus, officia aspernatur neque quod quasi eum culpa tempora ea.
              Excepturi ipsa totam nemo eligendi? Animi laboriosam nihil
              molestias recusandae earum!
            </p>
            <TextButton url="#" text="Learn more &#10132;" />
          </div>
          <div className="col-4">images</div>
        </div>
      </section>
    </main>
  );
};
