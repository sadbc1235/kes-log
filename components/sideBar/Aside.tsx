import Logo from "./Logo";
import SideNav from "./SideNav";

export default function Aside({left, showMenu}:{left:string, showMenu?:any}) {
    return (
        <aside
            className={`fixed top-0 ${left} w-[270px] h-full bg-[#fff] shadow-lg z-[11] transition-all duration-200 ease-in-out `}
        >
            <Logo/>
            
            <SideNav showMenu={showMenu}/>
        </aside>
    )
}