import React from "react";
import { FormField } from "components/FormField";
import { RadioButton } from "components/RadioButton";
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
            <RadioButton
              id="small"
              required
              label="Small tour groups"
              placeholder="Small tour groups"
              name="size"
            />
            <RadioButton
              placeholder="Small tour groups"
              id="large"
              required
              label="Large tour groups"
              name="size"
            />
            <button type="submit" className={styles.button}>
              Submit &#10132;
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
