'use client'
import MainArticle from "@/components/home/1_main/MainArticle";
import ProjectArticle from "@/components/home/2_project/ProjectArticle";
import LatestArticle from "@/components/home/3_latest/LatestArticle";
import PopluarArticle from "@/components/home/4_popluar/PopluarArticle";

export default function Home() {

  return (
    <section
      className="w-full relative"
    >
      <MainArticle/>
      <ProjectArticle/>
      <LatestArticle/>
      <PopluarArticle/>
    </section>
  );
}
