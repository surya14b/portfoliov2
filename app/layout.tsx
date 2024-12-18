import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Suryakanth Gunnam - Software Developer Portfolio',
  description: 'Portfolio of Suryakanth Gunnam, a Software Developer specializing in backend development and scalable systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 min-h-screen text-white`}>
        {children}
      </body>
    </html>
  )
}

