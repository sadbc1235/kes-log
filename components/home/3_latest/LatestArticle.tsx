'use client'

import ContentWrapper from "@/components/common/ContentWrapper";
import LatestBigCard from "./LatestBigCard";
import LatestSmallCard from "./LatestSmallCard";

export default function LatestArticle() {
    const testCard = [
        {
            menuTag: 'menuTag1'
            , writeDt: '2025-02-15'
            , imgUrl: '/profile.webp'
            , title: '게시글 이름1'
            , content: '게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1'
            , views: '10'
        }
        , {
            menuTag: 'menuTag2'
            , writeDt: '2025-02-15'
            , imgUrl: '/giphy.gif'
            , title: '게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2게시글 이름2'
            , content: '게시글 내용2'
            , views: '78'
        }
        , {
            menuTag: 'menuTag3'
            , writeDt: '2025-02-15'
            , imgUrl: '/loading.gif'
            , title: '게시글 이름3'
            , content: '게시글 내용3'
            , views: '56'
        }
        , {
            menuTag: 'menuTag4'
            , writeDt: '2025-02-15'
            , imgUrl: '/loading.gif'
            , title: '게시글 이름4'
            , content: '게시글 내용4'
            , views: '56'
        }
    ]
  return (
    <ContentWrapper
        title="Latest Posts"
        subTitle="따끈따끈한 신상이오!!"
    >
        <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1 max-sm:gap-4">
            <LatestBigCard postInfo={testCard[0]} />
            <LatestSmallCard postList={testCard} />
        </div>
    </ContentWrapper>
  );
}