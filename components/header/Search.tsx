import IconSearch from "@/components/common/icon/IconSearch";

export default function Search() {
  return (
    <div
        className="w-1/3 h-[60px] bg-[#fff] rounded-full border-[5px] border-[#1562e080] flex items-center pl-2 pr-3 overflow-hidden"
    >
        <IconSearch className="w-[40px] h-[40px] mr-2 fill-[#1562e080]" />
        <input className="outline-none w-full h-full" type="search" placeholder="Search" />
    </div>
  );
}
