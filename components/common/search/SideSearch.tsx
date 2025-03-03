import IconSearch from "@/components/common/icon/IconSearch";

export default function SideSearch({right}:{right:string}) {
  return (
    <div
      className={`
        fixed top-5 bottom-0 ${right} z-10 w-1/3 h-[60px] bg-[#fff] rounded-l-full border-l-[5px] border-y-[5px] border-[#1562e080] flex items-center pl-2 pr-3 overflow-hidden 
        max-xl:w-1/2 max-sm:w-[95%] max-sm:h-[50px] max-sm:border-l-[4px] max-sm:border-y-[4px]
        transition-all duration-200 delay-[.08s] ease-in-out z-[11]
      `}
    >
        <IconSearch className="w-[40px] h-[40px] mr-2 fill-[#1562e080] max-sm:w-[30px] max-sm:h-[30px]" />
        <input className="outline-none w-full h-full" type="search" placeholder="Search" />
    </div>
  );
}
