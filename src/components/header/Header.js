import styles from "./Header.module.scss";
import Button from "../UI/button/Button";
import LogoMobile from "../UI/logo/LogoMobile";
import { ReactComponent as Menu } from "../../assets/svgs/icon-menu-smooth.svg";
import ProfileIcon from "../profile/ProfileIcon";

const Header = function (props) {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__menu}>
          <Button className={styles.header__btn}>
            <Menu />
          </Button>
        </div>
        <LogoMobile />
        <ProfileIcon />
      </div>
    </header>
  );
};

export default Header;
