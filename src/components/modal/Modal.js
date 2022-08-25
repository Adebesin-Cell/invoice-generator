import styles from './Modal.module.scss';
import * as Icon from 'react-feather';
import Button from '../../components/UI/button/Button';

const Modal = function (props) {
  const classes = `${props.className} ${styles.modal}`;

  return (
    <>
      <div className={styles.modal__overlay} onClick={props.onClose}>
        &nbsp;
      </div>
      <div className={classes}>
        <div
          className={`${styles.modal__header} ${
            props.title ? styles['modal__header--withtitle'] : ''
          }`}
        >
          {props.title ? (
            <h1 className={styles.modal__heading}>{props.title}</h1>
          ) : (
            ''
          )}
          <Button className={styles.modal__action} onClick={props.onClose}>
            <Icon.X />
          </Button>
        </div>
        <div className={styles.modal__body}>{props.children}</div>
      </div>
    </>
  );
};

export default Modal;
