import styles from "./Card.module.scss";

const Card = function (props) {
  const classes = `${styles.card} ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
