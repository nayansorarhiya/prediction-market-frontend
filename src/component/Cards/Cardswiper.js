import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import Expiredcard from './Expiredcard';
import Livecard from './Livecard';
import Nextcard from './Nextcard';
import Latercard from './Latercard';

export default function Cardswiper(){
    return(
        <>
         <Swiper
            spaceBetween={1}
            slidesPerView={1}
          
            breakpoints={{
                0:{
                    width: 0,
                    slidesPerView:1,
                },
                400:{
                    width: 400,
                    slidesPerView: 1, 
                },
                500:{
                    width: 500,
                    slidesPerView: 2, 
                },     
                768: {
                    width: 768,
                    slidesPerView: 2,
                  },

                1200: {
                    width: 1200,
                    slidesPerView: 3,
                  },
            }}
            // centeredSlides={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
         >
            {/* <div className='d-flex pt-5'> */}
                    <SwiperSlide>
                        <Expiredcard></Expiredcard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Livecard></Livecard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Nextcard></Nextcard>
                     </SwiperSlide>
                     <SwiperSlide>
                          <Latercard></Latercard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Latercard></Latercard>
                    </SwiperSlide>
                {/* </div> */}
                </Swiper>
        </>
    );
}
