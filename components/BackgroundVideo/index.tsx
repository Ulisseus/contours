import React from "react";
import styles from "./styles.module.scss";

interface IBackgroundVideo {
  url: string;
}

export const BackgroundVideo: React.FC<IBackgroundVideo> = ({ url }) => {
  return (
    <video src={url} autoPlay muted loop className={styles.video}>
      Your browser is not supported. Sorry ;(
    </video>
  );
};
