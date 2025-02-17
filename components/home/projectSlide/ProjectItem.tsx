import IconEye from "@/components/common/icon/IconEye";

export default function ProjectItem({projectInfo}:{projectInfo:any}) {


    return (
        <div
            className='w-full h-full overflow-hidden rounded-lg flex flex-col cursor-pointer transition-all duration-200 ease-in-out brightness-[0.75] hover:brightness-100'
        >
            <div className='w-full h-[50px] bg-[#EFF8FF] pl-5 flex justify-start items-center text-sm'>
                Created at : {projectInfo.createDt}
            </div>

            <div 
                className='h-[calc(100%-50px-250px)] border-[#e3e3e3] border-b-[1px] border-t-[1px]'
            >
                <img 
                    className='w-full h-full object-cover'
                    src={projectInfo.imgUrl}
                />
            </div>
            <div className='w-full h-[250px] bg-[#fff] p-4 relative'>
                <h2 className='text-lg line-clamp-1 text-ellipsis break-all'>
                    {projectInfo.title}
                </h2>
                <p className='text-sm mt-4 max-h-[150px] text-wrap whitespace-pre break-words text-ellipsis line-clamp-[7]'>
                    {projectInfo.content}
                </p>
                <div className='absolute bottom-4 right-4 flex gap-2'>
                    <IconEye className="w-[20px] h-[20px] fill-[#91929F]" />
                    <span className='text-sm text-[#8a8b94]'>{projectInfo.views}</span>
                </div>
            </div>
        </div>
    )
}