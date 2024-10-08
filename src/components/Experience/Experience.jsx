import styles from "./Experience.module.css";
import { experienceData } from "./experienceData";

import TechBadge from "./TechBadge";
import { technologies } from "./technologies";

const Experience = () => {
  return (
    <section className={styles.experienceSection} id="experience">
      <h2>Experience</h2>
      <div className={styles.experienceContainer}>
        {experienceData.map((exp, index) => (
          <div key={index} className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <div className={styles.cardContent}>
                  <div className={styles.duration}>{exp.duration}</div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.company}>{exp.company}</p>
                  <img src={exp.pic} height={250} width={250} />
                </div>
              </div>
              <div className={styles.flipCardBack}>
                <div className={styles.cardContent}>
                  <p className={styles.projectDescription}>
                    {exp.projects[0].description}
                  </p>

                  <ul
                    className={styles.techUsedList}
                    aria-label="Technologies used"
                  >
                    {exp.projects[0].techUsed.map((tech, techIndex) => (
                      <li key={techIndex} className={styles.techUsedItem}>
                        <TechBadge tech={tech} />
                      </li>
                    ))}
                  </ul>

                  <ul className={styles.contributionsList}>
                    {exp.projects[0].contributions.map(
                      (contribution, contIndex) => (
                        <li key={contIndex} className={styles.contribution}>
                          {contribution}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.tech}>
        <h2>Technologies and Tools I Work With</h2>
        <div className={styles.techContainer}>
          {technologies.map((tech, index) => (
            <div key={index} className={styles.techItem}>
              <div className={styles.techLogo}>{tech.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
