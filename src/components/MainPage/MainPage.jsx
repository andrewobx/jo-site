import React from "react";
import styles from "./MainPage.module.scss";
import mainPic from "../../assets/jongraphFINAL.png";
import secondaryPic from "../../assets/jonPano.jpg";
import Links from "../Links";
import About from "../About";

const MainPage = () => {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <img className={styles.mainPic} src={mainPic} alt="main background" />
        <h1 className={styles.name}>JONATHAN OBIANO</h1>
        <div>
          <img
            className={styles.secondPic}
            src={secondaryPic}
            alt="secondary background"
          />
          <div className={styles.music}>
            <h1 className={styles.musicHead}>Check out my new music</h1>
            <a className={styles.musicLink} href="/">
              <h4 className={styles.musicListen}>LISTEN</h4>
            </a>
          </div>
        </div>
        <Links />
        <About />
      </section>
    </div>
  );
};

export default MainPage;
