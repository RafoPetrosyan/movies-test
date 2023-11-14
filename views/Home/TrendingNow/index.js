import React from 'react';
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";

const TrendingNow = ({data, storeFeaturedId}) => {
    return (
        <div className='trending-now'>
            <p className='content-name'>Trending Now</p>
            <Swiper className='carousel' spaceBetween={20} slidesPerView={"auto"} mousewheel={true} freeMode={true}>
                {data.map(item => (
                    <SwiperSlide className='carousel-item' key={item.Id} onClick={() => storeFeaturedId(item.Id)}>
                        <Image src={`/images/${item.CoverImage}`} alt={'sds'} width={200} height={278}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TrendingNow;
