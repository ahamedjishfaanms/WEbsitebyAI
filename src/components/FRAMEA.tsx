import { FunctionComponent } from "react";
import styles from "./FRAMEA.module.css";

const FRAMEA: FunctionComponent = () => {
  return (
    <div className={styles.fRAMEA}>
      <div className={styles.fRAMEB}>
        <div className={styles.fRAMEC}>
          <img className={styles.fRAMECChild} alt="" src="/rectangle-1.svg" />
          <div className={styles.registerFrame}>
            <nav className={styles.homeAboutLoginContact}>
              <a
                className={styles.home}
                href="https://ahamedjishfaan.me"
                target="_blank"
              >
                Home
              </a>
              <div className={styles.navigation}>
                <a
                  className={styles.about}
                  href="https://ahamedjishfaan.me/about"
                  target="_blank"
                >
                  About
                </a>
              </div>
              <a
                className={styles.login}
                href="https://www.ahamedjishfaan.me/p/about-me.html?m=1"
                target="_blank"
              >
                login
              </a>
              <div className={styles.navigation1}>
                <a
                  className={styles.contact}
                  href="https://www.ahamedjishfaan.me/p/about-me.html?m=1"
                  target="_blank"
                >
                  Contact
                </a>
              </div>
              <a
                className={styles.gallery}
                href="https://www.ahamedjishfaan.me/p/about-me.html?m=1"
                target="_blank"
              >
                Gallery
              </a>
            </nav>
          </div>
          <div className={styles.frameD}>
            <div className={styles.registrationFrame}>
              <div className={styles.registrationFrameChild} />
              <a
                className={styles.registerNow}
                href="https://ahamedjishfaan.me"
                target="_blank"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
        <div className={styles.loremFrame}>
          <img
            className={styles.loremTextIcon}
            loading="eager"
            alt=""
            src="/rectangle-4@2x.png"
          />
          <div className={styles.textBlockA}>
            <div className={styles.textBlockB}>
              <h2 className={styles.loreIpsum}>Lore Ipsum</h2>
              <div className={styles.sampleText}>
                <div
                  className={styles.loremIpsumIs}
                >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but `}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.innerFrame}>
            <div className={styles.topLevelRectangles} />
            <div className={styles.childRectangle}>
              <div className={styles.contentContainer} />
            </div>
            <div className={styles.topLevelRectangles1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FRAMEA;
