export default function CommonLayout({children}:{children: React.ReactNode}) {
    return (
        <div
            className="grid grid-cols-[270px_auto] max-lg:grid-cols-[auto] max-lg:grid-rows-[0px_auto] relative min-h-screen pb-[120px]"
        >
            {children}
            <footer
                className="absolute bottom-0 w-full h-[70px] mt-[50px] p-4 border-[#e3e3e3] border-t-[1px] flex items-center justify-end text-sm text-[#8a8b94]"
            >
                &copy; Copyright 2025 KES
            </footer>
        </div>
    );
  }
  