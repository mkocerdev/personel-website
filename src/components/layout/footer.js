import React from "react";

import styles from "./footer.module.css";

import { Github, Linkedin, Twitter } from "../icons";

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.socialmedia}>
          <Twitter className={styles.icon} />
          <Github className={styles.icon} />
          <Linkedin className={styles.icon} />
        </div>
        <div className={styles.made}>
          © {new Date().getFullYear()},
          <a
            className={styles.author}
            href="https://github.com/mkocerdev"
            target="__blank"
          >
            &nbsp; @mkocerdev
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
