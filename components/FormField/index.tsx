import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

//TODO extend it properly
interface IFormField {
  type: "text" | "email" | "password";
  id: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  label?: string;
}

export const FormField: React.FC<IFormField> = ({
  type,
  id,
  placeholder,
  required,
  className,
  label,
}) => {
  return (
    <div className={cn(styles.form, className)}>
      <input
        type={type}
        className={styles.input}
        placeholder={placeholder}
        id={id}
        required={required}
      />
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
    </div>
  );
};
