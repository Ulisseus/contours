import React from "react";
import { StoryCard } from "./_components/StoryCard";
import { TextButton } from "../TextButton";
import styles from "./styles.module.scss";

const LOREM = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga,
          harum velit facere aliquid veritatis error et mollitia, ex libero
          assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quidem fuga, harum velit facere aliquid veritatis error et mollitia,
          ex libero assumenda. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quidem fuga, harum velit facere aliquid veritatis
          error et mollitia, ex libero assumenda. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quidem fuga, harum velit facere aliquid
          veritatis error et mollitia, ex libero assumenda.`;

export const Stories: React.FC = () => {
  return (
    <section className={styles.stories}>
      <div className="mb-big center-text">
        <h2 className="h-2 h-2_animated h-2_background">
          We make people genuinely happy
        </h2>
      </div>
      <div className="mb-big">
        <StoryCard
          title="I had the most fun of my life"
          text={LOREM}
          imgUrl="/nat-8.jpg"
        />
      </div>
      <div className="mb-big">
        <StoryCard
          title="My life is completely different now!"
          text={LOREM}
          imgUrl="/nat-9.jpg"
        />
      </div>

      <div className="center-text mt-mid">
        <TextButton url="#" text="Read all stories &#10132;" />
      </div>
    </section>
  );
};
