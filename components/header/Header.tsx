import Aside from "../sideBar/Aside";

export default function Header() {
    return (
        <>
            <header
                className="w-full h-[70px] fixed top-0 z-10"
                style={{border: '1px solid #fff'}}
            >
                
            </header>
            <Aside left="left-[0]"/>
        </>
    );
  }
  