'use client'

import ContentWrapper from "@/components/common/ContentWrapper";
import IconEye from "@/components/common/icon/IconEye";
import SlideWrapper from "@/components/common/slide/SlideWrapper";
import MainArticle from "@/components/home/main/MainArticle";
import { SwiperSlide } from 'swiper/react';

export default function Home() {
  const testCard = [
    {
        writeDt: '2025-02-16'
        , createDt: '2025-02-15'
        , imgUrl: '/profile.webp'
        , title: '프로젝트 이름1'
        // , content: '프로젝트 내용1asasdfasdfasdfasdfasdjkl;asdf;jkldasfj;lkdsfalj;ksdafjlk;sdfajklsdfaiojhuiguihpgqerbungippuoanguviupqerbngqbuipgquipqhghupbnqvunpbqipubuhiprgeqpongnoqpuniqrpguirhpguhiqpgernpubqrqpuiguhpoqehiropghjioakljn;sdgandksldgjioqeiohgiohqoijrhjiongrqoi[grijo[프로젝트 내용1asasdfasdfasdfasdfasdjkl;asdf;jkldasfj;lkdsfalj;ksdafjlk;sdfajklsdfaiojhuiguihpgqerbungippuoanguviupqerbngqbuipgquipqhghupbnqvunpbqipubuhiprgeqpongnoqpuniqrpguirhpguhiqpgernpubqrqpuiguhpoqehiropghjioakljn;sdgandksldgjioqeiohgiohqoijrhjiongrqoi[grijo[프로젝트 내용1asasdfasdfasdfasdfasdjkl;asdf;jkldasfj;lkdsfalj;ksdafjlk;sdfajklsdfaiojhuiguihpgqerbungippuoanguviupqerbngqbuipgquipqhghupbnqvunpbqipubuhiprgeqpongnoqpuniqrpguirhpguhiqpgernpubqrqpuiguhpoqehiropghjioakljn;sdgandksldgjioqeiohgiohqoijrhjiongrqoi[grijo['
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
    <section
      className="w-full relative"
    >
      <MainArticle/>
      <ContentWrapper 
        title="Toy Project"
        subTitle="맛 한번 보시랑께요~"
        className="pt-[130px]"
      >
        <div className="w-full">
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
                  >
                    <div
                      className="h-[650px] px-4 py-2 max-sm:h-[450px]"
                    >
                      <div
                        className="w-full h-full rounded-xl flex overflow-hidden"
                        style={{boxShadow: '1px 1px 10px 1px #00000020'}}
                      >
                        <div
                          className="w-1/2"
                        >
                          <div className="w-full h-[50px] bg-[#EFF8FF] pl-5 flex items-center text-sm">
                            Created at : {item.createDt}
                          </div>
                          <div className="h-[calc(100%-50px)] overflow-hidden border-[#e3e3e3] border-b-[1px] border-t-[1px]"
                          >
                            <img 
                              className="w-full h-full object-cover"
                              src={item.imgUrl}
                            />
                          </div>
                        </div>
                        <div
                          className="w-1/2"
                          style={{boxShadow: '-1px 0px 10px 1px #00000020'}}
                        >
                          <div className='w-full h-full bg-[#fff] p-4 relative'>
                            <h2 className='text-lg line-clamp-1 text-ellipsis break-all'>
                              {item.title}
                            </h2>
                            <p className='text-sm/6 mt-4 text-wrap whitespace-pre break-all text-ellipsis line-clamp-[20] max-sm:line-clamp-[12]'>
                              {item.content}
                            </p>
                            <div className='absolute bottom-4 right-4 flex gap-2'>
                              <IconEye className="w-[20px] h-[20px] fill-[#91929F]" />
                              <span className='text-sm text-[#8a8b94]'>{item.views}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </SlideWrapper>
        </div>
      </ContentWrapper>
      <article className="h-[2000px]"></article>
    </section>
  );
}
