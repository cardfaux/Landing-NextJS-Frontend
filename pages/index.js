import HeroSlider from '../components/Carousel/HeroSlider.jsx';
import Collections from '../components/Collections';
import ShopNew from '../components/ShopNew';
import FavoriteTees from '../components/FavoriteTees';
import SignUp from '../components/SignUp';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroSlider />
      <Collections />
      <ShopNew />
      <FavoriteTees />
      <SignUp />
    </div>
  );
}
