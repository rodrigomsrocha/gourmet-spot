import Image from 'next/image'
import logo from '../assets/logo.svg'
import { UserPlus } from 'lucide-react'

export function Header() {
  return (
    <header className="flex items-center justify-between max-w-[61.25rem] mx-auto mb-[3.75rem]">
      <Image src={logo} alt="Gourmet spot logo" />
      <div className="flex gap-5">
        <button className="border-2 border-pink-400 bg-pink-100 shadow-md w-[3.75rem] rounded-lg flex items-center justify-center transition-colors hover:bg-pink-200">
          <UserPlus className="h-[1.875rem] w-[1.875rem]" />
        </button>
        <button className="bg-pink-400 rounded-lg text-2xl py-[.875rem] px-[3.125rem] shadow-md transition-colors hover:bg-pink-500">
          criar reserva
        </button>
      </div>
    </header>
  )
}
