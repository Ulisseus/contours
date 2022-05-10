import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

interface IMainButtonProps {
  text: string;
  url: string;
  animated?: boolean;
  primary?: boolean;
  className?: string;
}
//todo combine two button components into single component
export const MainButton: React.FC<IMainButtonProps> = ({
  text,
  animated,
  url,
  primary,
  className,
}) => {
  return (
    <a
      className={cn(
        { [styles.animation]: animated, [styles.primary]: primary },
        styles.button,
        className
      )}
      href={url}
    >
      {text}
    </a>
  );
};
