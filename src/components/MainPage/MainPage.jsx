import React from "react";
import styles from "./MainPage.module.scss";
import mainPic from "../../assets/jongraphFINAL.png";
import Links from "../Links";
import About from "../About";

const MainPage = () => {
  return (
    <div className={styles.Main}>
      <section className={styles.hero}>
        <div className={styles.mainPic}>
          <img src={mainPic} alt="main background" />
        </div>
        <div className={styles.name}>JONATHAN OBIANO</div>
      </section>
      <Links />
      <About />
    </div>
  );
};

export default MainPage;
