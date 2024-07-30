import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.icons}>
          <a
            href="https://www.linkedin.com/in/sowmya-ayilam-s/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/sowmya_ayilam_s"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <FaXTwitter />
          </a>
          <a
            href="https://github.com/sowmya-AS"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <FaGithub />
          </a>
          <a
            href="mailto:sowmya.ayilam.s@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <FaEnvelope />
          </a>
        </div>
        <p className={styles.createdBy}>
          Created by Sowmya A S © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
