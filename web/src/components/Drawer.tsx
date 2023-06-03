'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { Order } from './Order'
import { Sumary } from './Sumary'

interface Booking {
  table: {
    number: number
  }
  client: {
    name: string
  }
}

interface OrderType {
  id: string
  dish: {
    coverURL: string
    name: string
    price: number
  }
  quantity: number
}

interface DrawerProps {
  children: ReactNode
  booking: Booking
  orders: OrderType[]
}

export function Drawer({ children, booking, orders }: DrawerProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-gray-950/50 backdrop-blur-sm" />
        <Dialog.Content className="h-screen bg-gray-50 w-[26.25rem] fixed right-0 top-0 p-[3.75rem] flex flex-col">
          <Dialog.Title className="text-3xl font-bold relative flex items-center before:w-5 before:h-2 before:bg-pink-400 before:absolute before:-left-[3.75rem]">
            Mesa {booking.table.number}
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-gray-900 text-lg">
            {booking.client.name}
          </Dialog.Description>
          <div className="mt-[3.75rem] flex-1 flex flex-col gap-5">
            <header className="flex items-end justify-between">
              <strong className="font-bold text-2xl">Pedidos</strong>
              <a
                href=""
                className="text-pink-400 underline text-sm font-bold transition-colors hover:text-pink-500"
              >
                fazer pedido
              </a>
            </header>
            <div className="flex flex-col gap-5">
              {orders.map((order) => {
                return <Order order={order} key={order.id} />
              })}
            </div>
            <div className="mt-auto">
              <Sumary orders={orders} />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
