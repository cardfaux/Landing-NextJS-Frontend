import Product from '../Carousel/Product/Product';

import styles from './ShopNew.module.scss';

const ShopNew = () => {
  return (
    <section className={styles.shopnew}>
      <h3>shop new arrivals</h3>
      <Product />
    </section>
  );
};

export default ShopNew;
