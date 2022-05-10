import React from "react";
import { MainButton } from "../../../components/MainButton";
import styles from "./styles.module.scss";

export const Popup: React.FC = () => {
  return (
    <div className={styles.popup}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.contentLeft}>
            <img src="/nat-8.jpg" alt="promo" className={styles.image} />
            <img src="/nat-9.jpg" alt="promo" className={styles.image} />
          </div>
          <div className={styles.contentRight}>
            <h2 className="h-2 h-2_background h-2_animated mb-small">
              Start booking now
            </h2>
            <h3 className="h-3 mb-small">Please read the therms below</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
              excepturi. Accusamus aut pariatur eveniet eligendi optio tenetur
              debitis, recusandae veritatis sunt dolores repellendus cumque in
              voluptatum ea nam fugiat adipisci.
            </p>
            <MainButton
              text="Book now"
              url="#"
              className={styles.button}
              primary
            />
          </div>
        </div>
      </div>
    </div>
  );
};
