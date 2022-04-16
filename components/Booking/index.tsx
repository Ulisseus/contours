import React from "react";
import { FormField } from "../FormField";
import styles from "./styles.module.scss";

export const Booking: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.book}>
        <div className={styles.formWrapper}>
          <form action="#" className={styles.form}>
            <div className=" mb-mid">
              <h2 className="h-2 h-2_background">Start booking now</h2>
            </div>
            <FormField
              type="text"
              placeholder="Full name"
              id="name"
              required
              label="Full name"
              className={styles.name}
            />
            <FormField
              type="email"
              placeholder="Email address"
              id="email"
              required
              label="Email addres"
            />
            <button type="submit">Sub</button>
          </form>
        </div>
      </div>
    </section>
  );
};
