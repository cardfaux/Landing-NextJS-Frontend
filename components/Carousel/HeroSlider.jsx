import Image from 'next/image';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ShopNow from '../ShopNow';
import SlideOne from '../../public/SlideOne.png';
import SlideTwo from '../../public/SlideTwo.png';
import SlideThree from '../../public/SlideThree.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from '../../styles/Hero.module.scss';

const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true, bulletActiveClass: 'active-bullets' }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className={styles.swiper}
        >
          <SwiperSlide>
            <Image layout='responsive' src={SlideOne} alt='change this' width={1440} height={638} />
            <ShopNow
              title='Shop new arrivals'
              subTitle='Our coolest new items are waiting for you!'
              buttonText='shop now'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image layout='responsive' src={SlideTwo} alt='change this' width={1440} height={638} />
            <ShopNow title='Our Fave Tees' subTitle='Shop all our favorites.' buttonText='shop now' white />
          </SwiperSlide>
          <SwiperSlide>
            <Image layout='responsive' src={SlideThree} alt='change this' width={1440} height={638} />
            <ShopNow title="Men's Tees" subTitle='Find the perfect shirt.' buttonText='shop now' white />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Hero;
