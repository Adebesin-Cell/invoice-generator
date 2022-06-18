import styles from "./Input.module.scss";

const Input = function (props) {
  const classes = `${props.className} ${styles.input}`;

  return (
    <input
      aria-label={props.label}
      role={props.role}
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      className={classes}
      onChange={props.onChange}
    />
  );
};

export default Input;
