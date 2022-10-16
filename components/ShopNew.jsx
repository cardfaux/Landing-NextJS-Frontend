import Product from './Carousel/Product';

import styles from '../styles/ShopNew.module.scss';

const ShopNew = () => {
  return (
    <section className={styles.shopnew}>
      <h3>shop new arrivals</h3>
      <Product />
    </section>
  );
}

export default ShopNew;