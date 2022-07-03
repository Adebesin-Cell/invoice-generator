import styles from "./Button.module.scss";

const Button = function (props) {
  const classes = `${props.className} ${styles.button}`;

  return (
    <button {...props} className={classes} data-layout={props.dataset}>
      {props.children}
    </button>
  );
};

export default Button;
