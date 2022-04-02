import React from "react";
import styles from "./styles.module.scss";

interface IFeatureBox {
  title: string;
  description: string;
  iconName?: string;
}

export const FeatureBox: React.FC<IFeatureBox> = ({
  title,
  description,
  iconName,
}) => {
  return (
    <div className={styles.featureBox}>
      <h3 className="h-3 mb-small">{title}</h3>
      {iconName && <i className={iconName}></i>}
      <p className="featureDescription">{description}</p>
    </div>
  );
};
