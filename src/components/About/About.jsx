import React from "react";
import styles from "./About.module.scss";
import head from "../../assets/jonhead-revA-square.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  AOS.init();

  return (
    <section className={styles.about}>
      <div className={styles.text}>
        <h2 data-aos="fade-up">Who is Jonathan?</h2>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          maxime illo eum dolorem voluptatem eveniet quos, fuga veniam eos!
          Delectus, nisi odit animi perferendis alias maiores voluptatem culpa
          fugiat quam! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Maiores iste voluptatibus vel voluptates at unde modi asperiores
          obcaecati. Laborum dicta porro accusamus maxime consequuntur ea
          voluptas numquam harum excepturi suscipit.
        </p>
      </div>

      <div className={styles.pic}>
        <img data-aos="fade-up" src={head} alt="headshot" />
      </div>
    </section>
  );
};

export default About;
