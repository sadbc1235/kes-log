'use client'

import IconArrowRight from "@/components/common/icon/IconArrowRight";
import { useState, cloneElement } from "react";

export default function Menu({menuList, children}:{menuList:Array<any>, children: React.ReactNode}) {
    const styleMap = {
        trsCommon: ' transition-all duration-200 ease-in-out'
        , ulCommon: ' w-full grid grid-cols1 gap-3'
        , menu: ' cursor-pointer text-lg p-3 pt-2 pb-2 rounded-lg flex justify-between items-center'
        , menuDefault: ' text-[#000000b3] fill-[#000000b3]'
        , menuColor: ' bg-[#EFF8FF] text-[#1562e080] fill-[#1562e080] shadow-sm'
        , menuHover: ' hover:shadow-sm hover:bg-[#EFF8FF] hover:text-[#1562e080] hover:fill-[#1562e080]'
        , menuArrow: ' w-[10px] h-[10px]'
        , subMenu: ' cursor-pointer flex items-center text-md text-[#000000b3] fill-[#000000b3] hover:text-[#1562e080] p-3 pt-2 pb-2'
    }

    const handle = {
        openSubMenu: (menuIdx:number, e:any) => {
            if(!!menuList[menuIdx].subMenuList.length) {
                const tempState = [...isActiveList];
                tempState[menuIdx] = !tempState[menuIdx];
                setIsActiveList(tempState);
            }
        }
    }

    const [isActiveList, setIsActiveList] = useState<boolean[]>(new Array(menuList.length).fill(false));

    return (
        <ul
            className={styleMap.ulCommon}
            style={{fontFamily: 'Rubik'}}
        >
            {
                menuList.map((item: any, idx: number) => (
                    <li key={idx} className={"transition-all duration-200 ease-in-out overflow-hidden "+(isActiveList[idx] ? 'max-h-[500px]' : 'max-h-[44px]')}>
                        <div 
                            className={styleMap.menu+styleMap.trsCommon+styleMap.menuHover+(isActiveList[idx] ? styleMap.menuColor : styleMap.menuDefault)}
                            onClick={handle.openSubMenu.bind(null, idx)}
                        >
                            <div className="flex items-center">
                                {item.menuName} 
                                <span
                                    className="ml-2 border-[1px] border-[#1562e080] rounded-full text-sm text-[#1562e080] p-2 pt-0 pb-0"
                                >
                                    {item.articleCnt}
                                </span>
                            </div>
                            <span className={(!!item.subMenuList.length ? 'block' : 'hidden')}>
                                <IconArrowRight className={styleMap.menuArrow+styleMap.trsCommon+(isActiveList[idx] ? ' rotate-90' : ' rotate-0')} />
                            </span>
                        </div>
                        <ul className={"w-full grid grid-cols1 gap-3 pl-3"}>
                            {
                                item.subMenuList.map((item:any, idx:number) => (
                                    children && cloneElement(children as React.ReactElement, {subMenuInfo: item, key: idx})
                                ))
                            }
                        </ul>
                    </li>
                ))
            }
            
        </ul>
    );
  }
  