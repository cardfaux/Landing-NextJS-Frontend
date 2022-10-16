import Image from 'next/image';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { products } from '../../../store/products';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './Carousel.module.scss';

const Product = () => {
  return (
    <section className={styles.carousel}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={2}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          980: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        pagination={{ clickable: true }}
        className={styles.swiper}
      >
        {products.map((product) => {
          return (
            <SwiperSlide key={product.id.toString()}>
              <figure>
                <div className={styles.imagecontainer}>
                  <Image
                    loading='lazy'
                    layout='responsive'
                    src={product.image}
                    alt='change this'
                    width={280}
                    height={421}
                  />
                </div>
                <h1>{product.title}</h1>
                <h2>{product.subTitle}</h2>
                <p>{product.price}</p>
              </figure>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Product;
