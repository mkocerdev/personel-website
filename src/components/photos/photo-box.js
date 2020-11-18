import React from "react";
import Img from "gatsby-image";

import styles from "./photo-box.module.css";

const PhotoBox = ({ title, date, photo }) => {
  return (
    <div className={styles.box}>
      <figure>
        <Img fluid={photo.childImageSharp.fluid} className={styles.img} />
        <figcaption className={styles.figcaption}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.date}>{date}</p>
        </figcaption>
      </figure>
    </div>
  );
};
export default PhotoBox;
