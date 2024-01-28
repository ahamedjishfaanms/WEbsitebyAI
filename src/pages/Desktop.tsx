import { FunctionComponent } from "react";
import FRAMEA from "../components/FRAMEA";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop1}>
      <section className={styles.fRAMEAWrapper}>
        <FRAMEA />
      </section>
      <footer className={styles.anotherFrame}>
        <div className={styles.frameWithText}>
          <div className={styles.finalRectangle} />
        </div>
      </footer>
    </div>
  );
};

export default Desktop;
