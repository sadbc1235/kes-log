import IconEye from "@/components/common/icon/IconEye";
export default function ProjectCard({projectInfo}:{projectInfo:any}) {
    return (
        <div className="h-[500px]">
            <div className="w-full h-full rounded-xl flex overflow-hidden max-sm:block">
                <div className="w-1/2 max-sm:w-full max-sm:h-3/6">
                    <div className="w-full h-[50px] bg-[#EFF8FF] pl-5 flex items-center text-sm">
                        Created at : {projectInfo.createDt}
                    </div>
                    <div className="h-[calc(100%-50px)] overflow-hidden border-[#e3e3e3] border-b-[1px] border-t-[1px]">
                        <img 
                            className="w-full h-full object-cover"
                            src={projectInfo.imgUrl}
                        />
                    </div>
                </div>
                <div
                    className="w-1/2 max-sm:w-full max-sm:h-3/6"
                    style={{boxShadow: '-1px 0px 10px 1px #00000020'}}
                >
                    <div className='w-full h-full bg-[#fff] p-4 relative'>
                        <h2 className='text-lg font-bold line-clamp-1 text-ellipsis break-all max-sm:text-base'>
                            {projectInfo.title}
                        </h2>
                        <p className='text-sm/6 mt-4 text-wrap whitespace-pre break-all text-ellipsis line-clamp-[15] max-sm:line-clamp-[6] max-sm:text-xs/5'>
                            {projectInfo.content}
                        </p>
                        <div className='absolute bottom-4 right-4 flex gap-2'>
                            <IconEye className="w-[20px] h-[20px] fill-[#91929F]" />
                            <span className='text-sm text-[#8a8b94]'>{projectInfo.views}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}