import styles from '../styles/ShopNow.module.scss';

const ShopNow = ({ title, subTitle, buttonText, white, right }) => {
  return (
    <>
      {!white && !right && (
        <section className={styles.shop}>
          <h1>{title}</h1>
          <p>{subTitle}</p>
          <a href='/shop'>{buttonText}</a>
        </section>
      )}
      {white && !right && (
        <section className={styles.shop}>
          <h1 className={styles.white}>{title}</h1>
          <p className={styles.white}>{subTitle}</p>
          <a href='/shop'>{buttonText}</a>
        </section>
      )}
      {right && white && (
        <section className={styles.right}>
          <h1 className={styles.white}>{title}</h1>
          <p className={styles.white}>{subTitle}</p>
          <a href='/shop'>{buttonText}</a>
        </section>
      )}
    </>
  );
};

export default ShopNow;
