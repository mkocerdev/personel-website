import React from "react";
import Img from "gatsby-image";

import styles from "./photo-box.module.css";

const PhotoBox = ({ name, birthTime, img }) => {
  return (
    <div className={styles.box}>
      <figure>
        <Img fluid={img.fluid} className={styles.photo} />
        <figcaption className={styles.figcaption}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.date}>{birthTime}</p>
        </figcaption>
      </figure>
    </div>
  );
};
export default PhotoBox;
