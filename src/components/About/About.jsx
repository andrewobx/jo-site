import React from "react";
import styles from "./About.module.scss";
import head from "../../assets/jonhead-revA-square.png";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.text}>
        <h2>Who I Am</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          maxime illo eum dolorem voluptatem eveniet quos, fuga veniam eos!
          Delectus, nisi odit animi perferendis alias maiores voluptatem culpa
          fugiat quam! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Maiores iste voluptatibus vel voluptates at unde modi asperiores
          obcaecati. Laborum dicta porro accusamus maxime consequuntur ea
          voluptas numquam harum excepturi suscipit.
        </p>
      </div>

      <img className={styles.pic} src={head} alt="headshot" />
    </section>
  );
};

export default About;
