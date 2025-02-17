'use client'

import { useEffect, useRef, useState } from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import IconArrowRight from '@/components/common/icon/IconArrowRight';
import { Navigation, Pagination } from "swiper/modules";

export default function SlideWrapper({options, children}:{options:any, children:React.ReactNode}) {
  const styleMap = {
    trsCommon: ' transition-all duration-200 ease-in-out'
    , arrow: ' w-[30px] fill-[#8ab0ef] cursor-pointer hover:scale-125'
  }

  const prevEl = useRef<HTMLDivElement>(null);
  const nextEl = useRef<HTMLDivElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    if(!!prevEl?.current && !!nextEl?.current) {
      setSwiperReady(true);
    }
  }, [prevEl, nextEl]);

  return (
    <div
      className="w-full h-full flex gap-5 justify-center"
    >
      <div className={'flex justify-center items-center '+(options.showPrevEl ? '' : 'hidden')}>
        <div ref={prevEl}>
          <IconArrowRight className={styleMap.trsCommon+styleMap.arrow+' rotate-180'}/>
        </div>
      </div>

      {swiperReady && 
      <Swiper
        loop={options.loop} // 슬라이드 루프
        spaceBetween={0} // 슬라이스 사이 간격
        slidesPerView={options.slidesPerView} // 보여질 슬라이스 수
        navigation={{
          enabled: true
          , prevEl: prevEl.current
          , nextEl: nextEl.current
        }} // prev, next button
        pagination={options.pagination}
        className="w-full h-full"
        style={{
          margin: '0'
        }}
        modules={[Navigation, Pagination]}
      >
        {children}
      </Swiper>}

      <div className={'flex justify-center items-center '+(options.showNaxtEl ? '' : 'hidden')}>
        <div ref={nextEl}>
          <IconArrowRight className={styleMap.trsCommon+styleMap.arrow}/>
        </div>
      </div>
    </div>
  );
}