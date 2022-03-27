import React from "react";
import styles from "./styles.module.scss";

interface ITextButtonProps {
  text: string;
  url: string;
}
export const TextButton: React.FC<ITextButtonProps> = ({ text, url }) => {
  return (
    <a href={url} className={styles.button}>
      {text}
    </a>
  );
};
