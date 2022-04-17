import React from "react";
import styles from "./styles.module.scss";

interface IStoryCardProps {
  title: string;
  text: string;
  imgUrl: string;
}

export const StoryCard: React.FC<IStoryCardProps> = ({
  title,
  text,
  imgUrl,
}) => {
  return (
    <div className={styles.storyCard}>
      <figure className={styles.shape}>
        <img src={imgUrl} alt="On a tour" className={styles.image} />
        <figcaption className={styles.caption}>Mary smith</figcaption>
      </figure>
      <div className="storyText">
        <h3 className="h-3 mb-small">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
