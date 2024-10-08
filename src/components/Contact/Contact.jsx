import styles from "./Contact.module.css";
import ContactIcon from "../../../assets/contact/contactImg.png";

const Contact = () => {
  return (
    <section id="contact">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.iconContainer}>
            <img className={styles.animatedIcon} src={ContactIcon} height={60} width={60} /> 
          </div>

          <h2>INTERESTED IN WORKING TOGETHER?</h2>

          <h2> Feel free to shoot me an email</h2>
          <p className={styles.buttonContainer}>
            <a
              id="email-button"
              href="mailto:sowmya.ayilam.s@gmail.com@gmail.com"
              target="_blank"
            >
              <button >Say Hello</button>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
