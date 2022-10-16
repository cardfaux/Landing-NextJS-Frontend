import FacebookIcon from '../SVG/Facebook';
import InstagramIcon from '../SVG/Instagram';
import TwitterIcon from '../SVG/Twitter';

import styles from '../../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.abovefooter}>
      <div className={styles.footer}>
        <div>
          <div className={styles.container}>
            <span className={styles.heading}>customer service</span>
            <span className={styles.plus}>&#43;</span>
          </div>
          <div>
            <ul>
              <li>
                <a>Accessability</a>
              </li>
              <li>
                <a>contact us</a>
              </li>
              <li>
                <a>return policy</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>gift certificates</a>
              </li>
              <li>
                <a>Wishlist</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.container}>
            <span className={styles.heading}>company</span>
            <span className={styles.plus}>&#43;</span>
          </div>
          <div className={styles.hide}>
            <ul>
              <li>
                <a>about us</a>
              </li>
              <li>
                <a>careers</a>
              </li>
              <li>
                <a>press</a>
              </li>
              <li>
                <a>affiliates</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.end}>
          <div className={styles.container}>
            <span className={styles.heading}>follow us</span>
            {/* <span>&#43;</span> */}
          </div>
          <div>
            <ul className={styles.social}>
              <li>
                <a>
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a>
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a>
                  <TwitterIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
