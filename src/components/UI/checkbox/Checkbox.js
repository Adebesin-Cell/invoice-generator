import styles from "./Checkbox.module.scss";

const Checkbox = function (props) {
  const classes = `${styles.checkbox} ${props.className}`;

  return (
    <input
      type='checkbox'
      name='remember-me'
      className={classes}
      id='remember-me'
    />
  );
};

export default Checkbox;
