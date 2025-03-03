'use client'

import SlideWrapper from '@/components/common/slide/SlideWrapper';
import { SwiperSlide } from 'swiper/react';
import ProjectItem from './ProjectItem';


export default function ProjectSlide() {
    const testCard = [
        {
            writeDt: '2025-02-16'
            , createDt: '2025-02-15'
            , imgUrl: '/profile.webp'
            , title: '프로젝트 이름1'
            , content: '프로젝트 내용1'
            , views: '10'
        }
        , {
            writeDt: '2025-02-16'
            , createDt: '2025-02-17'
            , imgUrl: '/giphy.gif'
            , title: '프로젝트 이름2'
            , content: '프로젝트 내용2'
            , views: '78'
        }
        , {
            writeDt: '2025-02-16'
            , createDt: '2025-02-17'
            , imgUrl: '/loading.gif'
            , title: '프로젝트 이름3'
            , content: '프로젝트 내용3'
            , views: '56'
        }
        , {
            writeDt: '2025-02-16'
            , createDt: '2025-02-17'
            , imgUrl: '/loading.gif'
            , title: '프로젝트 이름4'
            , content: '프로젝트 내용4'
            , views: '56'
        }
    ]

    return (
        <div
          className="relative w-1/2 flex justify-center pb-10"
        >
          <SlideWrapper
            options={{
              loop: true
              , slidesPerView: 'auto'
              , pagination: true
              , showPrevEl: true
              , showNaxtEl: true
            }}
          >
            
            {
              testCard.map((item:any, idx:number) => (
                <SwiperSlide 
                  key={idx}
                  className='max-w-1/3 pr-3 pl-3'
                >
                  <ProjectItem
                    projectInfo={item}
                  />
                </SwiperSlide>
              ))
            }
          </SlideWrapper>
        </div>
    );
}