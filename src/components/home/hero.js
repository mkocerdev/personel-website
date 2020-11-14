import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            Hi{" "}
            <span role="img" aria-label="hello">
              👋
            </span>{" "}
            I’m mehmet,
            <br /> a{" "}
            <strong className={styles.highlight}> frontend developer</strong>
            <br /> at{" "}
            <strong className={styles.highlight}>@despatchcloud</strong>
          </h1>
        </div>
      </div>
    </section>
  );
};
export default Hero;
