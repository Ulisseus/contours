import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

interface IButtonProps {
  text: string;
  url: string;
  animated?: boolean;
}

export const Button: React.FC<IButtonProps> = ({ text, animated, url }) => {
  return (
    <a
      className={cn({ [styles.animation]: animated }, styles.button)}
      href={url}
    >
      {text}
    </a>
  );
};
