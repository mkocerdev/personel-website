import React from "react";

import styles from "./footer.module.css";

import { Github, Linkedin, Twitter, Spotify } from "../icons";

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.socialmedia}>
          <a
            href="https://twitter.com/mkocerdev/"
            target="__blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <Twitter className={styles.icon} />
          </a>
          <a
            href="https://github.com/mkocerdev/"
            target="__blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <Github className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/mkocerdev/"
            target="__blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <Linkedin className={styles.icon} />
          </a>
          <a
            href="https://open.spotify.com/user/zimsterm/"
            target="__blank"
            rel="noopener noreferrer"
            title="Spotify"
          >
            <Spotify className={styles.icon} />
          </a>
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
