import Image from 'next/image'
import logo from '../assets/logo.svg'
import { UserPlus } from 'lucide-react'
import Link from 'next/link'
import { CreateClientModal } from './CreateClientModal'
import { BookingModal } from './BookingModal'

export function Header() {
  return (
    <header className="flex items-center justify-between mx-auto mb-[3.75rem]">
      <Image src={logo} alt="Gourmet spot logo" />
      <nav className="flex gap-5">
        <Link className="p-2 font-bold text-lg" href="/">
          Mesas
        </Link>
        <Link className="p-2 font-bold text-lg" href="/menu">
          Cardápio
        </Link>
      </nav>
      <div className="flex gap-5">
        <CreateClientModal>
          <button className="h-full border-2 border-pink-400 bg-pink-100 shadow-md px-3 rounded-lg flex items-center justify-center transition-colors hover:bg-pink-200">
            <UserPlus className="h-6 w-6" />
          </button>
        </CreateClientModal>
        <BookingModal>
          <button className="bg-pink-400 rounded-lg text-lg font-bold py-3 px-10 shadow-md transition-colors hover:bg-pink-500">
            criar reserva
          </button>
        </BookingModal>
      </div>
    </header>
  )
}
