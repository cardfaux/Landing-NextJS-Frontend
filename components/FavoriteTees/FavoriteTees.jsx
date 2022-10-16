import Image from 'next/image';

import ShopNow from '../ShopNow/ShopNow';

import FavoriteTee from '../../public/FavoriteTees.png';
import styles from './FavoriteTees.module.scss';

const FavoriteTees = () => {
  return (
    <>
      <section className={styles.favorite}>
        <Image layout='responsive' src={FavoriteTee} alt='change this' width={1440} height={638} />
        <ShopNow title='our favorite tees' subTitle='Everyday tees you need' buttonText='shop now' white right />
      </section>
    </>
  );
};

export default FavoriteTees;
