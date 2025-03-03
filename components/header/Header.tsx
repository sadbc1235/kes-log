'use client'

import { useCallback, useEffect, useState } from "react";
import IconMenu from "../common/icon/IconMenu";
import IconSearch from "../common/icon/IconSearch";
import Aside from "../sideBar/Aside";
import HeaderSearch from "./HeaderSearch";
import HeaderMobileAside from "./HeaderMobileAside";

export default function Header() {

    const styleMap = {
        header: {
            default: ' text-[#fff]'
            , active: ' text-[#333] bg-[#fffffff5] shadow-lg'
        }
        , svg: {
            default: ' fill-[#fff]'
            , active: ' fill-[#8ab0ef]'
        }
    }

    const handle = {
        showMenu: () => {
            setIsShowMenu(!isShowMenu);
        }
        , showSearch: () => {
            setIsShowSearch(!isShowSearch);
        } 
        , onScroll: useCallback((event:any) => {
            const { scrollY } = window;
            if (scrollY >= window.innerHeight) {
                setIsActvieHeader(true);
            } else {
                setIsActvieHeader(false);
            }
        }, [])
    }

    const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
    const [isShowSearch, setIsShowSearch] = useState<boolean>(false);
    const [isActvieHeader, setIsActvieHeader] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', handle.onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handle.onScroll);
        }
    }, []);

    return (
        <>
            <header
                className={`
                    w-[calc(100%-270px)] h-[70px] fixed top-0 left-[270px] z-[11] flex items-center justify-between max-lg:left-[0px] max-lg:w-full pl-4 pr-4
                    transition-all duration-200 ease-in-out ${isActvieHeader ? styleMap.header.active : styleMap.header.default}`}
                // style={{border: '1px solid #fff'}}
            >
                <div>
                    <IconMenu 
                        className={`w-[30px] h-[30px] lg:hidden ${isActvieHeader ? styleMap.svg.active : styleMap.svg.default}`}
                        onClick={handle.showMenu}
                    />
                </div>
                <div>
                    <h2
                        className="text-lg text-center"
                        style={{fontFamily: 'Rubik Dirt'}}
                    >
                        KesLog
                    </h2>
                </div>
                <div>
                    <IconSearch 
                        className={`w-[30px] h-[30px] ${isActvieHeader ? styleMap.svg.active : styleMap.svg.default}`}
                        onClick={handle.showSearch}
                    />
                </div>
            </header>
            <Aside left="left-[0] max-lg:left-[-270px]"/>
            
            <HeaderSearch isShowSearch={isShowSearch} showSearch={handle.showSearch}/>

            <HeaderMobileAside isShowMenu={isShowMenu} showMenu={handle.showMenu}/>
        </>
    );
  }
  