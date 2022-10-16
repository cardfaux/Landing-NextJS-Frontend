import Image from 'next/image';

import Logo from '../../public/Logo.png';
import HamburgerIcon from '../SVG/Hamburger.jsx';
import SearchIcon from '../SVG/Search.jsx';
import UserIcon from '../SVG/User.jsx';
import CartIcon from '../SVG/Cart.jsx';
import { headerLinks } from '../../store/headerLinks';
import styles from '../../styles/Header.module.scss';

const Header = () => {
  return (
    <section className={styles.aboveheader}>
      <div className={styles.header}>
        <div className={styles.hamburgercontainer}>
          <HamburgerIcon />
          <Image src={Logo} alt='change this' width={56} height={46} />
        </div>
        <div className={styles.links}>
          <ul>
            {headerLinks.map((link) => {
              return (
                <li key={link.id.toString()}>
                  <a href={link.link}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.iconscontainer}>
          <SearchIcon />
          <UserIcon />
          <CartIcon />
        </div>
      </div>
    </section>
  );
};

export default Header;
