'use client'
import Aside from "../sideBar/Aside";

export default function HeaderMobileAside({isShowMenu, showMenu}:any) {

    return (
        <>
            <div 
                className={`
                    w-full h-full fixed top-0 bg-[#00000080] z-[11]
                    transition-all duration-200 ease-in-out ${isShowMenu ? 'left-[0px]' : 'left-[-100%]'}
                `}
                onClick={showMenu}
            ></div>
            <Aside left={isShowMenu ? 'left-[0px]' : 'left-[-270px]'}/>
        </>
    );
  }
  