import React from "react";
import styles from "./styles.module.scss";

interface IButtonProps {
  text: string;
}

export const Button: React.FC<IButtonProps> = ({ text }) => {
  return (
    <a className={styles.button} href="#">
      {text}
    </a>
  );
};
