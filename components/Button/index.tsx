import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

interface IButtonProps {
  text: string;
  url: string;
  animated?: boolean;
  primary?: boolean;
  className?: string;
}
export const Button: React.FC<IButtonProps> = ({
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
