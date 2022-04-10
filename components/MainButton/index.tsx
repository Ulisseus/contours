import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

interface IMainButtonProps {
  text: string;
  url: string;
  animated?: boolean;
  primary?: boolean;
}
//todo combine two buttons in on component
export const MainButton: React.FC<IMainButtonProps> = ({
  text,
  animated,
  url,
  primary,
}) => {
  return (
    <a
      className={cn(
        { [styles.animation]: animated, [styles.primary]: primary },
        styles.button
      )}
      href={url}
    >
      {text}
    </a>
  );
};
