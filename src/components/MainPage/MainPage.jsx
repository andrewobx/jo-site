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
          <div className={styles.musicLink}>
            <h2>Check out my new music</h2>
            <a href="/">
              <h1>LISTEN</h1>
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
