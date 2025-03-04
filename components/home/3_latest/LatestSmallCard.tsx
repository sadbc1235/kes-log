import IconEye from "@/components/common/icon/IconEye";
export default function LatestSmallCard({postList}:{postList:any}) {
    return (
        <div 
            className="h-[700px] max-md:h-[500px] grid grid-cols-1 grid-rows-3 gap-8 max-sm:gap-4" 
        >
            {
                postList.map((item:any, idx:number) => (
                    idx != 0 && <div 
                        key={idx}
                        className="p-4 grid grid-cols-[2fr_1fr] gap-4 rounded-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer max-sm:p-2" 
                        style={{boxShadow: '1px 1px 10px 1px #00000020'}}
                    >
                        <div className="relative">
                            <div
                                className="inline-block bg-[#eff8ff] px-2 py-1 rounded-full text-sm text-[#8ab0ef] shadow-sm mb-4 max-sm:mb-2"
                            >
                                {item.menuTag}
                            </div>
                            <h2 className='text-base font-bold line-clamp-3 text-ellipsis break-all max-md:text-sm max-md:line-clamp-2'>
                                {item.title}
                            </h2>
                            <div className='absolute bottom-0 right-0 w-full flex justify-between text-sm text-[#8a8b94]'>
                                <div>{item.writeDt}</div>                        
                                <div className="flex gap-2">
                                    <IconEye className="w-[20px] h-[20px] fill-[#91929F]" />
                                    <span>{item.views}</span>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden">
                            <img 
                                className="w-full h-full object-cover"
                                src={item.imgUrl}
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}