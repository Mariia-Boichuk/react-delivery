import styles from "./CommonText.module.css";

const CommonText = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};

export default CommonText;
