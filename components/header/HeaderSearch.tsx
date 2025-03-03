'use client'
import SideSearch from "../common/search/SideSearch";

export default function HeaderSearch({isShowSearch, showSearch}:any) {

    return (
        <>
            <div 
                className={`
                    w-[100vw] h-full fixed top-0 bg-[#00000080] z-[11]
                    transition-all duration-200 ease-in-out ${isShowSearch ? 'right-[0px]' : 'right-[-100vw]'}
                `}
                onClick={showSearch}
            ></div>
            <SideSearch right={isShowSearch ? 'right-[0]' : 'right-[-100%]'}/>
        </>
    );
  }
  