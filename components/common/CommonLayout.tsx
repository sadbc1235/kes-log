export default function CommonLayout({children}:{children: React.ReactNode}) {
    return (
        <div
            className="grid grid-cols-[270px_auto] max-lg:grid-cols-[auto]"
        >
            {children}
        </div>
    );
  }
  