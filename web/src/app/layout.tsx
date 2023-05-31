import { ReactNode } from 'react'
import './globals.css'
import { Nunito_Sans as NunitoSans, Righteous } from 'next/font/google'
import { Header } from '~/components/Header'

const nunitoSans = NunitoSans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
})

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-righteous',
})

export const metadata = {
  title: 'Gourmet spot',
  description: 'Organize your restaurant',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${nunitoSans.variable} ${righteous.variable} font-sans bg-gray-50 text-gray-950 py-[7.5rem] px-[6.25rem]`}
      >
        <Header />
        <main className="max-w-7xl mx-auto px-5">{children}</main>
      </body>
    </html>
  )
}
