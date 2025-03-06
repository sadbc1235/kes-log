import IconEye from "@/components/common/icon/IconEye";
export default function SmallCard({postInfo}:{postInfo:any}) {
    return (
        <div
            className="h-[250px] p-4 grid grid-cols-[2fr_1fr] gap-4 rounded-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer max-md:h-[180px] max-md:p-2" 
            style={{boxShadow: '1px 1px 10px 1px #00000020'}}
        >
            <div className="relative">
                <div
                    className="inline-block bg-[#eff8ff] px-2 py-1 rounded-full text-sm text-[#8ab0ef] shadow-sm mb-4 max-sm:mb-2"
                >
                    {postInfo.menuTag}
                </div>
                <h2 className='text-base font-bold line-clamp-2 text-ellipsis break-all max-md:text-xs max-md:line-clamp-2'>
                    {postInfo.title}
                </h2>
                <p className='text-sm/6 mt-4 text-wrap whitespace-pre break-all text-ellipsis line-clamp-[3] max-md:mt-2 max-md:text-xs/5'>
                    {postInfo.content}
                </p>
                <div className='absolute bottom-0 right-0 w-full flex justify-between text-sm text-[#8a8b94]'>
                    <div>{postInfo.writeDt}</div>                        
                    <div className="flex gap-2">
                        <IconEye className="w-[20px] h-[20px] fill-[#91929F]" />
                        <span>{postInfo.views}</span>
                    </div>
                </div>
            </div>
            <div className="rounded-xl overflow-hidden">
                <img 
                    className="w-full h-full object-cover"
                    src={postInfo.imgUrl}
                />
            </div>
        </div>
    )
}