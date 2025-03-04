'use client'

import Link from "next/link";
import IconEllipsis from "./icon/IconEllipsis";

export default function ContentWrapper({title, subTitle, className, menuUrl, children}:{title:string, subTitle:string, className?:string, menuUrl?:string, children: React.ReactNode}) {

  return (
    <article
        className={"w-full relative flex flex-col items-center pt-[120px] "+className}
    >
        <div
            className="w-[60%] max-2xl:w-[80%] max-xl:w-[90%] mb-10 flex justify-between items-center contentWrappereMediaWidth"
        >
            <div>
                <h1
                    className="text-4xl text-[#333] font-bold mb-3 max-sm:text-3xl"
                >
                    {title}
                </h1>
                <p
                    className="text-md text-[#8f8f8f] max-sm:text-sm"
                >
                    {subTitle}
                </p>
            </div>
            <div>
                {!!menuUrl && 
                <Link href={menuUrl}>
                    <IconEllipsis className="w-[20px] h-[20px] fill-[#333] cursor-pointer"/>
                </Link>
                }
            </div>
        </div>
        <div
            className="w-[60%] max-2xl:w-[80%] max-xl:w-[90%] contentWrappereMediaWidth"
        >
            {children}
        </div>
    </article>
  );
}