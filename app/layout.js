import { Inter } from 'next/font/google'
import '../app/ui/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Engineer Dojo',
  description: 'Engineer output tool',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
