import React from "react";
import styles from "./MainPage.module.scss";
import mainPic from "../../assets/jongraphFINAL.png";
import Links from "../Links";
import About from "../About";

const MainPage = () => {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <img className={styles.pic} src={mainPic} alt="main background" />
        <h1 className={styles.name}>JONATHAN OBIANO</h1>
      </section>
      <Links />
      <About />
    </div>
  );
};

export default MainPage;
