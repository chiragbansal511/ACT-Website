import { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Landing.module.scss";
const Landing = () => {
  return (
    <Fragment>
      <Navbar />
      <div className={styles.landingWrapper}>
        <div className={styles.aboutInfo}>
          <h1>ACT</h1>
          <h2>ART | COGNITION | TECHNOLOGY </h2>
          <h4>
            Choose an object you want to use as your mask, and place it behind
            all objects that ll be masked on the z-axis. Select all layers that
            will be a part of the mask object.
          </h4>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.button}>Empty</div>
          <div className={styles.button}>Empty</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
