import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import { TextButton } from "../../../components/TextButton";
import { Composition } from "./_components/AboutComposition";

export const About: React.FC = () => {
  return (
    <main>
      <section className={styles.about}>
        <div className="center-text mb-big">
          <h2 className="h-2 h-2_background h-2_animated">
            Exciting tours for adventorous people
          </h2>
        </div>
        <div className={cn(styles.wrapper, "d-flex")}>
          <div className="col-6">
            <div className="h-3 mb-small">
              You&apos;re going to fall in love with nature
            </div>
            <p className="paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              natus, officia aspernatur neque quod quasi eum culpa tempora ea.
              Excepturi ipsa totam nemo eligendi? Animi laboriosam nihil
              molestias recusandae earum!
            </p>
            <div className="h-3 mb-small">
              Live adventurs like you&apos;ve never before
            </div>
            <p className="paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              natus, officia aspernatur neque quod quasi eum culpa tempora ea.
              Excepturi ipsa totam nemo eligendi? Animi laboriosam nihil
              molestias recusandae earum!
            </p>
            <TextButton url="#" text="Learn more &#10132;" />
          </div>
          <div className="col-6">
            <Composition />
          </div>
        </div>
      </section>
    </main>
  );
};
