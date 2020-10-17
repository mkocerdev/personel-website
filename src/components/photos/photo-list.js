import React from "react";

import styles from "./photo-list.module.css";

const PhotoList = ({ children }) => {
  return <div className={styles.list}>{children}</div>;
};
export default PhotoList;
