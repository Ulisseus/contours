import React from "react";
import styles from "./styles.module.scss";

interface IRadioButton {
  label: string;
  name: string;
  id: string;
  required?: boolean;
  placeholder?: string;
}

export const RadioButton: React.FC<IRadioButton> = ({ label, id, ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <input type="radio" id={id} {...rest} />
      <label htmlFor={id} className={`${styles.label} d-flex`}>
        <span className={styles.button} />
        {label}
      </label>
    </div>
  );
};
