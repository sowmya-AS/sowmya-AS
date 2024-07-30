import PropTypes from "prop-types";
import styles from "./Experience.module.css";
import { technologies } from "./technologies";

const TechBadge = ({ tech }) => {
  const techInfo = technologies.find((t) => t.name === tech);
  return techInfo ? (
    <div className={styles.techBadge}>{tech}</div>
  ) : (
    <div className={styles.techBadge}>{tech}</div>
  );
};

TechBadge.propTypes = {
  tech: PropTypes.string.isRequired,
};

export default TechBadge;
