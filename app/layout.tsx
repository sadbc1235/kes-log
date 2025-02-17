import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic"
import CommonLayout from "@/components/common/CommonLayout";
const Header = dynamic(() => import('../components/header/Header'), { ssr: false });

export const metadata: Metadata = {
  title: "KES LOG",
  description: "just logging kes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <CommonLayout>
          <Header/>
          <div></div>
          {children}
        </CommonLayout>
      </body>
    </html>
  );
}
