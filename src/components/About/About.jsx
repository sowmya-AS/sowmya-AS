import { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import AboutPicture from "../../../assets/about/picture.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const top = aboutRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top <= windowHeight - 400) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={aboutRef} className={styles.aboutContainer} id="about">
      <h2 className={`${styles.title} ${isVisible ? styles.animateTitle : ""}`}>
        About me
      </h2>
      <div className={styles.imgContainer}>
        <img
          src={AboutPicture}
          className={styles.aboutImg}
          alt="Profile picture of Sowmya A S"
        />
      </div>
      <p
        className={`${styles.aboutParagraph} ${
          isVisible ? styles.animateParagraph : ""
        }`}
      >
        I started my journey into front-end development with a deep dive into
        React, and I haven&apos;t looked back since. Fast forward to today,
        I&apos;ve had the pleasure of building innovative web and mobile
        applications, contributing to large-scale platforms.
      </p>
      <p
        className={`${styles.aboutParagraph} ${
          isVisible ? styles.animateParagraph : ""
        }`}
      >
        My primary focus is on creating user-centric, responsive interfaces,
        leveraging my expertise in React and React Native. Alongside front-end
        development, I&apos;ve also gained valuable experience in infrastructure
        management.
      </p>
      <p
        className={`${styles.aboutParagraph} ${
          isVisible ? styles.animateParagraph : ""
        }`}
      >
        Additionally, I have a strong track record in mentoring junior
        developers and conducting professional training sessions for new hires
        to facilitate their onboarding into the organization. When I&apos;m not
        coding, you can find me writing tech blogs, reading, or exploring the
        latest in web development trends.
      </p>
      <div className={styles.content}></div>
    </section>
  );
};

export default About;
