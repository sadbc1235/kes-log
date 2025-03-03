import IconSearch from "@/components/common/icon/IconSearch";

export default function Search() {
  return (
    <div
        className="
          relative z-10 w-2/5 h-[60px] bg-[#fff] rounded-full border-[5px] border-[#1562e080] flex items-center pl-2 pr-3 overflow-hidden 
          max-xl:w-3/5 max-sm:w-3/4 max-sm:h-[50px] max-sm:border-[4px] mainArticleMediaWidth
        "
    >
        <IconSearch className="w-[40px] h-[40px] mr-2 fill-[#1562e080] max-sm:w-[30px] max-sm:h-[30px]" />
        <input className="outline-none w-full h-full" type="search" placeholder="Search" />
    </div>
  );
}
