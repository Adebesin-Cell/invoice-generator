import styles from "./Button.module.scss";

const Button = function (props) {
  const classes = `${props.className} ${styles.button}`;

  return (
    <button
      type={props.type}
      className={classes}
      role={props.role}
      data-layout={props.dataset}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
