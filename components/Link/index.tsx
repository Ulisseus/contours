import React from "react";
import styles from "./styles.module.scss";

interface ILinkProps {
  text: string;
  url: string;
}
export const TextButton: React.FC<ILinkProps> = ({ text, url }) => {
  return (
    <a href={url} className={styles.button}>
      {text}
    </a>
  );
};
