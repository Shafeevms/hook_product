import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import PrevCard from '../../PrevCard/PrevCard';

const style = {
  marginTop: '-25px',
  marginLeft: '24px',
  marginBottom: '23px',
  width: '336px'

};

const BuyWithThis = () => {
  return (
    <div style={style}>
      <Swiper
        spaceBetween={140}
        slidesPerView={3}
        loop={true}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><PrevCard /></SwiperSlide>
        <SwiperSlide><PrevCard /></SwiperSlide>
        <SwiperSlide><PrevCard /></SwiperSlide>
        <SwiperSlide><PrevCard /></SwiperSlide>
        <SwiperSlide><PrevCard /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BuyWithThis;
