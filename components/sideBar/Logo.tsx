import Link from "next/link";

export default function Logo() {
    return (
        <div
            className="w-full h-[250px] border-b-[1px] border-[#e3e3e3] flex flex-col justify-center items-center relative"
        >
            <div
                className="w-full h-[100px] bg-[#EFF8FF] absolute top-0"
            ></div>
            {/* 프로필 */}
            <div
                className="w-[90px] h-[90px] rounded-xl bg-[#fff] shadow-lg z-10 overflow-hidden"
            >
                <img className="object-cover w-full h-full" src="/profile.webp" />
            </div>
            <Link href="/">
            <h2
                className="text-xl text-center mt-[15px]"
                style={{fontFamily: 'Rubik Dirt'}}
            >
                Kes_Log
            </h2>
            </Link>
            <p
                className="text-xs text-[#8f8f8f] mt-[5px]"
            >
                _기믕수 입니다.
            </p>
        </div>
    )
}