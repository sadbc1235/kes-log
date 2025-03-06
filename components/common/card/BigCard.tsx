import IconEye from "@/components/common/icon/IconEye";
export default function BigCard({postInfo}:{postInfo:any}) {
    return (
        <div 
            className={`rounded-xl h-[500px] overflow-hidden max-md:h-[500px] max-sm:h-[500px] hover:scale-[1.02] transition-transform duration-300 cursor-pointer`} 
            style={{boxShadow: '1px 1px 10px 1px #00000020'}}
        >
            <div
                className="h-[45%]"
            >
                <img 
                    className="w-full h-full object-cover"
                    src={postInfo.imgUrl}
                />
            </div>
            <div
                className="h-[55%] p-4 relative"
                style={{boxShadow: '0px -1px 10px 1px #00000020'}}
            >
                <div
                    className="inline-block bg-[#eff8ff] px-2 py-1 rounded-full text-sm text-[#8ab0ef] shadow-sm mb-4"
                >
                    {postInfo.menuTag}
                </div>
                <h2 className='text-lg font-bold line-clamp-2 text-ellipsis break-all max-md:text-base'>
                    {postInfo.title}
                </h2>
                <p className='text-sm/6 mt-4 text-wrap whitespace-pre break-all text-ellipsis line-clamp-[4] max-md:text-xs/5'>
                    {postInfo.content}
                </p>
                <div className='absolute bottom-0 right-0 w-full flex justify-between p-4 text-sm text-[#8a8b94]'>
                    <div>{postInfo.writeDt}</div>                        
                    <div className="flex gap-2">
                        <IconEye className="w-[20px] h-[20px] fill-[#91929F]" />
                        <span>{postInfo.views}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}