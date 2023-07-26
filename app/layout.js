import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ["100", "300", "400", "500", "700", "900"] })

export const metadata = {
  title: 'Next js moviebase',
  description: 'Making a new moviebase in next js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#101010] text-white ${roboto.className}`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
