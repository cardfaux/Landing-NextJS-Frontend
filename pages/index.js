import HeroSlider from '../components/Carousel/HeroSlider/HeroSlider';
import Collections from '../components/Collections/Collections';
import ShopNew from '../components/ShopNew/ShopNew';
import FavoriteTees from '../components/FavoriteTees/FavoriteTees';
import SignUp from '../components/SignUp/SignUp';

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
