import React from "react";
import { FeatureBox } from "./_components/FeatureBox";
import styles from "./styles.module.scss";

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vitae ratione corrupti itaque facilis quidem laboriosam in, aliquam iusto, eligendi doloribus ex illo obcaecati maxime rerum, tenetur consectetur numquam tempore.";

export const Features: React.FC = () => {
  return (
    <section className={styles.features}>
      <div className={`${styles.cardWrapper} d-flex`}>
        <div className="col-3">
          <FeatureBox
            title="Explore the world"
            iconName="icon-basic-world"
            description={lorem}
          />
        </div>
        <div className="col-3">
          <FeatureBox
            title="Meet the nature"
            iconName="icon-basic-compass"
            description={lorem}
          />
        </div>
        <div className="col-3">
          <FeatureBox
            title="Explore the world"
            iconName="icon-basic-map"
            description={lorem}
          />
        </div>
        <div className="col-3">
          <FeatureBox
            title="Live the life"
            iconName="icon-basic-heart"
            description={lorem}
          />
        </div>
      </div>
    </section>
  );
};
