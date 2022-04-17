import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

//TODO extend it properly
interface IFormField {
  type: "text" | "email" | "password" | "radio";
  id: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  name?: string;
  label?: string;
}

export const FormField: React.FC<IFormField> = ({
  type,
  id,
  placeholder,
  className,
  label,
  ...rest
}) => {
  return (
    <div className={cn(styles.form, className)}>
      <input
        type={type}
        className={styles.input}
        placeholder={placeholder}
        id={id}
        {...rest}
      />
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
    </div>
  );
};
