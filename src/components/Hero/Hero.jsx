import styles from "./Hero.module.css";

import CV from "../../../assets/hero/Resume-SOWMYA-AS.pdf";

const Hero = () => {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>Hi, I&apos;m Sowmya </h1>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            Frontend Engineer. Mentor and Agile advocate committed to quality
            code.
          </p>
        </div>

        <a href={CV} target="_blank">
          <button>View Resume</button>
        </a>
      </div>
    </section>
  );
};
export default Hero;
