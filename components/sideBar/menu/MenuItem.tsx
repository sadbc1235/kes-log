import IconArrowRight from "@/components/common/icon/IconArrowRight";
import Link from "next/link";

export default function MenuItem({subMenuInfo}:any) {
    const styleMap = {
        trsCommon: ' transition-all duration-200 ease-in-out'
        , subMenu: ' cursor-pointer flex items-center text-sm text-[#000000b3] fill-[#000000b3] hover:text-[#1562e080] p-3 pt-2 pb-2'
    }

    return (
        <Link href={`${'/category/'+subMenuInfo.menuCode}`}>
            <li className={styleMap.subMenu+styleMap.trsCommon}>
                <span className="pr-3">
                    <IconArrowRight className="w-[10px] h-[10px]" />
                </span>
                <div className="flex items-center">
                    {subMenuInfo.subMenuName} 
                    <span
                        className="ml-2 border-[1px] border-[#1562e080] rounded-full text-sm text-[#1562e080] p-2 pt-0 pb-0"
                    >
                        {subMenuInfo.articleCnt}
                    </span>
                </div>
            </li>
        </Link>
    );
  }
  