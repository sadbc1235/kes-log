'use client'
import ProjectSlide from "@/components/home/projectSlide/ProjectSlide";

export default function Home() {
  

  return (
    <section
      className="w-full relative"
    >
      <article
        className="w-full h-[100vh] overflow-hidden bg-[url(/giphy.gif)] bg-no-repeat bg-center bg-fixed bg-cover relative flex flex-col justify-end items-center"
      >
        <div
          className="w-full h-[100vh] bg-[#000000aa] absolute top-0"
        ></div>

        <ProjectSlide/>
      </article>
      <article className="h-[2000px]" style={{border: '1px solid red'}}></article>
    </section>
  );
}
