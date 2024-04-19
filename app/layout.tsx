import Header from "../components/header"
import Menu from "../components/menu"
import "../styles/global.css"
import { Metadata } from "next"

export const metadata :Metadata = {
  title: {
    template: "%s | calc",
    default: "Home"
  },
  description: 'ts-calc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
      <body>
        <Menu/>
        <Header/>
        {children}
      </body>
    </html>
  )
}
