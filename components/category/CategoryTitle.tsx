'use client'

export default function CategoryTitle({title, subTitle}: {title: string, subTitle: string}) {
  return (
      <article
        className="w-full pt-[70px] pb-[0px] flex justify-center items-center"
      >
        <div className="text-center w-[500px] max-md:w-[80%]">
          <h1 className="text-4xl font-bold text-[#333] break-words max-md:text-3xl max-sm:text-2xl">
            {title}
          </h1>
          <div className="flex justify-center items-center my-3">
            <div className="w-[8px] h-[8px] bg-[#8ab0ef] rounded-full"></div>
            <div className="w-full h-[2px] bg-[#8ab0ef]"></div>
            <div className="w-[8px] h-[8px] bg-[#8ab0ef] rounded-full"></div>
          </div>
          <p className="px-2 text-base text-[#666] break-words max-md:text-sm">
            {subTitle}
          </p>
        </div>
      </article>
  );
}
