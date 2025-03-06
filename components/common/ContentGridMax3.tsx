'use client'
export default function ContentGridMax3({children}:{children: React.ReactNode}) {

  return (
    <div 
        className="grid grid-cols-3 gap-8 max-2xl:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4"
    >
        {children}
    </div>
  );
}