import styles from "./Input.module.scss";

const Input = function (props) {
  const classes = `${styles.input} ${props.className}`;

  return (
    <input
      {...props}
      aria-label={props.label}
      role={props.role}
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      className={classes}
      onChange={props.onChange}
      step={props.step || ""}
      min={props.min || ""}
    />
  );
};

export default Input;
