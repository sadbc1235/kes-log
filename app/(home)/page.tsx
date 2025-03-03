'use client'

import MainArticle from "@/components/home/main/MainArticle";

export default function Home() {

  return (
    <section
      className="w-full relative"
    >
      <MainArticle/>
      <article className="h-[2000px]" style={{border: '1px solid red'}}></article>
    </section>
  );
}
