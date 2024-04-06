import styles from "./Button.module.scss";

const Button = ({ children, color }) => {
  return (
    <button className={styles.button} style={{ backgroundColor: color }}>
      {children}
    </button>
  );
};

export default Button;
