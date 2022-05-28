import React from "react";
import styles from "./styles.module.scss";
import { Card } from "./_components/TourCard";
import { MainButton } from "components/MainButton";

const LIST_ENTRIES = {
  left: [
    "3 days tour",
    "Up to 15 people",
    "2 tour guides",
    "Sleep in cozy cottages",
    "Difficulty: easy",
  ],
  center: [
    "7 days tour",
    "Up to 40 people",
    "6 tour guides",
    "Slepp in provided tents",
    "Difficulty: medium",
  ],
  right: [
    "5 days tour",
    "Up to 15 people",
    "3 tour guides",
    "Sleep in provided tents",
    "Difficulty hard",
  ],
};

export const Tours: React.FC = () => {
  return (
    <section className={styles.wrapper} id="tours">
      <div className="center-text mb-big">
        <h2 className="h-2 h-2_animated h-2_background">Most popular course</h2>
      </div>
      <div className={`${styles.columnWrapper} d-flex`}>
        <div className="col-4">
          <Card
            title="The sea explorer"
            variant="Left"
            listEntries={LIST_ENTRIES.left}
          />
        </div>
        <div className="col-4">
          <Card
            title="The forest hiker"
            variant="Center"
            listEntries={LIST_ENTRIES.center}
          />
        </div>
        <div className="col-4">
          <Card
            title="The snow adventurer"
            variant="Right"
            listEntries={LIST_ENTRIES.right}
          />
        </div>
      </div>
      <div className="center-text mb-big mt-big">
        <MainButton url="#" text="Discover all tours" primary />
      </div>
    </section>
  );
};
