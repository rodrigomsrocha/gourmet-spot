'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'

interface BookingModalProps {
  children: ReactNode
}

export function BookingModal({ children }: BookingModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-gray-950/50 backdrop-blur-sm" />
        <Dialog.Content className="rounded-[2.5rem] bg-gray-50 w-[33.75rem] fixed left-1/2 top-1/2 p-[3.75rem] flex flex-col -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title className="text-3xl font-bold relative flex items-center before:w-5 before:h-2 before:bg-pink-400 before:absolute before:-left-[3.75rem]">
            Reservar mesa
          </Dialog.Title>
          <form className="mt-[1.875rem] flex-1 flex-col flex gap-5">
            <div className="flex gap-[0.625rem]">
              <div className="flex-1 flex flex-col gap-[0.625rem]">
                <label htmlFor="name">Cliente</label>
                <input
                  className="bg-gray-100 p-2 rounded-lg"
                  type="text"
                  id="name"
                  placeholder="Nome"
                />
              </div>
              <div className="flex flex-col gap-[0.625rem] w-32">
                <label htmlFor="email">Pessoas</label>
                <input
                  className="bg-gray-100 p-2 rounded-lg text-center"
                  type="number"
                />
              </div>
            </div>
            <button
              className="self-start bg-pink-400 rounded-lg px-4 py-2 transition-colors hover:bg-pink-500"
              type="submit"
            >
              Reservar
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
