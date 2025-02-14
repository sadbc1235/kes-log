import Logo from "./Logo";
import SideNav from "./SideNav";

export default function Aside() {
    return (
        <aside
            className="fixed top-0 left-0 w-[270px] h-full bg-[#fff] shadow-lg"
        >
            <Logo/>
            
            <SideNav/>
        </aside>
    )
}